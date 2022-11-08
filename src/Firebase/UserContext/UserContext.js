import React, { createContext } from 'react';

const UserContext = ({children}) => {
    const UserContextApi = createContext('') 
    return (
       <UserContextApi.Provider value={'connected successfully'}>
         {children}
       </UserContextApi.Provider>
    );
};

export default UserContext;