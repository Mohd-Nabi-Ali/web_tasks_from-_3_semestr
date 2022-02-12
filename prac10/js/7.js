const stars = document.querySelectorAll(".star");
const reviewContent = document.querySelector(".content");
const thanks = document.querySelector(".thanks");


const highlight = event => {//функция для сияния звезд и их угасания
  const star = event.target;
  const highIndex = parseInt(star.getAttribute("data-index"));//возвращает значение атрибута data-index, нужен с parseInt чтобы возвращать исходную картинку при наведении повторно

  for (let i = 0; i <= highIndex; ++i)
    stars[i].setAttribute("src", "./imgs/star_glowing.png");//присваивает звездам новый атрибут src для показа картинки новой

  for (let i = highIndex + 1; i < stars.length; ++i)//+1, чтобы последний элемент тоже показывало
    stars[i].setAttribute("src", "./imgs/star.png");
}


stars.forEach(star => {//для отображение блока при нажатии на звезду
  star.addEventListener("click", event => {
    highlight(event);
    reviewContent.style.display = "block";
  });

  star.addEventListener("mouseenter", highlight);
});

document.querySelector("#message").addEventListener("click", () => {//для кнопки отправить
  reviewContent.style.display = "none";
  thanks.style.display = "block";
});

document.querySelector("#change").addEventListener("click", () => {//для кнопки зименить
  reviewContent.style.display = "block";
  thanks.style.display = "none";
});
