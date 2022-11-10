import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleEeviewEdit = () => {
    const {_id,review} = useLoaderData()

      // Handle edit review 
      const handleEditReview = (e) =>{
        e.preventDefault()
        const edditedValue = e.target.edit.value
        
        fetch(`https://ma-consulting-three.vercel.app/update?id=${_id}`,{
            method:'put'
            ,headers:{
                "content-type":"application/json"
            }
            ,body:JSON.stringify({review:edditedValue})
        })
        .then(res=>res.json())
        .then(res=>{
            // setreload(relode+res.modifiedCount)
            if(res.modifiedCount){
                toast('Review Editted successfull')
            }
        })

    }
  
    return (
        <div className='min-h-[70vh] flex justify-center items-center flex-col w-[90vw] mx-auto'>
            <h1 className='text-3xl font-bold'>Edit your review</h1>
           <form action="" onSubmit={handleEditReview}>
           <div className="form-control">
            <label className="label">
                {/* <span className="label-text">Your bio</span>
                <span className="label-text-alt">Alt label</span> */}
            </label> 
            <textarea defaultValue={review} className="textarea textarea-bordered h-24 w-[80vw]" placeholder="Edit Your Review" name='edit'></textarea>
            <label className="label">
                {/* <span className="label-text-alt">Your bio</span>
                <span className="label-text-alt">Alt label</span> */}
            </label> 
            </div>
            <button className='btn btn-primary' type='submit'>Edit</button>
           </form>
          
        </div>
    );
};

export default SingleEeviewEdit;