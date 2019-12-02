import React from "react";
import { connect } from 'react-redux';
import { deleteFromCart } from './../store/cart/actions'

function Cart(props) {

    const deleteItem = (index, array) => {
        props.deleteFromCart(index, array)
    }

    return (
        <div className="cart__inner">
            {
                props.cart.length !== 0 ? props.cart.map((item, index, array) => {
                    return <div className="cart__item" key={index}>
                        <div className="cart__item-images"><img alt={item.title} src={require("../images" + item.img)} /></div>
                        <div>{item.title}</div>
                        <div>{item.price} <i className="fa fa-rub" aria-hidden="true"></i></div>
                        <div><button onClick={() => { deleteItem(index, array) }}><i className="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                }) : null
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state
    }
}

const mapActionToProps = {
    deleteFromCart,
}

export default connect(mapStateToProps, mapActionToProps)(Cart);