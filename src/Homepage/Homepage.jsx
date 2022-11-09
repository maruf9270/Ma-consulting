import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContextApi } from '../Firebase/UserContext/UserContext';
import ServicesCard from './ServicesCard/ServicesCard';

const Homepage = () => {
    const services = useLoaderData()
    console.log(services);
    const value = useContext(UserContextApi)
    console.log(value);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:w-[90%] sm:w-[98%] mx-auto gap-0 justify-items-center'>
           {services.map(s=><ServicesCard key={s._id} data={s}></ServicesCard>)}
        </div>
    );
};

export default Homepage;