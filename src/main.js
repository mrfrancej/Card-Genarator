/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () =>{
  const number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suit = ["Hearts", "Diamonds", "Spades", "Clubs"];

  let randomnumberposition = Math.floor(Math.random() * number.length);
  let randomsuitposition = Math.floor(Math.random() * suit.length);

    let randomsuit = suit[randomsuitposition];

  document.querySelector("suit").innerHTML = randomsuit;
  document.querySelector("number").innerHTML = randomnumberposition;
  document.querySelector("suit").innerHTML = randomsuit;
};
