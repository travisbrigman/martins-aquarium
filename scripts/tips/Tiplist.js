// this module creates the list of fish to add to the DOM

import { useTip } from "./TipDataProvider.js"
import { Tip } from "./Tip.js"

export const TipList = () => {

    // get a reference to the correct element to inject HTML into
    const contentElement = document.querySelector(".tip")
    const allTheTips = useTip()

    //add to the existing HTML in content element
    contentElement.innerHTML += `
            ${allTheTips.map(eachTip => Tip(eachTip)).join("")}
    `
}