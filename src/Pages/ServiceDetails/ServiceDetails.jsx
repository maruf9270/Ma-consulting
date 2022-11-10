import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Reviews from './Reviews/Reviews';

const ServiceDetails = () => {
    const data = useLoaderData()
    let i = 1;
    const {s_des,_id} = data
    return (
        <div className='lg:w-[90%] w-[98%] mx-auto'>
            <div className="border-[1px] border-gray-300 shadow-md shadow-gray-200 rounded-xl">
                <img src={data.s_b_img} alt="" className='rounded-xl' />

            </div>
            <div className="border-[1px] border-gray-300 shadow-md shadow-gray-200 rounded-xl my-6 p-6">
                <h2 className='text-3xl font-bold'>
                    {data.s_title}
                </h2>
               <div>
                    {
                       s_des.map(d=><p className='my-7' key={i++}>{d}</p>)
                    }
               </div>
            </div>
            {/* Review section */}
           <div className='className="border-[1px] border-gray-300 shadow-md shadow-gray-200 rounded-xl" p-6 my-6'>
            <h2 className='text-3xl font-bold'>Reviews</h2>
           <Reviews id={_id}></Reviews>
           </div>
           <Helmet>
            <title>Ma Consulting- Srvice Details</title>
        </Helmet>
        </div>
    );
};

export default ServiceDetails;