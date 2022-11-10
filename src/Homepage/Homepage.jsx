import React, { useContext } from 'react';

import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { UserContextApi } from '../Firebase/UserContext/UserContext';
import Carosule from './Carosule/Carosule';
import ServicesCard from './ServicesCard/ServicesCard';

const Homepage = () => {
    const handleClick = useNavigate() 
    const services = useLoaderData()
   
    const {user} = useContext(UserContextApi)
    
    return (
        
        <>
        {/* Carosul section starts from here */}

        <div>
        <Carosule></Carosule>
        </div>
         {/* Carosul section ends here */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:w-[90%] sm:w-[98%] mx-auto gap-0 justify-items-center mt-9'>
           {services.map(s=><ServicesCard key={s._id} data={s}></ServicesCard>)}
        </div>
        <div className='flex justify-center mb-9'>
            <button className='btn btn-primary' onClick={()=>handleClick('/services')}>View All</button>
        </div>
        <Helmet>
            <title>Ma Consulting Home</title>
        </Helmet>

            {/*  */}
            <div>
               <div className="p-5 sm:p-10 md:p-16 bg-gray-100 text-gray-800 lg:w-[90vw] w-[90vw] mx-auto rounded-md my-8">
                    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                        <img src="https://i.ibb.co/MkC17R7/businessman-showing-changes-report-1.jpg" alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                            <div className="space-y-2">
                                <Link rel="noopener noreferrer" to={'/services'} className="inline-block text-2xl font-semibold sm:text-3xl">Why should you give review ?</Link>
                                
                            </div>
                            <div className="text-gray-800">
                                <p>We believe in customer satisfaction. Your review is a very big chance for us to find out our defects. And so that we can give you the best service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        <div className=' lg:w-[90vw] w-[98vw] mx-auto my-10'>
        <div className="stats shadow  lg:w-[90vw] w-[98vw] mx-auto ">
  
  <div className="stat ">
    {/* <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div> */}
    <div className="stat-title">Total Client</div>
    <div className="stat-value text-primary">1.5 k</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    {/* <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div> */}
    <div className="stat-title">Total Review</div>
    <div className="stat-value text-secondary">1.2 K</div>
    <div className="stat-desc">And still growing</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      {
        user?.photoURL ? (<> <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src={user?.photoURL} alt=''/>
        </div>
      </div></>):''
      }
    </div>
    <div className="stat-value">98%</div>
    <div className="stat-title">Positive Review</div>
    <div className="stat-desc text-secondary">1% average Negative Review</div>
  </div>
  
</div>
        </div>


        {/*  */}
        <section className="bg-gray-100 text-gray-800 lg:w-[90vw] mx-auto w-[98vw] rounded-md my-10">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">Why Should You Choose US</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">Our is an reputed firm in Bangladesh</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Our Qualification</h3>
				<p className="mt-3 text-lg text-gray-600">We have around 100 Branches all over Bangladesh</p>
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 text-gray-900">Give feedback to imprive our services</h4>
							<p className="mt-2 text-gray-600">Give feedback to us so that we can improve our services.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 text-gray-900">Why your openion matter?</h4>
							<p className="mt-2 text-gray-600">We cannot find out our defects of our own with your help we can find our defects and improve it</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 text-gray-900">Our Provided Services</h4>
							<p className="mt-2 text-gray-600">We Believe in customer satisfaction</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://i.ibb.co/dQZf9dL/kristaps-ungurs-3uu-DL2-Dgp-Uo-unsplash-1.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Our Provided Services</h3>
					<p className="mt-3 text-lg text-gray-600">We Believe in customer satisfaction. We believe that the customer feedback can help us to improve our services</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 text-gray-900">We Provide Qualityfull services</h4>
								<p className="mt-2 text-gray-600">We have more then 1500 employees. We will privide you best services</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 text-gray-900">We provide financial services </h4>
								<p className="mt-2 text-gray-600">We Provide finnancial servecies about your business concern</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 text-gray-900">Not to warry about tax service</h4>
								<p className="mt-2 text-gray-600">We will provide you the best tax auditor to make your tax file</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://i.ibb.co/myS0LNv/baner-1.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>
        {/*  */}



        {/*  */}
        <div className='lg:w-[90vw] w-[98vw] mx-auto my-14 rounded-md'>
        <section className="py-6 bg-gray-100 text-gray-900 rounded-xl">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
		<h1 className="text-5xl font-bold leading-none text-center">Sign up now</h1>
		<p className="text-xl font-medium text-center">Join with us. Together we can make this industry a wrold class industry. Share your valuable openion with us and get "Great Service"  as your reward </p>
		<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
			<button className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50" onClick={()=>handleClick('/signup')}>Sign Up</button>
			<button className="px-8 py-3 text-lg font-normal border rounded bg-gray-800 text-gray-50 border-gray-700" onClick={()=>handleClick('/login')}> Login </button>
		</div>
	</div>
</section>
        </div>
        {/*  */}
        </>
    );
};

export default Homepage;