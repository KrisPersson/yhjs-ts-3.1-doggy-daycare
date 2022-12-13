var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { renderDogs, addClickListeners } from "./functions.js";
import { addClickListenerForAnchorEls } from "./event-listeners.js";
const BASE_URL = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/doggy-daycare-api/dogs";
const customerData = [];
let dogData = [];
function callAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetch(BASE_URL);
            const res = yield data.json();
            const tBody = document.querySelector('tbody');
            sortData(res);
            tBody.innerHTML = renderDogs(dogData);
            addClickListeners();
            addClickListenerForAnchorEls();
        }
        catch (error) {
            console.log(error);
        }
    });
}
function sortData(res) {
    dogData = [...res];
    dogData.forEach(dog => {
        customerData.push(dog.owner);
    });
}
export { callAPI, dogData, customerData };
