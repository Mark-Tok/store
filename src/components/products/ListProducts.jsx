import React from "react";
import data from '../../data.json'
import {
    useParams,
    Link,
} from "react-router-dom";
import { connect } from 'react-redux';
import { addToCart } from './../../store/cart/actions'


function ListProducts(props) {
	
    let { id } = useParams();
	
    let addToCart = (item) => {
        props.addToCart(item)
    }
	
    if (id === 'phone') {
        return (
            <div className="container">
                <div className="row list">
                    {
                        data.products[0].phone.map((item) => {
                            return <div key={item.id} className="col-md-4 col-sm-6 list__wrapper"> <div className="list__item">
                                <div className="item__images"><img alt={item.title} src={require("../../images" + item.img)} /></div>
                                <div className="item__title"><Link to={'/phone/' + item.id}>{item.title}</Link></div>
                                <div className="item__price">{item.price} <i className="fa fa-rub" aria-hidden="true"></i></div>
                                <div className="item__button"><button onClick={() => { addToCart(item) }}>Добавить</button></div>
                            </div>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
    else if (id === 'tv') {
        return (
            <div className="container">
                <div className="row list">
                    {
                        data.products[1].tv.map((item) => {
                            return <div key={item.id} className="col-md-4 col-sm-6 list__wrapper">  <div className="list__item">
                                <div className="item__images"><img alt={item.title} src={require("../../images" + item.img)} /></div>
                                <div className="item__title"><Link to={'/tv/' + item.id}>{item.title}</Link></div>
                                <div className="item__price">{item.price} <i className="fa fa-rub" aria-hidden="true"></i></div>
                                <div className="item__button"><button onClick={() => { addToCart(item) }}>Добавить</button></div>
                            </div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
    else if (id === 'laptop') {
        return (
            <div className="container">
                <div className="row list">
                    {
                        data.products[2].laptop.map((item) => {
                            return <div className="col-md-4 col-sm-6 list__wrapper" key={item.id}>  <div className="list__item">
                                <div className="item__images"><img alt={item.title} src={require("../../images" + item.img)} /></div>
                                <div className="item__title"><Link to={'/laptop/' + item.id}>{item.title}</Link></div>
                                <div className="item__price">{item.price} <i className="fa fa-rub" aria-hidden="true"></i></div>
                                <div className="item__button"><button onClick={() => { addToCart(item) }}>Добавить</button></div>
                            </div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
    else if (id === 'audio') {
        return (
            <div className="container">
                <div className="row list">
                    {
                        data.products[3].audio.map((item) => {
                            return <div key={item.id} className="col-md-4 col-sm-6 list__wrapper">  <div className="list__item">
                                <div className="item__images"><img alt={item.title} src={require("../../images" + item.img)} /></div>
                                <div className="item__title"><Link to={'/audio/' + item.id}>{item.title}</Link></div>
                                <div className="item__price">{item.price} <i className="fa fa-rub" aria-hidden="true"></i></div>
                                <div className="item__button"><button onClick={() => { addToCart(item) }}>Добавить</button></div>
                            </div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <div className="row list">
                    {
                        data.products[4].showcase.map((item) => {
                            return <div className="col-md-4 col-sm-6 list__wrapper" key={item.id}>  <div className="list__item item">
                                <div className="item__images"><img alt={item.title} src={require("../../images" + item.img)} /></div>
                                <div className="item__title"><Link to={'/showcase/' + item.id}>{item.title}</Link></div>
                                <div className="item__price">{item.price} <i className="fa fa-rub" aria-hidden="true"></i></div>
                                <div className="item__button"><button onClick={() => { addToCart(item) }}>Добавить</button></div>
                            </div>
                            </div>
                        })
                    }
                </div>
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

export default connect(mapStateToProps, mapActionToProps)(ListProducts);