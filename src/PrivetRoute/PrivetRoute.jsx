import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContextApi } from '../Firebase/UserContext/UserContext';

const PrivetRoute = ({children}) => {
  let location = useLocation();
    const {user,loading} = useContext(UserContextApi);
    

    if(loading){
        return (
          <div className='w-[100vw] min-h-[80vh] flex justify-center items-center'>
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
  
      </div>
        )
    }

    if(user?.uid){
        return(
          <>
           {
            children
           }</>
        )

    }
  else{
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivetRoute;