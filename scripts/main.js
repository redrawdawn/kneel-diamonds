import { KneelDiamonds } from "./KneelDiamonds.js"
import { addCustomOrder } from "./database.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
    document.querySelector("#orderButton").addEventListener("click", event => {
        addCustomOrder()
    })
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})