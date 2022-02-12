const until_ng = "January 01 2022 00:00:00 GMT+0300 (Moscow Standard Time)";//дата нового года

const getRemainingTime = end => {//функция для нахождения остатка времени, счётчик

  const deltaMillis = Date.parse(end) - new Date();

  if (deltaMillis <= 0)
    return null;

    const seconds = Math.floor((deltaMillis / 1000) % 60);
    const minutes = Math.floor((deltaMillis / 1000 / 60) % 60);
    const hours = Math.floor(deltaMillis / (1000 * 60 * 60) % 24);
    const days = Math.floor(deltaMillis / (1000 * 60 * 60 * 24));

  return ({
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });
}


let timerID;
const timeParts = document.querySelectorAll(".js-time-number");



const displayTime = to_ng => {//to_ng-время оставштеся до нг
  let index = 0;

  for (const key in to_ng)//от часов до минут
    timeParts[index++].textContent = to_ng[key];//отображение времени до нг через замену текста? index++ нужен для показа всех частей времени

  timerID = setTimeout(
    () => displayTime(getRemainingTime(until_ng)),
    1000
  );
}

timerID = displayTime(getRemainingTime(until_ng));
