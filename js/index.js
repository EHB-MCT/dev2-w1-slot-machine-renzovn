import { slotMachine } from "./slotMachine.js";

function init() {
  // TODO: log the document using console.log to test if you can get access to it
  console.log("Init");
  // TODO: log the submit button. If that works, store that button in a variable
  const button = document.querySelector("#button");
  // TODO: attach an event listener to that button and show a log "button clicked"
  button.addEventListener("click", function () {
    console.log("button clicked");
    pullLever();
  });
  // TODO: if the submit button is clicked, the lever is pulled (= call that function)
}

function pullLever() {
  // TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
  // TODO: spin the slot machine
  slotMachine.spin();
  // TODO: show slots and win status
}

function showSlots() {
  // TODO: show the slot symbols in HTML
  let slots = "";
  for (let index = 0; index < slotMachine.slots.length; index++) {
    slots +=
      '<span class=" ' +
      slotMachine.slots[index] +
      '">' +
      slotMachine.slots[index] +
      "</span>";
  }
  document.querySelector("#result").innerHTML = slots;
}

function showGameResult() {
  // TODO: show a win or lose message in HTML
}

init();
