
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

