export const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        id
    };
};

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        id
    };
};

export const addQuantity = (id) => {
    return {
        type: 'ADD_QUANTITY',
        id
    };
};

export const subtractQuantity = (id) => {
    return {
        type: 'SUBTRACT_QUANTITY',
        id
    }
};

export const payOrder = () => {
    return {
        type: 'PAY_ORDER'
    };
};