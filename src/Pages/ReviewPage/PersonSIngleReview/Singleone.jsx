import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Singleone = (props) => {
   
    const {review,serviceid,_id} = props.data
    const {handledelete} = props
   


    const [reviewd,setReview] = useState()
    useEffect(()=>{
        fetch(`https://ma-consulting-three.vercel.app/service/details?id=${serviceid}`)
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])


  
    // Navigaiton handler for review edit page
    const handleNavigateforedit = useNavigate()
   
    return (
        <div>
            


            <div className="card max-w-[19rem] bg-base-100 shadow-xl image-full h-full">
            <figure><img src={reviewd?.s_t_img} alt="Shoes" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title">{reviewd?.s_name}</h2>
                <p className='max-w-[15rem] flex min-h-[3rem]'>{review}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={()=>handleNavigateforedit(`/editreview/${_id}`)}>Edit</button>
                <button onClick={()=>handledelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Singleone;