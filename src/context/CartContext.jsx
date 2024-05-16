import React, { createContext, useEffect, useReducer } from 'react';

// Define the initial state of the cart
const initialState = {
    items: [],
};

// Define the reducer function to handle state updates
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if the item already exists in the cart
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                // If item exists, do not add it again
                return state;
            } else {
                // If item does not exist, add it to the cart
                return {
                    ...state,
                    items: [...state.items, action.payload],
                };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        case 'DECREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
                ),
            };

        default:
            return state;
    }
};

// Create the CartContext
export const CartContext = createContext();

// Create the CartProvider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Define the actions to add/remove items from the cart
    const addToCart = item => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeFromCart = itemId => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };

    const increaseQuantity = item => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: item });

    };

    const decreaseQuantity = item => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: item });
    };

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (cartItems) {
            // Check if each item exists in the cart before adding it
            cartItems.forEach(item => addToCart(item));
        }
    }, []);



    return (
        <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
