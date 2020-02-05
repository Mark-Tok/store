import React from "react";
import data from '../../data.js'
import {
    useParams,
    Link,
} from "react-router-dom";
import { connect } from 'react-redux';
import { addToCart } from './../../store/cart/actions'

const { phone, tv, audio, showcase, laptop } = data;

const listProducts = (product, link, addToCart) => {
    return <div className="container">
        <div className="row list">
            {
                product.map((item) => {
                    return <div key={item.id} className="col-md-4 col-sm-6 list__wrapper"> <div className="list__item">
                        <div className="item__images"><img alt={item.title} src={require("../../images" + item.img)} /></div>
                        <div className="item__title"><Link to={link + item.id}>{item.title}</Link></div>
                        <div className="item__price">{item.price} <i className="fa fa-rub" aria-hidden="true"></i></div>
                        <div className="item__button"><button onClick={() => { addToCart(item) }}>Добавить</button></div>
                    </div>
                    </div>
                })
            }
        </div>
    </div>
}

function ListProducts(props) {

    const { id } = useParams();

    const addToCart = (item) => {
        props.addToCart(item)
    }

    switch (id) {
        case 'phone':
            return listProducts(phone, '/phone/', addToCart);
        case 'tv':
            return listProducts(tv, '/tv/', addToCart);
        case 'laptop':
            return listProducts(laptop, '/laptop/', addToCart);
        case 'audio':
            return listProducts(audio, '/audio/', addToCart);
        default:
            return listProducts(showcase, '/showcase/', addToCart);
    }
}

const mapActionToProps = {
    addToCart
}

export default connect(null, mapActionToProps)(ListProducts);