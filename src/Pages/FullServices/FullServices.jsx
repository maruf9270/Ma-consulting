import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../../Homepage/ServicesCard/ServicesCard';

const FullServices = () => {
    const data = useLoaderData()
    console.log(data);

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:w-[90%] sm:w-[98%] mx-auto gap-4 justify-items-center'>
            {
                data.map(s=> <ServicesCard key={s._id} data={s}></ServicesCard>)
            }
        </div>
    );
};

export default FullServices;