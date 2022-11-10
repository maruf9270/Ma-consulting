import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContextApi } from '../Firebase/UserContext/UserContext';

const PrivetRoute = ({children}) => {
  let location = useLocation();
    const {user,loading} = useContext(UserContextApi);
    console.log(user);

    if(loading){
        return (
            <div>
                Loading....
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