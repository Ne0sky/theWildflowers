import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCartContext from '../hooks/useCartContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import toast from 'react-hot-toast';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCartContext();

  useEffect(() => {
    fetch(`https://sproutz.vercel.app/api/plant/${id}`)
      .then(res => res.json())
      .then(data => setProduct({ ...data, quantity: 1 }))
      .catch(err => console.log(err));
  }, [id]);

  const handleAddtoCart = () => {
   return () => {
       // Retrieve existing cart items from localStorage
       const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];
       console.log('Product:', product)
       // Create a new item object
        const newItem = { 
            id: product._id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: 1,
        };
       
       // Check if the new item already exists in the cart
       const existingItem = existingItems.find(item => newItem.id === item.id);
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
    <div className='min-h-screen overflow-x-hidden px-4 font-secondary'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-16 py-16'>
        <div className='w-full md:w-1/3 h-[400px] object-contain'>
          {product ? (
            <img src={product.image} alt={product.name} className='w-full rounded-lg h-full object-contain' />
          ) : (
            <Skeleton height={400} />
          )}
        </div>
        <div>
          <div className='flex items-center gap-4'>
            <h1 className='text-3xl font-bold'>
              {product ? product.name : <Skeleton width={200} />}
            </h1>
            {product ? (
              product.available ? (
                <span className='text-sm rounded-lg px-2 text-white bg-green-800'>In Stock</span>
              ) : (
                <span className='text-lg text-red-800'>Out of Stock</span>
              )
            ) : (
              <Skeleton width={100} />
            )}
          </div>
          <p className='text-lg font-semibold text-neutral-600 pb-4'>
            {product ? product.description : <Skeleton count={3} />}
          </p>
          <p className='text-lg'>
            {product ? (
              <>
                <span className='bg-blue-100 font-semibold p-1 rounded-lg mr-2'>Origin</span> {product.origin}
              </>
            ) : (
              <Skeleton width={100} />
            )}
          </p>
          <p className='text-xl font-medium text-white bg-black px-2 py-1 my-4 w-24'>
            {product ? `$ ${product.price}` : <Skeleton width={50} />}
          </p>
          {product ? (
            <button onClick={handleAddtoCart()} className='bg-green-800 my-8 text-white px-4 py-2'>
              Add to Cart
            </button>
          ) : (
            <Skeleton width={100} height={40} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
