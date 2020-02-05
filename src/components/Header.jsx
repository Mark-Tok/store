import React, { useEffect, useState } from "react";
import {
    Link,
} from "react-router-dom";
import Cart from './Cart'
import { connect } from 'react-redux';

function Header() {

    const [fixState, toggleFix] = useState('');

    useEffect(
        window.onscroll = () => {
            if (window.pageYOffset >= 184 && document.documentElement.clientWidth >= 770) {
                toggleFix('fixState')
            }
            else {
                toggleFix('')
            }
        })

    return (
        <div className='col-md-12 header'>
            <div className='header__info'>
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
            <ul className={`${fixState}`}>
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
                    <Cart />
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