/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  setInterval(() => {
    const icons = ["♦", "♥", "♠", "♣"];
    const content = [
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
      "K",
      "A",
    ];

    let randomIcon = Math.floor(Math.random() * icons.length);
    let randomNumber = Math.floor(Math.random() * content.length);
    let firstIcon = document.getElementById("firstIcon");
    let number = document.getElementById("number");
    let secondIcon = document.getElementById("secondIcon");

    firstIcon.innerHTML = icons[randomIcon];
    number.innerHTML = content[randomNumber];
    secondIcon.innerHTML = icons[randomIcon];

    if (
      (firstIcon.innerHTML == icons[0] && secondIcon.innerHTML == icons[0]) ||
      (firstIcon.innerHTML == icons[1] && secondIcon.innerHTML == icons[1])
    ) {
      firstIcon.style.color = "red";
      secondIcon.style.color = "red";
    } else {
      firstIcon.style.color = "black";
      secondIcon.style.color = "black";
    }
  }, 10000);
};
