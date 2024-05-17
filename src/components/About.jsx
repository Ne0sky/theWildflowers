import React from 'react';
import { RiPlantLine } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { IoIosFlower } from "react-icons/io";


const About = () => {
  return (
    <section className="bg-white py-12 font-secondary">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us ?</h2>
      </div>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="card p-6  rounded-lg flex flex-col justify-center items-center">
          <p className='text-6xl py-4 text-green-800'><RiPlantLine/></p>
          <h3 className="text-2xl font-semibold mb-2">High Quality Plants</h3>
          <p className='text-center text-neutral-600 font-semibold'>vibrant and healthy plants to suit every need and space.</p>
        </div>
        <div className="card p-6  rounded-lg flex flex-col justify-center items-center">
        <p className='text-6xl py-4 text-green-800'><FaTruck/></p>

          <h3 className="text-2xl font-semibold mb-2">Quick Delivery</h3>
          <p className='text-center text-neutral-600 font-semibold'>Enjoy fast and reliable delivery</p>
        </div>
        <div className="card p-6  rounded-lg flex flex-col justify-center items-center">
        <p className='text-6xl text-green-800 py-4'><IoIosFlower/></p>
          <h3 className="text-2xl font-semibold mb-2">Expert Gardening Tips</h3>
          <p className='text-center text-neutral-600 font-semibold'>Get the best advice and tips from our gardening experts</p>
        </div>
      </div>
    </section>
  );
};

export default About;
