import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContextApi } from '../../Firebase/UserContext/UserContext';

const SignUp = () => {
  
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //   Hanlding navigate
    const navigate = useNavigate()
    const [error,setError] = useState('')

    // Geeting functions from the usercontext
    const {signupUpWithGoogle,githubsignUp,signUpWithEmailandPass,Logout,update} = useContext(UserContextApi)

    // Handle name and photo url upload
    const updating = (props)=>{
        update(props)
        .then(data=>{})
    }

    // Handle signout
    const handleSignout = () =>{
        Logout()
        .then(res=>{})
        .catch(err=>setError(err))
    }
    // Handling sign up
    const handlesubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value
        const photoUrl = form.photo.value;
        const name = form.uname.value
       
       
        if(password.length < 6 ){
            setError("Password Must be at least 6 charecter Long")
            return
        }
        if(password !== confirmPassword){

            setError("Password did not match")
            return
        }
        else{
            signUpWithEmailandPass(email,password)
            .then(res=>{
                setError('')
                form.reset()
                // Handling database
                const user = {
                    email: email,
                    password: password,
                    name: name,
                    img: photoUrl
                }
                fetch('https://ma-consulting-three.vercel.app/signupmail',{
                    method:'put'
                    ,headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data=>{
                   
                    
                })
                const uinfo = {
                    displayName: name, photoURL: photoUrl
                  }
                updating(uinfo)
                handleSignout()
                toast.info('Account Created successfully. Please login')
                navigate('/login')
               
            })
            .catch(err=>{
               
                setError(err.status)
            })
            
        }
    }

    // Handling google
    const handleGoogle = () =>{
        signupUpWithGoogle()
        .then(data=>{
            setError('')
            const userMail = data.user.email;
            fetch('https://ma-consulting-three.vercel.app/jwt',{
                method:'post',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify({mail:userMail})
            })
            .then(res=>res.json())
            .then(data=>{
             
                const token = data.token
                localStorage.setItem('token',token)
            })
            fetch('https://ma-consulting-three.vercel.app/signup',{
                    method:'put',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify({mail:userMail})

                })
                .then(res=>res.json())
                .then(data=> { navigate(from, { replace: true });})
                toast.success("Signed up successfully")
        })
        .catch(err=>{
            setError('Something went wrong. Try again letter')

        })

    }

    // Handling GitHub
    const github = () =>{
        githubsignUp()
        .then(res=> {
            setError('')
            const userMail = res.user.email;
            fetch('https://ma-consulting-three.vercel.app/jwt',{
                method:'post',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify({mail:userMail})
            })
            .then(res=>res.json())
            .then(data=>{

                const token = data.token
                localStorage.setItem('token',token)
            })

            // Handling database 
            fetch('https://ma-consulting-three.vercel.app/signup',{
                    method:'put',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify({mail:userMail})

                })
                .then(res=>res.json())
                .then(data=> { })
                toast.success("Signed up successfully")
                navigate(from, { replace: true });
        })
        .catch(err=> {
           
            setError('Something went wrong. Try again letter')
        })
    }
    return (
        <div className='w-[100vw]  min-h-[35rem]'>

           
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-slate-200 dark:text-black-100 mx-auto my-10 shadow-md-black ">
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handlesubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-black-400">E-mail</label>
                    <input type="text" name="email" id="E-mail" placeholder="E-mail" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white dark:text-black-100 focus:dark:border-violet-400" required/>
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="uname" className="block dark:text-black-400">Full Name</label>
                    <input type="text" name="uname" id="name" placeholder="Full name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white dark:text-black-100 focus:dark:border-violet-400" required />
                    
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photo-url" className="block dark:text-black-400">Photo Url</label>
                    <input type="text" name="photo" id="photo" placeholder="Photo Url" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white dark:text-black-100 focus:dark:border-violet-400" required />
                    
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-black-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white dark:text-black-100 focus:dark:border-violet-400" required />
                    
                </div>
                
                <div className="space-y-1 text-sm">
                    <label htmlFor="confirm_password" className="block dark:text-black-400">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirm_password" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white dark:text-black-100 focus:dark:border-violet-400" required />
                    <div className="flex justify-end text-xs dark:text-black-400">
                        <Link rel="noopener noreferrer" href="#">Forgot Password?</Link>
                    </div>
                </div>
                <div className='p-0 m-0'>
                    {
                        error ? (<p className='text-red-700 p-0 m-0' >{error}</p>):''
                    }
                </div>
                <button className="block w-full p-3 text-center rounded-sm dark:text-black-900 dark:bg-violet-400" type='submit'>Sign in</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                <p className="px-3 text-sm dark:text-black-400">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button aria-label="Log in with Google" className="p-3 rounded-sm" onClick={handleGoogle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
                
                <button aria-label="Log in with GitHub" className="p-3 rounded-sm" onClick={github}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                    </svg>
                </button>
            </div>
            <p className="text-xs text-center sm:px-6 dark:text-black-400">Already have an account?
                <Link rel="noopener noreferrer" to={'/login'} className="underline dark:text-black-100">Login</Link>
            </p>
        </div>
        
        <Helmet>
            <title>Ma Consulting- Sign Up</title>
        </Helmet>
    </div>
    );
};

export default SignUp;