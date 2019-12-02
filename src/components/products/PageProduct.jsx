import React from "react";
import data from '../../data.json';
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
    render() {
        return (
            <div>
                {
                    data.products.map((item) => {
                        const currentProduct = () => {
                            if (item.phone) {
                                return item.phone.map((item) => {
                                    if (item.id === this.state.object) {
                                        return <div className="container product" key={item.id}>
                                            <div className="row product__column-one">
                                                <div className="col-xs-12 col-sm-6 col-md-3 product__images">
                                                    <img alt={item.title} src={require("../../images" + item.img)} />
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-9 product__buy">
                                                    <div className="product__buy-title">{item.title}</div>
                                                    <div className="product__buy-price">{item.price} <i class="fa fa-rub" aria-hidden="true"></i></div>
                                                    <div><button onClick={() => { this.addToCart(item) }}>В корзину</button></div>
                                                </div>
                                            </div>
                                            <div className="product__column-two">
                                                <div>{item.description}</div>
                                            </div>
                                        </div>
                                    }
                                    return null;
                                })
                            }
                            else if (item.tv) {
                                return item.tv.map((item) => {
                                    if (item.id === this.state.object) {
                                        return <div className="container product" key={item.id}>
                                            <div className="product__column-one">
                                                <div className="product__images">
                                                    <img alt={item.title} src={require("../../images" + item.img)} />
                                                </div>
                                                <div className="product__buy">
                                                    <div className="product__buy-title">{item.title}</div>
                                                    <div className="product__buy-price">{item.price} <i class="fa fa-rub" aria-hidden="true"></i></div>
                                                    <div><button onClick={() => { this.addToCart(item) }}>В корзину</button></div>
                                                </div>
                                            </div>
                                            <div className="product__column-two">
                                                <div>{item.description}</div>
                                            </div>
                                        </div>
                                    }
                                    return null;
                                })
                            }
                            else if (item.laptop) {
                                return item.laptop.map((item) => {
                                    if (item.id === this.state.object) {
                                        return <div className="container product" key={item.id}>
                                            <div className="product__column-one">
                                                <div className="product__images">
                                                    <img alt={item.title} src={require("../../images" + item.img)} />
                                                </div>
                                                <div className="product__buy">
                                                    <div className="product__buy-title">{item.title}</div>
                                                    <div className="product__buy-price">{item.price} <i class="fa fa-rub" aria-hidden="true"></i></div>
                                                    <div><button onClick={() => { this.addToCart(item) }}>В корзину</button></div>
                                                </div>
                                            </div>
                                            <div className="product__column-two">
                                                <div>{item.description}</div>
                                            </div>
                                        </div>
                                    }
                                    return null;
                                })
                            }
                            else if (item.audio) {
                                return item.audio.map((item) => {
                                    if (item.id === this.state.object) {
                                        return <div className="container product" key={item.id}>
                                            <div className="product__column-one">
                                                <div className="product__images">
                                                    <img alt={item.title} src={require("../../images" + item.img)} />
                                                </div>
                                                <div className="product__buy">
                                                    <div className="product__buy-title">{item.title}</div>
                                                    <div className="product__buy-price">{item.price} <i class="fa fa-rub" aria-hidden="true"></i></div>
                                                    <div><button onClick={() => { this.addToCart(item) }}>В корзину</button></div>
                                                </div>
                                            </div>
                                            <div className="product__column-two">
                                                <div>{item.description}</div>
                                            </div>
                                        </div>
                                    }
                                    return null;
                                })
                            }
                        }
                        return currentProduct()
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state,
    }
}

const mapActionToProps = {
    addToCart,
}

export default connect(mapStateToProps, mapActionToProps)(PageProduct);