import { Customer, Dog } from "./interfaces.js"
import { renderDogs, addClickListeners } from "./functions.js"
import { addClickListenerForAnchorEls } from "./event-listeners.js"


const BASE_URL: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/doggy-daycare-api/dogs"
const customerData: Customer[] = [] 
let dogData: Dog[] = [] 


async function callAPI() {
    try {
        const data = await fetch(BASE_URL)
        const res = await data.json()
        const tBody = document.querySelector('tbody') as HTMLElement
        sortData(res)
        tBody.innerHTML = renderDogs(dogData)
        addClickListeners()
        addClickListenerForAnchorEls()

    } catch (error) {
        console.log(error)
    }
}

function sortData(res: Dog[]) {
    dogData = [...res]
    dogData.forEach(dog => {
        customerData.push(dog.owner)
    })
}


export { callAPI, dogData, customerData }