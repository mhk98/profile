import { faAngleRight, faPenToSquare, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-white py-8 mx-auto'>
            <div className='flex items-center justify-center'>
                <FontAwesomeIcon className='mr-4 h-12 w-12 rounded-lg bg-white text-[#A3A7BC]' icon={faStar}></FontAwesomeIcon>
                <span className='text-2xl' >FAQ</span>
            </div>
            <div>
            <FontAwesomeIcon className='text-2xl' icon={faAngleRight}></FontAwesomeIcon>
            </div>

        </div>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-white py-8 mx-auto'>
            <div className='flex items-center justify-center'>
                <FontAwesomeIcon className='mr-4 h-12 w-12 rounded-lg bg-white text-[#A3A7BC]' icon={faStar}></FontAwesomeIcon>
                <span className='text-2xl' >FAQ</span>
            </div>
            <div>
            <FontAwesomeIcon className='text-2xl' icon={faAngleRight}></FontAwesomeIcon>
            </div>

        </div>
        </div>
    );
};

export default Footer;