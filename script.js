const reset = document
  .getElementById("reset")
  .addEventListener("click", (event) => {
    location.reload(event);
  });

const button1 = document
  .getElementById("five-percent")
  .addEventListener("click", (e) => {
    e.preventDefault();
    tipCalculator(5);
  });

const button2 = document
  .getElementById("ten-percent")
  .addEventListener("click", (e) => {
    e.preventDefault();
    tipCalculator(10);
  });

const button3 = document
  .getElementById("fifteen-percent")
  .addEventListener("click", (e) => {
    e.preventDefault();
    tipCalculator(15);
  });

const button4 = document
  .getElementById("twentyfive-percent")
  .addEventListener("click", (e) => {
    e.preventDefault();
    tipCalculator(25);
  });

const button5 = document
  .getElementById("fifty-percent")
  .addEventListener("click", (e) => {
    e.preventDefault();
    tipCalculator(50);
  });

function tipCalculator(percent) {
  const bill = parseFloat(document.getElementById("bill").value);
  const numberOfPeople = parseFloat(document.getElementById("people").value);
  let custom = document.getElementById("custom").value;

  custom
    ? (document.getElementById("amount").textContent = (
        ((custom / 100) * bill) /
        numberOfPeople
      ).toFixed(2))
    : (document.getElementById("amount").textContent = (
        ((percent / 100) * bill) /
        numberOfPeople
      ).toFixed(2));
}
