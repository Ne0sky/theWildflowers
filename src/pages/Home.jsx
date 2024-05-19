import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import PlantCard from '../components/PlantCard';
import useGetPlants from '../hooks/useGetPlants';
import About from '../components/About';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Home = () => {
  const { plants, error, isPending } = useGetPlants();
  const navigate = useNavigate();

  return (
    <div className='px-4 md:px-8 lg:px-16 overflow-x-hidden'>
      <Banner />
      <About />
      <h1 className='text-3xl font-bold text-green-800 font-secondary mt-8'>Best Selling Plants</h1>
      <ul className="flex w-full justify-center items-center flex-wrap py-8 gap-8">
        {isPending && (
          <>
            {Array(6).fill().map((_, index) => (
              <li key={index} className='cursor-pointer'>
                <div className='w-64'>
                  <Skeleton height={200} />
                  <Skeleton count={3} />
                </div>
              </li>
            ))}
          </>
        )}
        {error && <p>{error}</p>}
        {!isPending && plants.map(plant => (
          <li key={plant._id} className='cursor-pointer relative z-10' >
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
  );
};

export default Home;
