package main

import (
	"html/template"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	indexTmpl := template.Must(template.ParseFiles("public/index.html"))

	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		indexTmpl.Execute(w, nil)
	})
	
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("public/"))).Methods("GET")

	http.ListenAndServe(":8080", r)
}