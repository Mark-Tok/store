import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Store from './components/Store';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/cart/reducers'

const store = createStore(reducer)

ReactDOM.render(
<Provider store={store}>
    <Store/>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
