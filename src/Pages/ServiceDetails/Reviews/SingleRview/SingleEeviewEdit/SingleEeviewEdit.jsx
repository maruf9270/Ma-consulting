import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleEeviewEdit = () => {
    const {_id,review} = useLoaderData()

      // Handle edit review 
      const handleEditReview = (e) =>{
        e.preventDefault()
        const edditedValue = e.target.edit.value
        
        fetch(`http://localhost:4000/update?id=${_id}`,{
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
                alert('Your Review Has been updated')
            }
        })

    }
  
    return (
        <div>
            Edit your review
           <form action="" onSubmit={handleEditReview}>
           <div className="form-control">
            <label className="label">
                {/* <span className="label-text">Your bio</span>
                <span className="label-text-alt">Alt label</span> */}
            </label> 
            <textarea defaultValue={review} className="textarea textarea-bordered h-24" placeholder="Edit Your Review" name='edit'></textarea>
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