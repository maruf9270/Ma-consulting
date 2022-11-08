import React, { useContext } from 'react';
import { UserContextApi } from '../Firebase/UserContext/UserContext';

const Homepage = () => {
    const value = useContext(UserContextApi)
    console.log(value);
    return (
        <div>
            This is Homepagefff
        </div>
    );
};

export default Homepage;