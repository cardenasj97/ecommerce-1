import React from 'react';
import { AppBar, Toolbar, withStyles } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const AppBarStyled = withStyles({
    colorPrimary: {
        backgroundColor: '#f5f5f5',
        color: '#f06292'
    }
})(AppBar);

const ToolbarComponent = () => {
    return (
        <AppBarStyled position="fixed">
            <Toolbar variant="dense" className="toolbar">
                <div className="toolbar__element toolbar__title">
                    Juan Cardenas Store
                </div>
                <div className="toolbar__element">
                    <PhoneIcon className="toolbar__icon" titleAccess="Call customer support" />
                    <ExitToAppIcon className="toolbar__icon" titleAccess="Sign out" />
                </div>
            </Toolbar>
        </AppBarStyled>
    );
};

export default ToolbarComponent;