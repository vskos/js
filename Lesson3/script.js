'use strict';

// Задание 1
// Я не смог выполнить певое задание, хатя и потратил кучу времени на это.

// var n = 20;
// var simple = [];
// var i = 2;
// var j = 2;
// //while (i <= n) {

// while (j <= 10) {
//     if (i % j == 0) {
//         alert(j);
//         if (i != j) {
//             alert(true);
//             simple.push(i);
//         }
//         alert(simple);




// Задание 2

function countElements(good, count, price) {
    return ('стоимость товара ' + good + ' равна ' + count * price)
}

alert(countElements('стул', 2, 3000));

// Задание 3

var basket_arr = [['кресло', 2, 4000], ['стол', 1, 10000], ['тумба', 2, 6000], ['шкаф', 1, 15000]];

function countBasketPrice(basket_arr) {
    var count = 0;
    var sum_line = 0;
    for (var i = 0; i < basket_arr.length; i += 1) {
        sum_line = (basket_arr[i][1] * basket_arr[i][2]);
        count += sum_line
    }
    return ('Cтоимость товаров в корзине: ' + count);
}
alert(countBasketPrice(basket_arr));

//Задание 4
// Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

//Задание 5

var i = 1;
while (i < 21) {
    console.log('x'.repeat(i));
    i++;
}
