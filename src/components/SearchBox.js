import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

export const SearchBox = () => {

    const { auth } = useContext(AuthContext);


    return (
        <div className="headind_srch">
            <div className="recent_heading mt-2">
                <h4>{auth.name}</h4>
            </div>
        </div >
    )
}
