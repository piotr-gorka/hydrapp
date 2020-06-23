import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const add = document.querySelector(".add--js");
const remove = document.querySelector(".remove--js");
let counter = document.querySelector(".counter--js");

let number = 0;

add.addEventListener("click", () => {
  number++;
  counter.innerHTML = number;
});

remove.addEventListener("click", () => {
  if (number > 0) {
    number--;
    counter.innerHTML = number;
  }else if(number <= 0){
      counter.innerHTML = 0;
  }
});
