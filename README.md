# goit-js-hw-07

Підсумкова пам'ятка
Згадаємо та підсумуємо основні методи і властивості DOM-елементів, з якими ми будемо працювати далі:

Пошук DOM-елементів

element.querySelector(selector) - повертає перший елемент, який відповідає вказаному CSS селектору всередині елемента element.
element.querySelectorAll(selector) - повертає всі елементи, які відповідають вказаному CSS селектору всередині елемента element.

Властивості DOM-елемента

element.textContent - містить текстовий вміст елемента element, ігноруючи всі теги HTML всередині.
element.innerHTML - містить HTML-вміст елемента element.
element.style - об'єкт, що містить вбудовані стилі елемента element, які можна змінювати динамічно з JavaScript.

CSS класи на DOM-елементах

element.classList.contains(className) - перевіряє, чи міститься вказаний клас className на елементі element.
element.classList.add(className) - додає клас className до списку класів елемента element.
element.classList.remove(className) - видаляє клас className зі списку класів елемента element.
element.classList.toggle(className) - додає клас className, якщо його немає, або видаляє, якщо він вже присутній, на елементі element.
element.classList.replace(oldClassName, newClassName) - замінює клас oldClassName на newClassName в списку класів елемента element.

Створення та видалення DOM-елементів

document.createElement(tagName) - створює новий HTML-елемент з вказаним ім'ям тегу tagName.
element.append(el) - додає вміст (або елемент) до кінця списку дочірніх елементів element.
element.prepend(el) - додає вміст (або елемент) до початку списку дочірніх елементів element.
element.remove() - видаляє DOM-елемент з DOM дерева.
insertAdjacentHTML(position, string) - додає вказаний рядок HTML після, перед, всередині або перед вказаним елементом.

Події

element.addEventListener(event, handler) - додає обробник події handler для події event на елемент element.
element.removeEventListener(event, handler) - видаляє обробник події handler для події event на елементі element.
keydown - подія, яка виникає, коли клавіша на клавіатурі натиснута.
submit - подія, яка виникає при відправці форми.
change - подія, яка виникає при зміні значення елемента форми.
input - подія, яка виникає при введенні даних в текстове поле.
focus - подія, яка виникає, коли елемент отримує фокус.
blur - подія, яка виникає, коли елемент втрачає фокус.
