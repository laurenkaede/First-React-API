import React from 'react';
import Spinner from './Spinner.js';

const Users = (props) => {

if (props.loading) {
    return <Spinner />
} else {
    return (
        <div>
            {props.data}
        </div>
        )
    }
};

 
export default Users;