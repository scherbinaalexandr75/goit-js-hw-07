// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль
// по кліку на button.change-color і задає це значення кольору текстовим
// вмістом для span.color.

// Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі,
//  в той час як колір фону на <body> буде у форматі rgb. Це нормально й не
// потребує якихось правок.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerChangeColor() {
  const getColor = getRandomHexColor();
  spanColor.innerHTML = getColor;
  document.body.style.backgroundColor = getColor;
}

const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const widget = document.querySelector(".widget");
const pTag = document.querySelector("p");

widget.style.display = "flex";
widget.style.alineItems = "center";
widget.style.justifyContent = "center";
widget.style.flexDirection = "column";
widget.style.gap = "10px";
widget.style.paddingLeft = "88px";
widget.style.width = "345px";
widget.style.height = "280px";
// widget.style.backgroundColor = "#fff";

pTag.style.fontWeight = "400px";
pTag.style.fontSize = "16px";
pTag.style.lineHeight = "24px";
pTag.style.letterSpacing = "0.04em";
pTag.style.color = "#2e2f42";
pTag.style.width = "169px";
pTag.style.height = "24px";
pTag.style.color = "#2e2f42";

btnChangeColor.style.width = "148px";
btnChangeColor.style.height = "40px";
btnChangeColor.style.border = "none";
btnChangeColor.style.borderRadius = "8px";
btnChangeColor.style.backgroundColor = "#4e75ff";
btnChangeColor.style.paddingTop = "8px";
btnChangeColor.style.paddingBottom = "8px";
btnChangeColor.style.paddingLeft = "16px";
btnChangeColor.style.paddingRight = "16px";
btnChangeColor.style.fontWeight = "500px";
btnChangeColor.style.color = "#fff";
btnChangeColor.style.fontSize = "16px";
btnChangeColor.style.lineHeight = "24px";
btnChangeColor.style.letterSpacing = "0.04em";

btnChangeColor.addEventListener("click", handlerChangeColor);
