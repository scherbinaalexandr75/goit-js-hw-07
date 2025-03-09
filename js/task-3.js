// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input)
// підставляє його поточне значення в span#name - output як ім’я для привітання.
// Обов’язково очищай значення в інпуті по краях від пробілів.
// Якщо інпут порожній або містить лише пробіли, то замість імені у
// спан має підставлятися рядок "Anonymous".

const nameOutput = document.querySelector("#name-output");
const inputField = document.querySelector("#name-input");
const tagP = document.querySelector("p");
const tagH1 = document.querySelector("h1");
const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");
tagP.after(container);
container.append(inputField);
 container.append(tagH1);


container.style.width = "404px";
container.style.height = "136px";
container.style.backgroundColor = "#ffffff";
container.style.borderRadius = "8px";
container.style.padding = "24px";

inputField.style.width = "360px";
inputField.style.height = "40px";
inputField.style.fontWeight = "400px";
inputField.style.letterSpacing = "0.04em";
inputField.style.lineHeight = "1.5px";
inputField.style.fontSize = "16px";
inputField.style.paddingLeft = "16px";
inputField.style.paddingTop = "8px";
inputField.style.paddingBottom = "8px";
inputField.style.color = "#2e2f42";

tagH1.style.fontWeight = "600px";
tagH1.style.lineHeight = "32px";
tagH1.style.letterSpacing = "0.04em";
tagH1.style.fontSize = "24px";
tagH1.style.color = "#2e2f42";

// console.log(document.body);

inputField.addEventListener("input", (event) => {
  if (event.target.value.trim() !== "") {
    nameOutput.textContent = event.target.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});

