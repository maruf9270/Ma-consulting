import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContextApi } from '../../../Firebase/UserContext/UserContext';

const Reviews = (props) => {
    
    const sid = props.id
    const {user} = useContext(UserContextApi)
    console.log(user);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target
       const review = e.target.review.value
       const email = user.email
       const name = user.displayName ? user.displayName : "No Name"
       const photo = user.photoURL ? user.photoURL : "https://i.ibb.co/vJ4qDFz/User-avatar-svg.png"
      const reviewobj = {
        serviceid: sid,
        email: email,
        name: name,
        img: photo,
        review: review
      }
       
      fetch('http://localhost:4000/add/review',{
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
            alert("Review added successfully")
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
               ):<>Please <Link to={'/login'}>login</Link> to add a review</>
            }

            <div>
                User Reviews
                <div>
                    
                </div>
            </div>
            
           
        </div>
    );
};

export default Reviews;