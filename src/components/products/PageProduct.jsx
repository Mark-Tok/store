import React from "react";
import data from '../../data.js';
import { connect } from 'react-redux';
import { addToCart } from './../../store/cart/actions'

class PageProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            object: Number(this.props.match.params.id)
        }
    }
    addToCart = (item) => {
        this.props.addToCart(item)
    }
    product = (product) => {
       const currentProduct = product.map((item) => {
            if (item.id === this.state.object) {
                return <div className="container product" key={item.id}>
                    <div className="row product__column-one">
                        <div className="col-xs-12 col-sm-6 col-md-3 product__images">
                            <img alt={item.title} src={require("../../images" + item.img)} />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-9 product__buy">
                            <div className="product__buy-title">{item.title}</div>
                            <div className="product__buy-price">{item.price} <i className="fa fa-rub" aria-hidden="true"></i></div>
                            <div><button onClick={() => { this.addToCart(item) }}>В корзину</button></div>
                        </div>
                    </div>
                    <div className="product__column-two">
                        <div>{item.description}</div>
                    </div>
                </div>
            }
        })
        return currentProduct;
    }
    render() {
        const property = Object.getOwnPropertyNames(data);
        return property.map((item) => {
            switch (item) {
                case 'phone':
                    return this.product(data.phone);
                case 'tv':
                    return this.product(data.tv);
                case 'audio':
                    return this.product(data.audio);
                case 'laptop':
                    return this.product(data.laptop)
                default: return null
            }
        })
    }
}

const mapActionToProps = {
    addToCart,
}

export default connect(null, mapActionToProps)(PageProduct);