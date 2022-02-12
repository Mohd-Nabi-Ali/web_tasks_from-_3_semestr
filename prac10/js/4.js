const card = document.querySelector(".js-card");
const cardImage = document.querySelector("#pict");
const cardMedia = document.querySelector(".js-card-media");

// растягивание изображения по нажатии
cardImage.addEventListener("click", event => {
  cardImage.classList.toggle("active");//при клике будет картинка на весь блок

  if (cardImage.className.includes("active")) {//для удаления иконок при растяжке изображений
    cardMedia.style.opacity = "0";
    return;
  }

  cardMedia.style.opacity = "1";
});


// показ блока с соц. сетями при наведении на карточку
card.addEventListener("mouseenter", () => {
  cardMedia.style.opacity = "1";
});



card.addEventListener("mouseleave", () => {// картинка возвращается в исходную форму без иконок соц сетей
  cardImage.classList.remove("active");
  cardMedia.style.opacity = "0";
});
