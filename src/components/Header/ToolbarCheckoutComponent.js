import React from 'react';
import { AppBar, Toolbar, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const AppBarStyled = withStyles({
    colorPrimary: {
        backgroundColor: '#f06292',
        color: '#fff'
    }
})(AppBar);

const ToolbarCheckoutComponent = (props) => {
    const onClickRenderCheckout = () => {
        props.onClickRenderCheckout();
    };

    return (
        <AppBarStyled position="fixed">
            <Toolbar variant="dense" className="toolbar-checkout">
                <CloseIcon className="close-checkout" onClick={onClickRenderCheckout} />
                <div className="toolbar__element toolbar__title">
                    Checkout
                </div>
            </Toolbar>
        </AppBarStyled>
    );
};

export default ToolbarCheckoutComponent;