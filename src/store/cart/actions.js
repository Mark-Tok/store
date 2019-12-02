export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const addToCart = (item) => {
    if (localStorage.getItem('cart') !== null) {
        let cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
        cartLocalStorage.push(item)
        console.log(cartLocalStorage)
        localStorage.setItem('cart', JSON.stringify(cartLocalStorage))
    } else {
        localStorage.setItem('cart', JSON.stringify([].concat(item)))
    }
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const deleteFromCart = (index, array) => {
    let state = () => {
        if (localStorage.getItem('cart') !== null) {
            let cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
            cartLocalStorage.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(cartLocalStorage));
            return cartLocalStorage;
        } else {
            array.splice(index, 1);
            return array;
        }
    }
    return {
        type: DELETE_FROM_CART,
        payload: state()
    }
}