// this module creates the list of fish to add to the DOM

import { useFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

export const FishList = () => {

    // get a reference to the correct element to inject HTML into
    const contentElement = document.querySelector(".fishes")
    const allTheFish = useFish()

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentation = ""
    for (const eachFish of allTheFish) {
     fishHTMLRepresentation += Fish(eachFish)
    }
    console.log(fishHTMLRepresentation)

    //add to the existing HTML in content element
    contentElement.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentation}
        </article>
    `

}

