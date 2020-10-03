import React, { useState } from 'react';
import { connect } from 'react-redux';
import './CartComponent.css';
import { Button, Card, CardContent, CardMedia } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { addQuantity, removeFromCart, subtractQuantity } from '../../actions/cartActions';
import { formatMoney } from '../../utils/priceFormatter';
import CheckoutComponent from '../Checkout/CheckoutComponent';
import ToolbarComponent from '../Header/ToolbarComponent';
import NavigationComponent from '../Footer/NavigationComponent';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Cart = (props) => {
    const [renderCheckout, setRenderCheckout] = useState(false);
    let addedProducts = props.addedProducts.length;

    const handleRemove = (id) => {
        props.removeFromCart(id);
    };

    const handleAddQuantity = (id) => {
        props.addQuantity(id);
    };

    const handleSubtractQuantity = (id) => {
        props.subtractQuantity(id);
    };

    const handleClickRenderCheckout = () => {
        setRenderCheckout(!renderCheckout);
    }

    const ShoppingCart = () => (
        <React.Fragment>
            <div>
                <ToolbarComponent />
                <div className="layout">
                    <div className="content cart-content--padding">
                        <h2>Cart</h2>
                        {props.addedProducts.map((product, index) => (
                            <Card key={index} className="cart-product">
                                <CardMedia image={product.image[0].image} title={product.name} className="cart-product__image" />
                                <div className="cart-product_details">
                                    <CardContent>
                                        <h3>{product.name}</h3>
                                        <div>SKU: {product.id}</div>
                                        <div>Size: M</div>
                                        <div>Quantity: {product.quantity}</div>
                                        <div>Unit: {product.price}</div>
                                        <div className="cart-product__buttons">
                                            {/* <Button title="Edit" className="cart-product__button cart-product__button--blue">
                                                <EditIcon />
                                            </Button> */}
                                            <div className="quantity">
                                                <input className="quantity__button" type="button" onClick={() => {handleSubtractQuantity(product.id)}} value="-" />
                                                <input className="quantity__number" max={product.stock} min="0" readOnly step="1" type="number" value={product.quantity} />
                                                <input className="quantity__button" type="button" onClick={() => {handleAddQuantity(product.id)}} value="+" />
                                            </div>
                                            <Button title="Delete" className="cart-product__button cart-product__button--red" onClick={() => {handleRemove(product.id)}}>
                                                <DeleteForeverIcon />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                        <div className="cart-subtotal">Subtotal: <span className="primary--color">${formatMoney(props.total)}</span></div>
                        <Button className="payment-button payment-button--text button--styling__1" onClick={handleClickRenderCheckout} variant="contained">
                            Proceed to checkout
                            <ArrowForwardIcon className="payment-button__arrow" />
                        </Button>
                    </div>
                </div>
                <NavigationComponent />
            </div>
            <CheckoutComponent checked={renderCheckout} onClickRenderCheckout={handleClickRenderCheckout} />
        </React.Fragment>
    );

    const EmptyCart = () => (
        <React.Fragment>
            <ToolbarComponent />
                <div className="layout">
                    <div className="content">
                        <h2>Cart</h2>
                        <p>Please, add a product to your cart.</p>
                    </div>
                </div>
            <NavigationComponent />
        </React.Fragment>
    );

    return (
        <React.Fragment>
            {addedProducts ? <ShoppingCart /> : <EmptyCart />}
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        addedProducts: state.addedProducts,
        products: state.products,
        total: state.total
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => {dispatch(removeFromCart(id))},
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);