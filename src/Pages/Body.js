import { faBirthdayCake, faCake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import profile from '../images/profile.png'

const Body = () => {
    return (
        <div className='text-white  '>
           <div>
           <img className='mx-auto' src={profile} alt='profile' /> 
           <h3 className='text-2xl font-bold'>Ishtiaqe Ahmed</h3>
           <h3 className='text-2xl font-bold'>01XX-XXX-XXXX</h3>
           </div>

           <div className='py-8'>
           <div className='flex justify-center items-center'>
           <div class="border-b-8 border-white  rounded-lg w-96"></div>
           <div className=" h-4 w-4 rounded-full bg-white "></div>
           </div>
            <div className='flex justify-between mx-auto w-96'>
                <div></div>
            <p>600 Hours</p>
         <p className='text-[#525659]'>1,000 H</p>
            </div>
           </div>
           <div className='py-8'>
               
           <button className='text-white bg-[#9B51E0] px-4 py-2 rounded-md text-3xl'><FontAwesomeIcon className='mr-2' icon={faCake}></FontAwesomeIcon>Collect Bonus</button>
           </div>
           <div class="w-96 h-28 bg-[#232539] mx-auto rounded-md flex justify-between items-center p-2">
               <div>
                   <h3 className='text-xl'>Premium Package</h3>
                   <h3 className='text-[#5E637D] text-left'>30 Days</h3>
               </div>
               <div>
                   <h1 className='text-3xl'>39 BDT</h1>
               </div>
               
               </div>
        </div>
    );
};

export default Body;