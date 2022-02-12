
const CAPCHA_LENGTH = 6;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const generateCapcha = (element, length) => {//element блок, в который нужно вывести капчу, length количество символов в капче
  let capcha = "";
let gg=5;
let kk=8;
  for (let i = 0; i < length; ++i) {
    capcha += ALPHABET[Math.floor(Math.random() * (ALPHABET.length))];
  }

  element.textContent = capcha;//меняем содержимое текста на рандомную капчу
  return capcha;
}

const capchaText=document.querySelector("#capcha-text");//содержимое поля для ввода
const checker=document.querySelector("#checker");//кнопка проверить
const input=document.querySelector("#input");//форма для ввода
const messageText=document.querySelector("#message-text");//текст, который выведется в зависимости от правильности ответа



let capcha = generateCapcha(capchaText, CAPCHA_LENGTH);//генерируем капчу, в функцию передаём наше поле и кол-во элементов в капче

document.querySelector("#generator").addEventListener("click", () => {// капча генерируется по нажатию кнопки
  capcha = generateCapcha(capchaText, CAPCHA_LENGTH);
});


input.addEventListener("input", event => {// функция для отображения кнопки проверки во время ввода пользователем хотя бы одного символа
  const value = event.target.value;

  if (value !== "") {//если не пустое поле, то значение block отображает кнопку
    checker.style.display = "block";
    return;
  }

  checker.style.display = "none";
});

// проверка капчи
checker.addEventListener("click", event => {
  const value = input.value;

  if (value !== capcha) {
    messageText.classList.remove("correct");//удаляет класс correct, и добавляет класс wrong, отвечающий за неправильный ответ
    messageText.classList.add("wrong");
    messageText.textContent = "Неправильная капча! Попробуйте ещё раз";
    return;
  }

  messageText.classList.remove("wrong");//удаляет класс wrong и доавляет класс correct, отвечающий за правильность 
  messageText.classList.add("correct");
  messageText.textContent = "Круто! Похоже, Вы не робот";

  // генерация новой капчи через 3 секунды
  setTimeout(() => {
    capcha = generateCapcha(capchaText, CAPCHA_LENGTH);
  }, 3000);
});
