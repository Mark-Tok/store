import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ListProducts from './products/ListProducts'
import PageProduct from './products/PageProduct'
import Header from './Header'

function Store() {
    return (
        <div className='store'>
            <div className="container">
                <div className="row">
                    <Router>
                        <Header />
                        <div className="row store__cart-list-block">
                            <div className="col-md-12">
                                <Switch>
                                    <Route path={["/tv/:id", "/audio/:id", "/laptop/:id", "/phone/:id", "/showcase/:id"]} component={PageProduct} />
                                    <Route path={["/:id", "/"]} component={ListProducts} />     
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default Store;