// this module creates the list of fish to add to the DOM

import { useFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

export const FishList = () => {

    // get a reference to the correct element to inject HTML into
    const contentElement = document.querySelector(".fishes")
    const allTheFish = useFish()

    //add to the existing HTML in content element
    contentElement.innerHTML += `
        <article class="fishList">
            ${allTheFish.map(fish => Fish(fish)).join("")}
        </article>
    `
}





