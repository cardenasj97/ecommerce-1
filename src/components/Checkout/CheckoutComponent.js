import React, { useState } from 'react';
import { Button, Card, CardContent, CardMedia, FormControl, FormControlLabel, Radio, RadioGroup, Slide, Step, StepContent, StepLabel, TextField } from '@material-ui/core';
import ToolbarCheckoutComponent from '../Header/ToolbarCheckoutComponent';
import './CheckoutComponent.css';
import Stepper from '@material-ui/core/Stepper';
import { connect } from 'react-redux';
import { payOrder } from '../../actions/cartActions';
import { formatMoney } from '../../utils/priceFormatter';

const getSteps = () => {
    return ['Welcome!', 'Personal information', 'Shipping information', 'Checkout and order reception', 'Payment information'];
};

const CheckoutComponent = (props) => {
    const [activeStep, setActiveStep] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const steps = getSteps();
    const orderTotal = formatMoney(props.total);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChangePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
    };
    
    const handlePay = () => {
        props.payOrder();
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <React.Fragment>
                        <div className="step-one__text">Hello! Welcome to my digital store, please fill the following forms to finish the checkout. Thank you!</div>
                        <Button variant="contained" className="button--styling__1 checkout__button" onClick={handleNext}>Agree</Button>
                    </React.Fragment>
                );
            case 1:
                return (
                    <div>
                        <form>
                            <TextField id="name" defaultValue="Jennifer" fullWidth label="Name" className="checkout__text-input" />
                            <TextField id="lastname" defaultValue="Wright" fullWidth label="Lastname" className="checkout__text-input" />
                            <TextField id="email" defaultValue="jwright@gmail.com" fullWidth label="Email (Optional)" className="checkout__text-input" />
                            <TextField id="phone" defaultValue="555 123 4567" fullWidth label="Phone" className="checkout__text-input" />
                        </form>
                        <Button variant="contained" className="button--styling__1 checkout__button" onClick={handleNext}>Continue</Button>
                        <Button variant="outlined" className="button--styling__2 checkout__button" onClick={handleBack}>Back to previous step</Button>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <form>
                            <TextField id="shipping-address-line-1" defaultValue="9553 Lee Hwy" fullWidth label="Shipping address" className="checkout__text-input" />
                            <TextField id="shipping-address-line-2" defaultValue="Circles Towers Apt 1002" fullWidth className="checkout__text-input" />
                            <TextField id="zip-code" defaultValue="22031" fullWidth label="Zip Code" className="checkout__text-input" />
                            <TextField id="phone" defaultValue="555 123 4567" fullWidth label="Phone" className="checkout__text-input" />
                        </form>
                        <Button variant="contained" className="button--styling__1 checkout__button" onClick={handleNext}>Continue</Button>
                        <Button variant="outlined" className="button--styling__2 checkout__button" onClick={handleBack}>Back to previous step</Button>
                    </div>
                );
            case 3:
                return (
                    <div>
                        {props.addedProducts.map((product, index) => (
                             <Card key={index} className="cart-product">
                                <div className="cart-product_details">
                                    <CardContent>
                                        <h3>{product.name}</h3>
                                        <div>SKU: {product.id}</div>
                                        <div>Size: M</div>
                                        <div>Quantity: {product.quantity}</div>
                                        <div>Unit: {formatMoney(product.price)}</div>
                                        <div>Subtotal: {formatMoney(product.price * product.quantity)}</div>
                                    </CardContent>
                                </div>
                                <CardMedia image={product.image[0].image} title={product.name} className="cart-product__image" />
                            </Card>
                        ))}
                        <Button variant="contained" className="button--styling__1 checkout__button" onClick={handleNext}>Continue</Button>
                        <Button variant="outlined" className="button--styling__2 checkout__button" onClick={handleBack}>Back to previous step</Button>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <FormControl>
                            <RadioGroup aria-label="payment-method" name="payment-method" value={paymentMethod} onChange={handleChangePaymentMethod}>
                                <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                                {/* <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" /> */}
                            </RadioGroup>
                        </FormControl>
                        {paymentMethod ? <Button variant="contained" className="button--styling__1 checkout__button" onClick={handlePay}>Pay now ${orderTotal}</Button> : null}
                        <Button variant="outlined" className="button--styling__2 checkout__button" onClick={handleBack}>Back to previous step</Button>
                    </div>
                );
            default:
                return `Unknown step`;
        }
    };

    return (
        <Slide direction="up" in={props.checked} mountOnEnter unmountOnExit>
            <div className="checkout checkout--bg">
                <ToolbarCheckoutComponent onClickRenderCheckout={props.onClickRenderCheckout} />
                <div className="layout">
                    <div className="main">
                        <Stepper activeStep={activeStep} className="content" orientation="vertical">
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        {getStepContent(index)}
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                    </div>
                </div>
            </div>
        </Slide>
    )
};

const mapStateToProps = (state) => {
    return {
        addedProducts: state.addedProducts,
        total: state.total
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        payOrder: () => {dispatch(payOrder())}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent);