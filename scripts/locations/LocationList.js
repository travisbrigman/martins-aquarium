// this module creates the list of fish to add to the DOM

import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {

    // get a reference to the correct element to inject HTML into
    const contentElement = document.querySelector(".locations")
    const allTheLocations = useLocation()

    // Generate all of the HTML for all of the fish
    let locationsHTMLRepresentation = ""
    for (const eachLocation of allTheLocations) {
     locationsHTMLRepresentation += Location(eachLocation)
    }
    console.log(locationsHTMLRepresentation)

    //add to the existing HTML in content element
    contentElement.innerHTML += `
            ${locationsHTMLRepresentation}  
    `
}