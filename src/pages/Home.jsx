import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Banner from '../components/Banner';
import PlantCard from '../components/PlantCard';
import useGetPlants from '../hooks/useGetPlants';
const Home = () => {
    const { plants, error, isPending } = useGetPlants();
  return (
    <div className='px-4 md:px-8 lg:px-16 overflow-x-hidden'>
        <Banner/>
        <h1 className='text-3xl font-bold text-green-800 font-secondary mt-8'>Best Selling Plants</h1>
        <ul className="flex w-full justify-center items-center flex-wrap py-8 gap-8">
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
      {!isPending && plants.map(plant => (
        <li key={plant._id}>
          <PlantCard
            name={plant.name}
            description={plant.description}
            image={plant.image}
            origin={plant.origin}
            price={plant.price}
            id={plant._id}
          />
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Home