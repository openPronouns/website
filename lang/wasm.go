package main

import (
	"fmt"
	"syscall/js"
)

var (
	DefaultLocale = "en"
	SupportedLocales = []string{"en", "eo"}
)

func main() {
	locale := GetLocale()

	fmt.Println("Locale:", locale)
}

//export getLocale
func GetLocale() string {
	var locale string

	// Get the locale from the browser
	browserLocale := js.Global().Get("navigator").Get("languages")

	for i := 0; i < browserLocale.Length(); i++ {
		locale = browserLocale.Index(i).String()
		if IsSupportedLocale(locale) {
			return locale
		}
	}

	return DefaultLocale
}

func IsSupportedLocale(locale string) bool {
	for i := 0; i < len(SupportedLocales); i++ {
		if locale == SupportedLocales[i] {
			return true
		}
	}

	return false
}