import React from 'react';
import Categories from './Categories/CategoriesComponent';
import Catalogue from './Catalogue/CatalogueComponent';
import Cart from './Cart/CartComponent';
import { Route, Switch, Redirect } from 'react-router-dom';
// import ToolbarComponent from './Header/ToolbarComponent';
// import NavigationComponent from './Footer/NavigationComponent';

const Main = () => {
    return (
        <main className="main">
            {/* <ToolbarComponent /> */}
            <Switch>
                <Route path="/categories" component={Categories} />
                {/* <Route exact path="/catalogue" render={() => <Redirect to="/categories" /> } /> */}
                <Route path="/catalogue" component={Catalogue} />
                <Route path="/cart" component={Cart} />
                <Route exact path="/" render={() => <Redirect to="/categories" /> } />
            </Switch>
            {/* <NavigationComponent /> */}
        </main>
    );
};

export default Main;