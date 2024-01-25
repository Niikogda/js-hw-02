const countryInput = prompt("Введіть країну доставки:").toLowerCase();
let deliveryCost;

switch (countryInput) {
  case 'китай':
    deliveryCost = 100;
    break;
  case 'чилі':
    deliveryCost = 250;
    break;
  case 'австралія':
    deliveryCost = 170;
    break;
  case 'індія':
    deliveryCost = 80;
    break;
  case 'ямайка':
    deliveryCost = 120;
    break;
  default:
    alert("В вашій країні доставка не доступна");
}

if (deliveryCost !== undefined) {
  alert(`Доставка в ${countryInput} буде коштувати ${deliveryCost} кредитів.`);
}
