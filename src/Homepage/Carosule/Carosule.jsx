import React from 'react';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carosoul.css'
import { useNavigate } from 'react-router-dom';


const Carosule = () => {
    const navigate = useNavigate()
   
   
   
   
        return (
            <Carousel autoPlay style={styles} className='lg:w-[90vw] mx-auto w-[98vw] rounded-md' infiniteLoop onSwipeMove> 
            <div className='img-gradient relative' >
              <img alt="" src=" https://i.ibb.co/rQYdN4B/mario-gogh-VBLHICVh-l-I-unsplash-1.jpg" className='' />
              <div  className='absolute color-none top-[30%] left-[10%] z-10 text-white flex flex-col justify-start items-start'>
    
                  <h1 className='lg:text-7xl font-bold text-error lg:mb-5'>Join with us <br />  </h1>
                  <span className='lg:text-xl'>Share Your <span className='text-warning'>Opinion.</span> Your Valuable <br /></span>
                  <span className='lg:text-xl'>openion will help us to provide Qualityfull </span>
                  <span className='lg:text-xl'>Service  </span>
                  <div className='lg:mt-3'>
                  <button className='btn btn-outline btn-warning lg:px-8' onClick={()=>navigate('/signup')}>Sign Up</button> 
                  <button className='btn btn-outline btn-error lg:mx-4 lg:px-10' onClick={()=>navigate('/login')}>Login</button>
                  </div>
              </div>
              
             
            </div>
            <div className='img-gradient relative'>
              <img alt="" src="https://i.ibb.co/rprWzc6/campaign-creators-g-Msn-Xq-ILjp4-unsplash-2-1.jpg" />
              <div  className='absolute color-none top-[30%] left-[10%] z-10 text-white flex flex-col justify-start items-start'>

                <h1 className='lg:text-7xl font-bold text-error lg:mb-5'>Join with us <br />  </h1>
                <span className='lg:text-xl'>Share Your <span className='text-warning'>Opinion.</span> Your Valuable <br /></span>
                <span className='lg:text-xl'>openion will help us to provide Qualityfull </span>
                <span className='lg:text-xl'>Service  </span>
                <div className='lg:mt-3'>
                <button className='btn btn-outline btn-warning lg:px-8'  onClick={()=>navigate('/signup')}>Sign Up</button> 
                <button className='btn btn-outline btn-error lg:mx-4 lg:px-10' onClick={()=>navigate('/login')}>Login</button>
                </div>
            </div>              
             
            </div>
            <div className='img-gradient relative'>
              <img alt="" src=" https://i.ibb.co/JBGGxff/redd-f-5-U-28ojjgms-unsplash-1.jpg" />
              <div  className='absolute color-none top-[30%] left-[10%] z-10 text-white flex flex-col justify-start items-start'>

                <h1 className='lg:text-7xl font-bold text-error lg:mb-5'>Join with us <br />  </h1>
                <span className='lg:text-xl'>Share Your <span className='text-warning'>Opinion.</span> Your Valuable <br /></span>
                <span className='lg:text-xl'>openion will help us to provide Qualityfull </span>
                <span className='lg:text-xl'>Service  </span>
                <div className='lg:mt-3'>
                <button className='btn btn-outline btn-warning lg:lg:px-8'  onClick={()=>navigate('/signup')}>Sign Up</button> 
                <button className='btn btn-outline btn-error lg:mx-4 lg:px-10' onClick={()=>navigate('/login')}>Login</button>
                </div>
            </div>   
             
            </div>
            <div className='img-gradient relative'>
              <img alt="" src=" https://i.ibb.co/fttzr1V/ant-rozetsky-HXOll-TSwrp-M-unsplash.jpg" />
              <div  className='absolute color-none top-[30%] left-[10%] z-10 text-white flex flex-col justify-start items-start'>

                <h1 className='lg:text-7xl font-bold text-error lg:mb-5'>Join with us <br />  </h1>
                <span className='lg:text-xl'>Share Your <span className='text-warning'>Opinion.</span> Your Valuable <br /></span>
                <span className='lg:text-xl'>openion will help us to provide Qualityfull </span>
                <span className='lg:text-xl'>Service  </span>
                <div className='lg:mt-3'>
                <button className='btn btn-outline btn-warning lg:px-8'  onClick={()=>navigate('/signup')}>Sign Up</button> 
                <button className='btn btn-outline btn-error lg:mx-4 lg:px-10' onClick={()=>navigate('/login')}>Login</button>
                </div>
            </div>   
              
            </div>
            {/* <div>
              <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
              <p className="legend">Legend 5</p>
            </div>
            <div>
              <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
              <p className="legend">Legend 6</p>
            </div>
            <div>
              <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
              <p className="legend">Legend 7</p>
            </div>
            <div>
              <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
              <p className="legend">Legend 8</p>
            </div>
            <div>
              <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
              <p className="legend">Legend 9</p>
            </div>
            <div>
              <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
              <p className="legend">Legend 10</p>
            </div>
            <div>
              <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
              <p className="legend">Legend 11</p>
            </div>
            <div>
              <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
              <p className="legend">Legend 12</p>
            </div>
            <div>
              <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
              <p className="legend">Legend 13</p>
            </div>
            <div>
              <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
              <p className="legend">Legend 14</p>
            </div> */}
          </Carousel>
        
    );
};

export default Carosule;