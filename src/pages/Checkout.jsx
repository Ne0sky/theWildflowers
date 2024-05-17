import React, { useState } from 'react';
import useCartContext from '../hooks/useCartContext';
import usePlaceOrder from '../hooks/usePlaceOrder';
const Checkout = () => {
    const { cart } = useCartContext();
    const { placeOrder, isPending, error } = usePlaceOrder();
    const [customerInfo, setCustomerInfo] = useState({
        customer: '',
        address: '',
        phone: '',
        items: [
            
        ]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo({ ...customerInfo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        customerInfo.items = [
            ...cart.items.map(item => ({
                plant: item.id,
                quantity: item.quantity
            }))
        ]
        console.log('Submitted:', customerInfo);
        const res = await placeOrder(customerInfo);
        console.log(res);
        
    };

    return (
        <div className=" mx-auto min-h-[70vh] max-w-lg font-secondary py-16 px-4">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <form onSubmit={handleSubmit} className=' rounded-xl flex flex-col justify-center'>
                <div className="mb-4">
                    <label htmlFor="customer" className="block text-sm font-medium text-gray-700">Customer Name</label>
                    <input
                        type="text"
                        id="customer"
                        name="customer"
                        value={customerInfo.customer}
                        onChange={handleChange}
                        className="mt-1 p-3 block w-full bg-neutral-100  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={customerInfo.address}
                        onChange={handleChange}
                        className="mt-1 p-3 block w-full  bg-neutral-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={customerInfo.phone}
                        onChange={handleChange}
                        className="mt-1 p-3 block w-full bg-neutral-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Items</h2>
                    <ul className='py-8'>
                        {
                            cart.items.map(item => (
                                <li key={item.id} className="flex justify-between items-center py-2">
                                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
                                    <p>{item.name}</p>
                                    <p>{item.quantity}</p>
                                </li>
                            ))   
                        }
                    </ul>
                    <div className="flex justify-end border-t border-neutral-600 gap-4 items-center py-4">
                        <p>Total</p>
                        <p>${cart.items.reduce(
                            (acc, item) => acc + item.price * item.quantity,
                            0
                        ).toFixed(2
                        )}</p>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-1/2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Checkout;
