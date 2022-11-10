import React, { useState } from 'react';

const SingleReview = (r) => {

   
 
    const time = parseInt(r.data.time);
    const datanow = Date.now()
    const timeBefore = datanow - time;
    const timeinMenuit =timeBefore/60000
    var timetaken = '0 Menuit'
    if(timeinMenuit >= 1){
        if(timeinMenuit/60 >= 1){
         timetaken = Math.ceil(timeinMenuit/60) + ' Hours'
           
        }
        
        else{
           timetaken = Math.ceil(timeinMenuit)+ ' Menuit'
        }

    }



    return (
        <div className='my-5'>
            <div className="container flex flex-col w-full lg:max-w[90%] p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={r?.data?.img} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{r?.data?.name}</h4>
                        <span className="text-xs text-gray-600">{timetaken} Ago</span>
                    </div>
                </div>
                
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-600">
                {
                    r?.data?.review
                }
            </div>
        </div>
        </div>
    );
};

export default SingleReview;