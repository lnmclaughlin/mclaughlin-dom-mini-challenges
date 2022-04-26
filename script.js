"use strict";

const colaButton = document.querySelector(".cola");
const peanutButton = document.querySelector(".peanuts");
const chocolateButton = document.querySelector(".chocolate");
const gummiesButton = document.querySelector(".gummies");
const totalParagraph = document.querySelector(".vending-total");
// console.dir(colaButton);

let total = 0;

colaButton.addEventListener("click", (event) => {
  total += 2;
  console.log(total);
  totalParagraph.textContent = `Total: $${total}.00`;
});

peanutButton.addEventListener("click", (event) => {
  total += 3;
  console.log(total);
  totalParagraph.textContent = `Total: $${total}.00`;
});

chocolateButton.addEventListener("click", (event) => {
  total += 4;
  console.log(total);
  totalParagraph.textContent = `Total: $${total}.00`;
});

gummiesButton.addEventListener("click", (event) => {
  total += 6;
  console.log(total);
  totalParagraph.textContent = `Total: $${total}.00`;
});

//2

const makeMoney = document.querySelector("#quantity");
const moneyType = document.querySelector("#currency-type"); //# =id, dot = class
const moneyForm = document.querySelector(".make-money");
const moneyContainer = document.querySelector(".money-container");

moneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(makeMoney.value);
  console.log(moneyType.value);
  const howMany = makeMoney.value;
  const coinType = moneyType.value;

  for (let i = 0; i < howMany; i++) {
    console.log("");
    const newCoin = document.createElement("div");
    newCoin.classList.add(coinType); //moneyType.value
    // moneyContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
      moneyContainer.append(newCoin);
    });
  }
});
//3
const onBtn = document.querySelector(".on");
const offBtn = document.querySelector(".off");
const toggleBtn = document.querySelector(".toggle");
const endBtn = document.querySelector(".end");
const lightBulb = document.querySelector(".bulb");
// node list: (treated like an array)
const allButtons = document.querySelectorAll(".btn");

onBtn.addEventListener("click", () => {
  lightBulb.classList.add("turn-on");
});
offBtn.addEventListener("click", () => {
  lightBulb.classList.remove("turn-on");
});
toggleBtn.addEventListener("click", () => {
  lightBulb.classList.toggle("turn-on");
});
endBtn.addEventListener("click", () => {
  lightBulb.remove();
  //   onBtn.disabled = true;
  allButtons.forEach((node) => {
    node.disabled = true;
  });
});
