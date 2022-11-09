import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useNavigate } from 'react-router-dom';

const ServicesCard = (props) => {
    const handleNavigation = useNavigate()
    const {_id,s_t_img,s_name,s_des,s_b_img}= props.data
    const des = s_des[0];
    console.log();

    return (
        
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 ml-0 relative">
                <PhotoProvider><PhotoView src={s_b_img} ><img src={s_t_img} alt='' className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"/></PhotoView></PhotoProvider>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{s_name}</h2>
                        <p className="dark:text-gray-100">{des.slice(0,100)}...</p>
                    </div>
                   
                </div>
                <button type="button" className=" flex absolute bottom-0 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-b-md dark:bg-violet-400 dark:text-gray-900" onClick={()=>handleNavigation(`/service/details/${_id}`)}>View Details</button>
            </div>
        
    );
};

export default ServicesCard;