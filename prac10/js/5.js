const plus = (element, max) => {//функция для увеличение числа пока, не достигнет нужного
  let number = 0;

  let clock = setInterval(() => {
    if (number > max) {
      clearInterval(clock);//отменяет многократное действие функций
      return;
    }

    element.textContent = number++;
  }, 1);
}
const chislo = document.querySelectorAll(".number1");
plus(chislo[0], 100000);
plus(chislo[1], 10000);
plus(chislo[2], 1000);
plus(chislo[3], 100);
