import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from './Reviews/Reviews';

const ServiceDetails = () => {
    const data = useLoaderData()
    let i = 1;
    const {s_des,_id} = data
    return (
        <div className='lg:w-[90%] w-[98%] mx-auto'>
            <div>
                <img src={data.s_b_img} alt="" />

            </div>
            <div>
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
           <div className='my-9'>
            <h2 className='text-3xl font-bold'>Reviews</h2>
           <Reviews id={_id}></Reviews>
           </div>
        </div>
    );
};

export default ServiceDetails;