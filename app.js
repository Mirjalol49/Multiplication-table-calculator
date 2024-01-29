const form = document.querySelector("#form");
const inputNum = document.querySelector("#inputNum");
const btn = document.querySelector("#btn");
const res = document.querySelector("#result");
const sub = document.querySelector("#sub");
const non = document.querySelector(".none");

btn.addEventListener("click", calculate);

function calculate(e) {
  e.preventDefault();

  if (inputNum.value.trim() !== "") {
    non.classList.remove("none");
    let num = parseInt(inputNum.value);

    res.innerHTML = "";

    let multiplier = 1;

    while (multiplier <= 10) {
      let result = num * multiplier;
      console.log(`${num} x ${multiplier} = ${result}`);

      let p = document.createElement("p");
      p.textContent = `${num} x ${multiplier} = ${result}`;
      sub.textContent = `${num} karra jadvali`;

      res.appendChild(p);

      multiplier++;
    }

    inputNum.value = "";
  } else {
    let mes = window.alert("Iltimos Raqam kiriting😒");
  }
}
