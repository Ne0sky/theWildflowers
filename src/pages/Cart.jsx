import React, { useEffect, useState } from 'react';
import useCartContext from '../hooks/useCartContext';
import { useNavigate } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const { cart, removeFromCart, decreaseQuantity, increaseQuantity } = useCartContext();

    useEffect(() => {
        console.log('Cart', cart);
    }, [cart]);

    const handleRemoveFromCart = (id) => {
        return () => {
            console.log('Remove from cart', id);
            localStorage.setItem('cartItems', JSON.stringify(cart.items.filter(item => item.id !== id)));
            removeFromCart(id);
        };
    };

    const handleAddQuantity = (_item) => {
        return () => {
            increaseQuantity(_item);
            localStorage.setItem('cartItems', JSON.stringify(cart.items.map(item => item.id === _item.id ? { ...item, quantity: item.quantity + 1 } : item)))
        }
    }

    const handleReduceQuantity = (_item) => {
        return () => {
            if (_item.quantity > 1) {
                decreaseQuantity(_item);
                localStorage.setItem('cartItems', JSON.stringify(cart.items.map(item => item.id === _item.id ? { ...item, quantity: item.quantity - 1 } : _item)))
            } else {
                handleRemoveFromCart(_item.id)();
            }
        }
    }

    const handleCheckout = () => {
        navigate('/checkout');
    }


    return (
        <div className="container font-secondary flex flex-col  items-center w-full min-h-screen p-8">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            {cart.items.length === 0 && <p className="text-lg">Your cart is empty</p>}
            {cart.items.length > 0 && (
                <p className="text-lg">
                    You have {cart.items.length} item{cart.items.length > 1 ? 's' : ''} in your cart
                </p>
            )}
            <div className='grid grid-cols-1 gap-4 w-full md:w-[80%] lg:w-1/2 py-8'>
                {
                    cart.items.length > 0 &&
                    <ul className="grid grid-cols-1 gap-4 w-full border rounded-xl p-4 bg-white">
                        {cart.items.length > 0 && cart.items.map((item, index) => (
                            <li key={item.id} className={` rounded p-2  flex items-center justify-between ${index !== cart.items.length - 1 ? 'border-b' : ''}`}>
                                <div className="flex flex-col md:flex-row items-center space-x-4 w-1/3">
                                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p className="text-gray-700">Price: ${item.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button className="px-3 py-1 bg-neutral-200  rounded " onClick={handleReduceQuantity(item)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button className="px-3 py-1 bg-neutral-200  rounded " onClick={handleAddQuantity(item)}>+</button>
                                </div>
                                <button
                                    onClick={handleRemoveFromCart(item.id)}
                                    className=" rounded-full  text-2xl  text-red-600"
                                >

                                    <MdDeleteForever className="inline-block " />
                                </button>
                            </li>
                        ))}
                    </ul>
                }
                {cart.items.length > 0 &&
                    <div className='flex items-center justify-between'>
                        <h3 className="text-lg font-semibold mt-8">Total: ${cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h3>


                        <button className="bg-blue-800 text-white px-4 py-2 rounded-lg mt-4" onClick={handleCheckout}>Checkout</button>
                    </div>
                }

            </div>

        </div>
    );
};

export default Cart;
