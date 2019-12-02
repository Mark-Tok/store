import {
    ADD_TO_CART,
    DELETE_FROM_CART
} from './actions'



const defaultState = () => {
    if(localStorage.getItem('cart') !== null) {
        let cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
        let state = cartLocalStorage;
            return state 
    }
    else {
         let state = [];
         return state
    }
}


export default (state = defaultState(), action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.payload
            ];
        case DELETE_FROM_CART:
            return [...action.payload];
        default:
            return state;
    }
}