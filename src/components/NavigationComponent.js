import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, withStyles } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';

const BottomNavigationActionStyled = withStyles({
    selected: {
        color: '#f06292 !important',
    }
})(BottomNavigationAction);

const NavigationComponent = () => {
    const [navigationItem, setNavigationItem] = useState("1");

    return (
        <BottomNavigation
            value={navigationItem}
            onChange={(event, newValue) => {
            setNavigationItem(newValue);
            }}
            showLabels
            className="bottom-nav bottom-nav--fixed"
        >
          <BottomNavigationActionStyled label="Categorías" value="1" icon={<HomeOutlinedIcon />} />
          <BottomNavigationActionStyled label="Catálogo" value="2" icon={<MenuBookOutlinedIcon />} />
          <BottomNavigationActionStyled label="Carrito" value="3" icon={<ShoppingCartOutlinedIcon />} />
        </BottomNavigation>
    );
};

export default NavigationComponent;