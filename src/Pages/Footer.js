import { faAngleRight, faGear, faPenToSquare, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-white py-8 mx-auto'>
            <div className='flex items-center justify-center'>
                <FontAwesomeIcon className='mr-4 h-8 w-8 rounded-lg bg-white text-[#A3A7BC]' icon={faStar}></FontAwesomeIcon>
                <span className='text-2xl' >FAQ</span>
            </div>
            <div>
            <FontAwesomeIcon className='text-2xl' icon={faAngleRight}></FontAwesomeIcon>
            </div>

        </div>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-white py-8 mx-auto'>
            <div className='flex items-center justify-center'>
                <FontAwesomeIcon className='mr-4 h-8 w-8 rounded-lg bg-white text-[#A3A7BC]' icon={faGear}></FontAwesomeIcon>
                <span className='text-2xl' >Setting</span>
            </div>
            <div>
            <FontAwesomeIcon className='text-2xl' icon={faAngleRight}></FontAwesomeIcon>
            </div>

        </div>
        <h1 className='text-2xl text-white py-8'>Unsubcribe</h1>
        </div>
    );
};

export default Footer;