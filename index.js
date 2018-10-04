const { map, filter, get, reduce } = require('lodash');

 // getProducts -- lodash version
 const getProducts = state => map(state.products, ({id, name, price}) => ({id, name, price}));

// getProductsInStock --- lodash version
const getProductsInStock = state => map(filter(state.products, 'inStock'), ({id, name, price, inStock}) => {
    return {
        id, name, price,
    }
});

// getProduct  ---lodash version
const getProduct =  (state, id) => get(state.products, id) ? state.products[id] : null;

// getBasket --- lodash version
const getBasket = ({ basket, products }) =>
    map(basket, (quantity, key) => ({
        id: products[key].id,
        name: products[key].name,
        quantity,
        subtotal: products[key].price * quantity
    }));

// getBasketTotal --- lodash version
// const getBasketTotal = state => map(getBasket(state))

const getBasketTotal = state => {
    return reduce(getBasket(state), (sum, product) => product.subtotal + sum , 0)
}

module.exports = {
    getProducts,
    getProductsInStock,
    getProduct,
    getBasket,
    getBasketTotal,
}
