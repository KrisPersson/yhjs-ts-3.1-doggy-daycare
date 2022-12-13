import { elem, mainHTMLCustomers, mainHTMLDogs } from "./globals.js";
import { addClickListeners, removeClickListeners, renderDogs, renderCustomers } from "./functions.js";
import { dogData, customerData } from "./api.js";
function addClickListenerForAnchorEls() {
    elem.showDogsLink.addEventListener('click', () => {
        if (!elem.showDogsLink.classList.contains('nav__a--selected')) {
            elem.main.innerHTML = mainHTMLDogs;
            const tableBody = document.querySelector('tbody');
            tableBody.innerHTML = renderDogs(dogData);
            addClickListeners();
            elem.showDogsLink.classList.toggle('nav__a--selected');
            elem.showCustomersLink.classList.toggle('nav__a--selected');
        }
    });
    elem.showCustomersLink.addEventListener('click', () => {
        if (!elem.showCustomersLink.classList.contains('nav__a--selected')) {
            removeClickListeners();
            elem.main.innerHTML = mainHTMLCustomers;
            const tableBody = document.querySelector('tbody');
            tableBody.innerHTML = renderCustomers(customerData);
            elem.showDogsLink.classList.toggle('nav__a--selected');
            elem.showCustomersLink.classList.toggle('nav__a--selected');
        }
    });
}
export { addClickListenerForAnchorEls };
