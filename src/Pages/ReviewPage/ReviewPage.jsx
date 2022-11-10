import React, { useContext, useEffect, useState } from 'react';
import { UserContextApi } from '../../Firebase/UserContext/UserContext';
import Singleone from './PersonSIngleReview/Singleone';

const ReviewPage = () => {


    // To handle loading 
    const [loading,setloading] = useState(true)
    const token = localStorage.getItem('token')
    const {user} = useContext(UserContextApi)
    const mail = user?.email;
    const [reload,setreload] = useState(0)


    const [myReviews,setReviews] = useState('')
    useEffect(()=>{
        fetch(`https://ma-consulting-three.vercel.app/myreviews?mail=${mail}`,{
            headers:{
                token:token
            }
        })
        .then(res=>res.json())
        .then(data=>{
            
            setReviews(data)
            setloading(false)
        })
    },[user,mail,token,reload])
    

    // handledelete
    const handledelete = (props) =>{
        const op = window.confirm("Are you sure you want to delete")
        console.log(op);
        const id = props
        if(op){
            fetch(`https://ma-consulting-three.vercel.app/delete?id=${id}`,{
            method:"delete"
        })
        .then(res=>res.json())
        .then(data=>{
            setreload(reload+data.deletedCount)
            alert("deleted succesfully")
        })

        }
       
        else{
            return
        }
    }
   if(loading){
    return <div className='w-[100vw] min-h-[80vh] flex justify-center items-center'>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>

    </div>
   }
   else{
    return (
        <>
        {
           ( myReviews.length > 0 ? <div className='grid lg:grid-cols-3 lg:w-[90%] mx-auto gap-7 my-10'>
           {
             myReviews.map(r=> <Singleone key={r._id} data={r} handledelete={handledelete}></Singleone>)
           }
                                     </div>: (
                                     <div className='h-[80vh] min-h-[30rem] lg:w-[90%] w-[98%] mx-auto flex justify-center items-center'>
                <span className='text-3xl font-bold'>No reviews were added</span>
            </div>   )
           )
          
        }
        </>
    );
   }
};

export default ReviewPage;