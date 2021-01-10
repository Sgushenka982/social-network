import preloader from '../../../image/preloader.svg';
import React from 'react';

const Preloader = (props) => {
    return (
        <div>
            <img
                src={preloader}
                alt='loading'
            />
        </div>
    )
}

export default Preloader;