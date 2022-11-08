import React, { createContext } from 'react';
export const UserContextApi = createContext('') 
const UserContext = ({children}) => {
  
    return (
       <UserContextApi.Provider value={'connected successfully'}>
         {children}
       </UserContextApi.Provider>
    );
};

export default UserContext;