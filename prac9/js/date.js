const DATE = document.querySelector("#clock");/*нахождение элемента с id date*/
const showTime = () => {/*наша функция времени для часов*/
  const currentDate = new Date();/*наш объект, дата текущая, от неё получаем день, месяц, год*/
  const currentDay = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;/*получение дня, месяца и и года в строке при помощи '' и $ , который возвращает результаты этих функций*/
  const currentTime = currentDate.toLocaleTimeString();/*функция для часов*/
  DATE.textContent = `${currentTime} ${currentDay}`;/*добавляем их в объект*/
}
setInterval(showTime, 1000);/*чтобы каждую секунду вызывалась нашща функция*/
showTime();/*вызов функции*/