// this module creates the list of fish to add to the DOM

import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {

     const contentElement = document.querySelector(".locations")
     const allTheLocations = useLocation()

    contentElement.innerHTML += `
        <article>
            ${allTheLocations.map(location => Location(location)).join("")}
        </article>
    `
}