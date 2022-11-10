import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Addservice = () => {
    const {total} = useLoaderData();
    console.log(total);
    const handlesubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const title = form.title.value;
        const price = form.price.value;
        const bannerImg = form.banner.value;
        const thumbnail = form.thumbnail.value;
        const description = form.description.value;
        
        const service = {
            s_id: total+1,
            s_name: name,
            s_title: title,
            s_price: price,
            s_b_img: bannerImg,
            s_t_img: thumbnail,
            s_des: [description]
        }
        

        // Adding the service
        fetch('https://ma-consulting-three.vercel.app/addservice',{
            method:'put',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(service)

        })
        .then(res=>res.json())
        .then(data=> {
            if(data.insertedId){
                alert("Service added successfully")
            }
           form.reset()
        })

    }
    return (
        <div className='lg:w-[90%] mx-auto w-[98%]'>
            <form action="" onSubmit={handlesubmit}>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Service Name</span>
                    
                </label>
                <input type="text" placeholder="Name of the service" className="input input-bordered w-full " name='name'/>
                <label className="label">
                
                
                </label>
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Service title</span>
                    
                </label>
                <input type="text" placeholder="title of ths service" className="input input-bordered w-full " name='title'/>
                <label className="label">
                
                
                </label>
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Price </span>
                    
                </label>
                <input type="text" placeholder="price of ths service" className="input input-bordered w-full " name='price'/>
                <label className="label">
                
                
                </label>
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Banner image link of the service</span>
                    
                </label>
                <input type="text" placeholder="Banner image link" className="input input-bordered w-full " name='banner'/>
                <label className="label">
                
                
                </label>
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Thumbnail Image link</span>
                    
                </label>
                <input type="text" placeholder="Thumbnail image link" className="input input-bordered w-full " name='thumbnail'/>
                <label className="label">
                
                
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Service description</span>
                    
                </label> 
                <textarea className="textarea textarea-bordered h-24" placeholder="Text Description" name='description'></textarea>
                <label className="label">
                    
                </label> 
                </div>

                <div>
                    <button className='btn btn-primary' type='submit'>Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default Addservice;