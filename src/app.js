/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["heart", "spade", "club", "diamond"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
let suitIndex = 0;
let valueIndex = 0;

function suitClasses(suit) {
  if (suit == "heart") {
    return "bi bi-suit-heart-fill red";
  }
  if (suit == "spade") {
    return "bi bi-suit-spade-fill";
  }
  if (suit == "club") {
    return "bi bi-suit-club-fill";
  }
  if (suit == "diamond") {
    return "bi bi-suit-diamond-fill red";
  }
}

function generateNewCard() {
  suitIndex = Math.floor(Math.random() * suits.length);
  valueIndex = Math.floor(Math.random() * values.length);
  // document.getElementById("suit").innerHTML = suits[suitIndex];
  // document.getElementById("value").innerHTML = values[valueIndex].toString();
  let suitElemenets = document.querySelectorAll(".suit");
  suitElemenets.forEach(e => {
    e.className = e.className + " " + suitClasses(suits[suitIndex]) + " ";
  });
  let valueElement = document.querySelector(".value");
  valueElement.innerHTML = values[valueIndex].toString();
}
window.onload = function() {
  //write your code here
  generateNewCard();
};
