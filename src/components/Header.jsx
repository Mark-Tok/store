import React from "react";
import {
    Link,
} from "react-router-dom";
import Cart from './Cart'
import { connect } from 'react-redux';

function Header(props) {

    const total = () => {
        return props.cart.reduce((sum, current) => {
            return sum + current.price;
        }, 0);
    }

    return (
        <div className='col-md-10 header'>
            <div className="header__info">
                <div className="header__logo">
                    <Link to="/"> <img src={require('../images/logo.png')} alt="logo" /> </Link>
                </div>
                <div className="header__contacts">
                    <div className="header__phone">
                        <i className="fa fa-phone" aria-hidden="true"></i> 8 (900)-00-00-00
                        </div>
                    <div className="header__email">
                        <i className="fa fa-envelope" aria-hidden="true"></i>  store@mail.ru
                        </div>
                </div>
            </div>
            <ul>
                <li>
                    <Link to="/phone">Смартфоны</Link>
                </li>
                <li>
                    <Link to="/laptop">Ноутбуки</Link>
                </li>
                <li>
                    <Link to="/tv">Телевизоры</Link>
                </li>
                <li>
                    <Link to="/audio">Аудио</Link>
                </li>
                <li>
                <div className="cart">
                    <div className="cart__wrapper">
                        <div className="cart__title">
                            Корзина <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                        <Cart />
                        <div className="cart__total">
                            Сумма: {total()} <i className="fa fa-rub" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                </li>
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state,
    }
}

export default connect(mapStateToProps)(Header);
