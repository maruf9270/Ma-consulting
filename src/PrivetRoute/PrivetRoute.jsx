import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContextApi } from '../Firebase/UserContext/UserContext';

const PrivetRoute = ({children}) => {
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
           <div>
            access granted
           </div>
        )

    }
  else{
    return <Navigate to={'/login'}></Navigate>
  }
};

export default PrivetRoute;