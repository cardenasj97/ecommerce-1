import React from 'react';
import { connect } from 'react-redux';
import './CatalogueComponent.css';
import { Card, Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { addToCart } from '../../actions/cartActions';

const Catalogue = (props) => {
    const handleClick = (id) => {
        props.addToCart(id);
    };

    return (
        <React.Fragment>
            <div className="layout">
                <div className="content">
                    <h2>Products</h2>
                    {props.products.map((product, index) => (
                        <Card key={index} className="product">
                            <div>
                                <img src={product.image[0].image} alt={product.name} className="product__image" />
                            </div>
                            <div className="product__details">
                                <Button variant="contained" className="product__button button--styling__1" onClick={() => {handleClick(product.id)}}>
                                    <AddShoppingCartIcon/>
                                    Add
                                </Button>
                                <div className="product__price product__price--color">
                                    ${product.price}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        addedProducts: state.addedProducts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {dispatch(addToCart(id))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);