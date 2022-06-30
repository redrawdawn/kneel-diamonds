import { getOrders } from "./database.js"
import { getMetals } from "./database.js"
import { getSizes } from "./database.js"
import { getStyles } from "./database.js"

const buildOrderListItem = (order) => {

    let metalCost = getMetalCost(order.metalId) 
    let sizeCost = getSizeCost(order.sizeId)
    let styleCost = getStyleCost(order.styleId)

    let totalCost = metalCost + sizeCost + styleCost

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}



const getMetalCost = (metalId) => {
    const metals = getMetals()

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === metalId
        }
    )
    const totalCost = foundMetal.price

    return totalCost
}

const getSizeCost = (sizeId) => {
    const sizes = getSizes()

    // Remember that the function you pass to find() must return true/false
    const foundSize = sizes.find(
        (size) => {
            return size.id === sizeId
        }
    )
    
    const totalCost = foundSize.price

    return totalCost
}

const getStyleCost = (styleId) => {
    const styles = getStyles()

    // Remember that the function you pass to find() must return true/false
    const foundStyle = styles.find(
        (style) => {
            return style.id === styleId
        }
    )
    const totalCost = foundStyle.price

    return totalCost
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
   
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}



