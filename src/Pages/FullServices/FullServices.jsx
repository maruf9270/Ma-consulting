import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import ServicesCard from '../../Homepage/ServicesCard/ServicesCard';

const FullServices = () => {
    // For loading
    const [loading,setloading] = useState(true)
    // for stoting data
    const [data,setData] = useState()
    useEffect(()=>{
        fetch(`https://ma-consulting-three.vercel.app/services?limit=0`)
        .then(res=>res.json())
        .then(datas=>{
           
            setData(datas)
            setloading(false)
        })
    },[])

   

   if(loading){

     return <div className='w-[100vw] min-h-[80vh] flex justify-center items-center'>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>

    </div>
   }
   else{
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:w-[90%] sm:w-[98%] mx-auto gap-4 justify-items-center my-10'>
            {
                data.map(s=> <ServicesCard key={s._id} data={s}></ServicesCard>)
            }
            <Helmet>
            <title>Ma Consulting- All services</title>
        </Helmet>
        </div>
    );
   }
};

export default FullServices;