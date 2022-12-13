import { Customer, Dog } from "./interfaces.js"

function renderDogs(dogData: Dog[]): string {
    return dogData.reduce((acc, dog) => {
       return acc += `
             <tr data-img='${dog.img}'}>
                 <td>${dog.name}</td>
                 <td>${dog.breed}</td>
                 <td>${dog.age}</td>
                 <td>${dog.sex === 'female' ? '<i class="fa-solid fa-venus"></i>' : '<i class="fa-solid fa-mars"></i>'}</td>
                 <td>${dog.owner.name} ${dog.owner.lastName}</td>
                 <td>${dog.chipNumber}</td>
                 <td>${dog.present ? '<span class="present-yes">YES</span>' : '<span class="present-no">NO</span>'}</td>
             </tr>
         `
     }, '')
 }
 
 function renderCustomers(customerData: Customer[]): string {
 
 
 
     return customerData.reduce((acc, customer) => {
        return acc += `
              <tr>
                  <td>${customer.name}</td>
                  <td>${customer.lastName}</td>
                  <td>${customer.phoneNumber}</td>
              </tr>
          `
      }, '')
  }
 
 function addClickListeners(): void {
     const allDogElems = document.querySelectorAll('tbody > tr') as NodeList
     const imgContainerElem = document.querySelector('.main__img-container') as HTMLElement
 
     allDogElems.forEach(dogEl => {
         const dogElem: HTMLTableRowElement = dogEl as HTMLTableRowElement
 
         dogElem.addEventListener('click', (event) => {
             const target: HTMLTableRowElement = event.currentTarget as HTMLTableRowElement
             const url: string = target.getAttribute('data-img') as string
             imgContainerElem.innerHTML = `<img class='dog-img' src="${url}" />`
         })
         
     })
 }
 
 function removeClickListeners(): void {
     const allDogElems = document.querySelectorAll('tbody > tr') as NodeList
     const imgContainerElem = document.querySelector('.main__img-container') as HTMLElement
 
     allDogElems.forEach(dogEl => {
         const dogElem: HTMLTableRowElement = dogEl as HTMLTableRowElement
 
         dogElem.removeEventListener('click', (event) => {
             const target: HTMLTableRowElement = event.currentTarget as HTMLTableRowElement
             const url: string = target.getAttribute('data-img') as string
             imgContainerElem.innerHTML = `<img class='dog-img' src="${url}" />`
         })
         
     })
 }

export { renderDogs, renderCustomers, addClickListeners, removeClickListeners }