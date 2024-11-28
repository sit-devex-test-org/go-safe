package main

import (
	"crypto/rand"
	"fmt"
	"math/big"

	cowsay "github.com/Code-Hex/Neo-cowsay/v2"
)

func main() {
	phrase := getRandomQuote()
	options := cowsay.Random()
	say, err := cowsay.Say(
		phrase,
		options,
	)
	if err != nil {
		panic(err)
	}
	fmt.Println(say)
}

// Function to pick a random quote using cryptographic randomness
func getRandomQuote() string {
	// List of quotes
	quotes := []string{
		"Security is not a product, but a process.",
		"The problem is not the user’s lack of knowledge, but the system’s lack of guidance.",
		"The only secure system is one that is unplugged, turned off, and locked in a room.",
		"If you think technology can solve your security problems, then you don’t understand the problems and you don’t understand the technology.",
		"Data is a precious thing and will last longer than the systems themselves.",
	}

	// Generate a cryptographically secure random index
	nBig, err := rand.Int(rand.Reader, big.NewInt(int64(len(quotes))))
	if err != nil {
		return ""
	}
	randomIndex := nBig.Int64()

	// Return the random quote
	return quotes[randomIndex]
}
