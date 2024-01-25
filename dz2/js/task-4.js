const credit = 23580
const pricePerDroid = 3000
let amount = parseFloat(prompt("enter the amount: " ))
let totalPrice = pricePerDroid*amount
let remnant = credit-totalPrice
if(amount === null) {
    message = 'Операцію скасовано!';
}else if(totalPrice>credit){
    console.log('Недостатньо коштів на рахунку!');
}else if(totalPrice<=credit){
    console.log(`Ви купили ${amount} телевізорів, на рахунку залишилось ${remnant} кредитів`);
}
