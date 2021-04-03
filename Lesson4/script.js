'use strict';
//Задание 1
function obj_from_number() {
  var number = prompt('Введите число от 0 до 999');
  if (number < 0 || number > 999) {
    console.log('Веденное вами число либо меньше ноля либо больше 999');
    return ({})
  }
  else {

    var units = Math.floor(number % 10);
    Math.floor(number = number / 10);
    var ten = Math.floor(number % 10);
    Math.floor(number = number / 10);
    var hundreds = Math.floor(number % 10);
    console.log({ hundreds: hundreds, ten: ten, units: units })

    return { hundreds: hundreds, ten: ten, units: units }

  }
}
var a = obj_from_number();

// Задание 2

const basket = {
  goods: [
    {
      id_product: 964,
      product_name: 'кресло',
      quantity: 2,
      price: 4000
    },
    {
      id_product: 748,
      product_name: 'стол',
      quantity: 1,
      price: 10000
    },
    {
      id_product: 98,
      product_name: 'тумба',
      quantity: 2,
      price: 6000
    },
    {
      id_product: 74,
      product_name: 'шкаф',
      quantity: 1,
      price: 15000
    }],
  countBasketPrice() {
    return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);
  },

  findGoodById(id) {
    return this.goods.find((cartItem) => cartItem.id_product === id);
  },
};

console.log(basket.countBasketPrice());
console.log(basket.findGoodById(98));
