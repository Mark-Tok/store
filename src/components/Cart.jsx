import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { deleteFromCart } from './../store/cart/actions'

function Cart(props) {

    const [count, toggleCart] = useState(false);

    useEffect(() => {
        //close cart click out
        document.addEventListener("click", (event) => {
            if (!event.target.closest('.cart') && count === true
                && !event.target.classList.contains('cart__inner') &&
                !event.target.closest('.cart__item')
            ) {
                toggleCart(!count)
            }
        });
    })


    const deleteItem = (index, array) => {
        props.deleteFromCart(index, array)
    }

    const total = () => {
        return props.cart.reduce((sum, current) => {
            return sum + current.price;
        }, 0);
    }

    const totalProduct = () => {
        return props.cart.map((item, index, array) => {
            return array.length;
        }).length;
    }

    return (
        <div className="cart">
            <div className="cart__wrapper">
                <div onClick={(event) => toggleCart(!count)} className="cart__title">
                    Корзина <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span className="total_mark">
                        {totalProduct()}
                    </span>
                    <span className="total">{total()} <i className="fa fa-rub" aria-hidden="true"></i></span>
                </div>
                {count && <div className="cart__inner">
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
                }
            </div>
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