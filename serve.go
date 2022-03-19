package main

import (
	"flag"
	"fmt"
	"html/template"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gorilla/mux"
)

var (
	port string
)

func initFlags() {
	flag.StringVar(&port, "p", "3030", "port to listen on")
	flag.Parse()
}

func main() {
	r := mux.NewRouter()

	initFlags()

	indexTmpl := template.Must(template.ParseFiles("public/index.html"))

	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		indexTmpl.Execute(w, nil)
	})
	
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("public/"))).Methods("GET")

	// Create a channel to listen for OS interrupts
	var stop = make(chan os.Signal)
	signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM)

	// go creates a new goroutine, a parallel process. This allows the program to constantly check for an interrupt in the background.
	go func() {
		<-stop
		fmt.Println("\nStopping...")
		// Ensures that everything has time to finish
		time.Sleep(2*time.Second)
		os.Exit(0)
	}()

	fmt.Printf("Listening on port %v...\n", port)
	http.ListenAndServe(":" + port, r)
}