function renderDogs(dogData) {
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
         `;
    }, '');
}
function renderCustomers(customerData) {
    return customerData.reduce((acc, customer) => {
        return acc += `
              <tr>
                  <td>${customer.name}</td>
                  <td>${customer.lastName}</td>
                  <td>${customer.phoneNumber}</td>
              </tr>
          `;
    }, '');
}
function addClickListeners() {
    const allDogElems = document.querySelectorAll('tbody > tr');
    const imgContainerElem = document.querySelector('.main__img-container');
    allDogElems.forEach(dogEl => {
        const dogElem = dogEl;
        dogElem.addEventListener('click', (event) => {
            const target = event.currentTarget;
            const url = target.getAttribute('data-img');
            imgContainerElem.innerHTML = `<img class='dog-img' src="${url}" />`;
        });
    });
}
function removeClickListeners() {
    const allDogElems = document.querySelectorAll('tbody > tr');
    const imgContainerElem = document.querySelector('.main__img-container');
    allDogElems.forEach(dogEl => {
        const dogElem = dogEl;
        dogElem.removeEventListener('click', (event) => {
            const target = event.currentTarget;
            const url = target.getAttribute('data-img');
            imgContainerElem.innerHTML = `<img class='dog-img' src="${url}" />`;
        });
    });
}
export { renderDogs, renderCustomers, addClickListeners, removeClickListeners };
