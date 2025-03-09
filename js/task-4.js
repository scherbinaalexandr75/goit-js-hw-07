// Напиши скрипт управління формою логіна.

// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням
// про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут
//  required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення
// полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а
// значення — відповідні значення цих інпутів, очищені від пробілів по краях.
// Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти
// значення полів форми методом reset.

const formLogin = document.querySelector(".login-form");
const tagsP = document.querySelector("p");
const inputs = document.querySelectorAll("input");
const btn = document.querySelector("button");
const labels = document.querySelectorAll("label");



labels[0].style.fontWeight = "400px";
labels[0].style.fontSize = "16px";
labels[0].style.lineHeight = "24px";
labels[0].style.letterSpacing = "0.04em";
labels[0].style.color = "#2e2f42";
labels[1].style.fontWeight = "400px";
labels[1].style.fontSize = "16px";
labels[1].style.lineHeight = "24px";
labels[1].style.letterSpacing = "0.04em";
labels[1].style.color = "#2e2f42";

inputs[0].style.width = "360px";
inputs[0].style.height = "40px";
inputs[1].style.width = "360px";
inputs[1].style.height = "40px";
inputs[0].style.borderRadius = "4px";
inputs[1].style.borderRadius = "4px";
inputs[0].style.marginTop = "8px";
inputs[0].style.marginBottom = "8px";
inputs[1].style.marginTop = "8px";

btn.style.width = "86px";
btn.style.height = "40px";
btn.style.borderRadius = "8px";
btn.style.fontWeight = "500px";
btn.style.fontSize = "16px";
btn.style.lineHeight = "1.5px";
btn.style.letterSpacing = "0.04em";
btn.style.backgroundColor = "#4e75ff";
btn.style.color = "#fff";
btn.style.marginTop = "16px";

const container = document.createElement("div");
container.classList.add("container");
tagsP.after(container);
container.append(formLogin);

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alingItems = "flexStart";
container.style.justifyContent = "flexStart";
container.style.backgroundColor = "#fff";
container.style.padding = "24px";
container.style.width = "408px";
container.style.height = "256px";
container.style.borderRadius = "8px";



formLogin.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;

  const dataForm = {
    email: elements.email.value,
    password: elements.password.value,
  };

  dataForm.email = dataForm.email.trim();
  dataForm.password = dataForm.password.trim();

  if (!dataForm.email || !dataForm.password) {
    alert("All form fields must be filled in");
  }
  event.target.reset();
  console.log(dataForm);
}
