import dummyData from '../data/data.json';

const initialState = dummyData;

const cartReducer = (state = initialState, action) => {
    let updatedCart;
    let updatedProductIndex;
    let newTotal;
    let newProductQuantity;

    switch (action.type) {
        case 'ADD_TO_CART':
            let addedProduct = state.products.find(product => product.id === action.id);
            let existentProduct = state.addedProducts.find(product => action.id === product.id);

            if (existentProduct) {
                addedProduct.quantity += 1;
                return {
                    ...state,
                    addedProducts: [...state.addedProducts],
                    total: state.total + addedProduct.price
                };
            } else {
                addedProduct.quantity = 1;
                newTotal = state.total + addedProduct.price;

                return {
                    ...state,
                    addedProducts: [...state.addedProducts, addedProduct],
                    total: newTotal
                };
            }
        case 'REMOVE_FROM_CART':
            let productToRemove = state.addedProducts.find(product => action.id === product.id);
            let newProducts = state.addedProducts.filter(product => action.id !== product.id);
            newTotal = state.total - (productToRemove.price * productToRemove.quantity);

            return {
                ...state,
                addedProducts: newProducts,
                total: newTotal
            };
        case 'ADD_QUANTITY':
            updatedCart = [...state.addedProducts];
            updatedProductIndex = updatedCart.findIndex(product => product.id === action.id);

            const incrementedProduct = {
                ...updatedCart[updatedProductIndex]
            };

            incrementedProduct.quantity += 1;
            newProductQuantity = incrementedProduct.quantity;

            if (newProductQuantity <= incrementedProduct.stock) {
                updatedCart[updatedProductIndex] = incrementedProduct;
                newTotal = state.total + incrementedProduct.price;

                return {
                    ...state,
                    addedProducts: updatedCart,
                    total: newTotal
                }
            } else {
                return {
                    ...state
                }
            }
        case 'SUBTRACT_QUANTITY':
            updatedCart = [...state.addedProducts];
            updatedProductIndex = updatedCart.findIndex(product => product.id === action.id);

            const decrementedProduct = {
                ...updatedCart[updatedProductIndex]
            };

            decrementedProduct.quantity -= 1;
            newProductQuantity = decrementedProduct.quantity;

            if (newProductQuantity < 1) {
                return {
                    ...state
                }
            } else {
                updatedCart[updatedProductIndex] = decrementedProduct;
                newTotal = state.total - decrementedProduct.price;
    
                return {
                    ...state,
                    addedProducts: updatedCart,
                    total: newTotal
                }
            }
        default:
            return state;
    }
};

export default cartReducer;