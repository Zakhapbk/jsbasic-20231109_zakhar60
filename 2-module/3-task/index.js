let calculator = {
  a: 0,
  b: 0
};
calculator.read = function (a,b){
  this.a = a;
  this.b = b
}
calculator.sum = function(){
  return this.a + this.b
}
calculator.mul = function(){
  return this.a * this.b
}
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
