import React, { useEffect, useState } from 'react';
import { Badge, BottomNavigation, BottomNavigationAction, withStyles } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const BottomNavigationActionStyled = withStyles({
    selected: {
        color: '#f06292 !important',
    }
})(BottomNavigationAction);

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#f06292',
        padding: '0 4px',
        right: -2,
        top: 9
    }
}))(Badge);

const NavigationComponent = (props) => {
    const [navigationItem, setNavigationItem] = useState('/categories');
    // const [cartProductCount, setNavigationItem] = useState('/categories');
    const currentModule = useLocation().pathname;

    useEffect(() => {
        setNavigationItem(currentModule);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const cartProductCount = props.addedProducts.reduce((count, curr) => {
        return count + curr.quantity;
    }, 0);

    const handleChange = (event, newValue) => {
        setNavigationItem(newValue);
    }

    return (
        <BottomNavigation
            value={navigationItem}
            onChange={handleChange}
            showLabels
            className="bottom-nav bottom-nav--fixed"
        >
          <BottomNavigationActionStyled component={Link} to="/categories" label="Categories" value="/categories" icon={<HomeOutlinedIcon />} />
          <BottomNavigationActionStyled component={Link} to="/catalogue" label="Catalogue" value="/catalogue" icon={<MenuBookOutlinedIcon />} />
          <BottomNavigationActionStyled component={Link} to="/cart" label="Cart" value="/cart" 
            icon={
                    <StyledBadge badgeContent={cartProductCount} color="secondary">
                        <ShoppingCartOutlinedIcon />
                    </StyledBadge>
            } />
        </BottomNavigation>
    );
};

const mapStateToProps = (state) => {
    return {
        addedProducts: state.addedProducts
    };
};

export default connect(mapStateToProps)(NavigationComponent);