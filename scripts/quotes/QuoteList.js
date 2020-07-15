// this module creates the list of fish to add to the DOM

import { useQuote } from "./QuoteDataProvider.js"
import { Quote } from "./Quote.js"

export const QuoteList = () => {

    // get a reference to the correct element to inject HTML into
    const contentElement = document.querySelector(".quotes")
    const allTheQuotes = useQuote()

    // Generate all of the HTML for all of the fish
    let quoteHTMLRepresentation = ""
    for (const eachQuote of allTheQuotes) {
     quoteHTMLRepresentation += Quote(eachQuote)
    }
    console.log(quoteHTMLRepresentation)

    //add to the existing HTML in content element
    contentElement.innerHTML += `
            ${quoteHTMLRepresentation}
    `
}