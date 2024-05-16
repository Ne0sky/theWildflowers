import React from 'react'
import useCartContext from '../hooks/useCartContext'
import toast from 'react-hot-toast'
const PlantCard = ({ name, description, image, origin, id, price }) => {

    const { addToCart } = useCartContext()

    const handleAddtoCart = (id, name, image, price) => {
        return () => {
            // Retrieve existing cart items from localStorage
            const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            // Create a new item object
            const newItem = { 
                id: id,
                name: name,
                image: image,
                price: price,
                quantity: 1,
            };
            console.log('New item', newItem);
            // Check if the new item already exists in the cart
            const existingItem = existingItems.find(item => item.id === id);
            if (existingItem) {
                toast.error('Item already in cart');
                return;
            }
            // Add the new item to the existing cart items array
            const updatedItems = [...existingItems, newItem];
            // Save the updated cart items array back to localStorage
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            // Update the cart context state
            addToCart(newItem);
            toast.success('Item added to cart');
        };
    };
  return (
    <div className="w-80 h-[400px] rounded-lg overflow-hidden bg-green-100 border border-green-300 font-secondary p-4 flex flex-col items-center justify-center">
      <img className="w-full h-[200px] object-cover  rounded-xl bg-white" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 mt-2"><strong>Origin:</strong> {origin}</p>
      </div>
      <div className='flex justify-between items-center gap-4 '>
      <div className=" bg-white p-2 rounded-lg"> ${price}</div>

      <button onClick={handleAddtoCart(id, name, image, price)} className="bg-green-800  text-white  px-8 py-2 rounded-lg">Add to Cart</button>
        </div>
    </div>
  )
}

export default PlantCard