import React from 'react';
import { faBatteryFull, faLeftLong, faPenToSquare, faSignal, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
    return (
       <div>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-white font-bold text-xl py-8'>
            <h3>9:27</h3>
            <div className=''>
            <FontAwesomeIcon className='mr-2' icon={faSignal}></FontAwesomeIcon>
            <FontAwesomeIcon className='mr-2' icon={faWifi}></FontAwesomeIcon>
            <FontAwesomeIcon className='mr-2' icon={faBatteryFull}></FontAwesomeIcon>
            </div>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-white font-bold text-xl py-8'>
            <div>
                <FontAwesomeIcon className='mr-4' icon={faLeftLong}></FontAwesomeIcon>
                <span >More</span>
            </div>
            <div>
            <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
            </div>

        </div>
       </div>
    );
};

export default Header;