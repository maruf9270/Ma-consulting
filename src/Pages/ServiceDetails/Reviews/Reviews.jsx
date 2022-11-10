import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContextApi } from '../../../Firebase/UserContext/UserContext';
import SingleReview from './SingleRview/SingleReview';

const Reviews = (props) => {
    
    const sid = props.id
    // For forcing the page to relode
    const [force,setForce] = useState('')
    // Storing the data to the state
    const [reviews,setReview] = useState([])
    // loading service review
    useEffect(()=>{
        fetch(`https://ma-consulting-three.vercel.app/reviews?sid=${sid}`)
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[force])

    console.log(reviews);
    const {user} = useContext(UserContextApi)
    console.log(user);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target
       const review = e.target.review.value
       const email = user.email
       const time = Date.now()
       const name = user.displayName ? user.displayName : "No Name"
       const photo = user.photoURL ? user.photoURL : "https://i.ibb.co/vJ4qDFz/User-avatar-svg.png"
      const reviewobj = {
        serviceid: sid,
        email: email,
        name: name,
        img: photo,
        review: review,
        time: time
      }
       
      fetch('https://ma-consulting-three.vercel.app/add/review',{
        method: "post",
        headers:{
            "content-type":"application/json"
        }
        ,body: JSON.stringify(reviewobj)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.insertedId){
            toast.success("Review added successfully")
            setForce(data.insertedId)
            form.reset()
        }
      })
      
       
        
    }
   

    return (
        <div>
            {
                user?.uid ? (<>
                    <form action="" onSubmit={handleSubmit}>
                       <div className="form-control">
                       <label className="label">
                           {/* <span className="label-text">Your bio</span>
                           <span className="label-text-alt">Alt label</span> */}
                       </label> 
                       <textarea className="textarea textarea-bordered h-24" placeholder="Add Your review" name='review'></textarea>
                       <label className="label">
                           {/* <span className="label-text-alt">Your bio</span>
                           <span className="label-text-alt">Alt label</span> */}
                       </label> 
                   </div>
                   <div>
                       <button className='btn' type='submit'>Add Review</button>
                   </div>
                       </form>
                   
                   </>
               ):<>Please <Link to={'/login'} className="font-bold text-blue-600">login</Link> to add a review</>
            }
            <h1 className='text-2xl font-bold my-5'>User Reviews:</h1>
            <div className='p-8'>
                
                <div>
                    {
                        reviews.map(r=> <SingleReview key={r._id} data={r}></SingleReview>)
                    }
                </div>
            </div>
            
           
        </div>
    );
};

export default Reviews;