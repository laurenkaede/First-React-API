import React from 'react';
import LoadingGif from '../spinner.gif';
const Spinner = () => {
    return (
        <div>
            <img src={LoadingGif} alt="Loading..." />
        </div>
    )
}
export default Spinner;
