import React from 'react';
import './Shaker.css'
import shaker from './rot.png'
import {Watch} from "react-loader-spinner";

const Shaker = () => {
    return (
        <div>
            <img src={shaker} className='shakeMe' width={180} alt='alt'/>
            <div className='watch'>
                <Watch color='white'/>
            </div>
        </div>
    );
};

export default Shaker;