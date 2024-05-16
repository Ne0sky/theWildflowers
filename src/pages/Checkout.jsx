import React, { useState } from 'react';

const Checkout = () => {
    const [customerInfo, setCustomerInfo] = useState({
        customer: '',
        address: '',
        phone: '',
        items: [
            { plant: '664454ff44493b02765a1f8d', quantity: 3 },
            { plant: '664459fce8c13b01f1fa0420', quantity: 2 }
        ]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo({ ...customerInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send customerInfo to backend or perform further processing
        console.log('Submitted:', customerInfo);
    };

    return (
        <div className=" mx-auto max-w-lg mt-8">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="customer" className="block text-sm font-medium text-gray-700">Customer Name</label>
                    <input
                        type="text"
                        id="customer"
                        name="customer"
                        value={customerInfo.customer}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Checkout;
