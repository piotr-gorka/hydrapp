import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

const add = document.querySelector(".add--js");
const remove = document.querySelector(".remove--js");
let counter = document.querySelector(".counter--js");


const key = new Date().toISOString().slice(0, 10);
const entry = localStorage.getItem(key);


let result = "";

/////////////////////////

if (entry) {
  result = entry;
}

counter.innerHTML = result;
 let number = result;


//console.log(result);
//console.log(entry);


add.addEventListener("click", () => {
  number++;
  counter.innerHTML = number;
  localStorage.setItem(key, number);
});

remove.addEventListener("click", () => {
  if (number > 0) {
    number--;
    counter.innerHTML = number;
    localStorage.setItem(key, number);
  } else if (number <= 0) {
    counter.innerHTML = 0;
  }
});
