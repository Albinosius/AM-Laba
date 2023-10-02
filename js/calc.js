// переменная, в которой хранится выбранное математическое действие
var op;

// функция расчёта
document.querySelector('#calc').addEventListener('click', function() {
  // переменная для результата
  var result;
  // получаем первое и второе число
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);

  // смотрим, что было в переменной с действием, и действуем исходя из этого
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  // отправляем результат на страницу
  document.getElementById("result").innerHTML = result;
});

// фнкция очистки
document.querySelector('#clear').addEventListener('click', function() {
  // очищаем введенные данные
  var num1 = document.getElementById("num1");
  num1.value = '';
  var num2 = document.getElementById("num2");
  num2.value = '';

  // очищаем результат
  document.getElementById("result").innerHTML = '';
});

document.querySelectorAll('.btn--operator').addEventListener('click', function(e) {
  e.preentDeafolt
});