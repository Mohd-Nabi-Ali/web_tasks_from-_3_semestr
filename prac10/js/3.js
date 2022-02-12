
const search = document.querySelector("#search");
const searchBtn = document.querySelector("#button1");
const crest = document.querySelector("#crest");

// показ/скрытие поля для поиска
searchBtn.addEventListener("click", event => {
  event.target.parentElement.classList.toggle("active");//чтобы отобрахить или скрыть 
});


crest.addEventListener("click", event => {
  event.target.previousElementSibling.value = "";//строка равна пустоте при нажатии на крест
});


