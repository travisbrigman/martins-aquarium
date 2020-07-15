// this module creates the list of fish to add to the DOM

import { useTip } from "./TipDataProvider.js"
import { Tip } from "./Tip.js"

export const TipList = () => {

    // get a reference to the correct element to inject HTML into
    const contentElement = document.querySelector(".tip")
    const allTheTips = useTip()

    // Generate all of the HTML for all of the fish
    let tipsHTMLRepresentation = ""
    for (const eachTip of allTheTips) {
     tipsHTMLRepresentation += Tip(eachTip)
    }
    console.log(tipsHTMLRepresentation)

    //add to the existing HTML in content element
    contentElement.innerHTML += `
            ${tipsHTMLRepresentation}
    `
}