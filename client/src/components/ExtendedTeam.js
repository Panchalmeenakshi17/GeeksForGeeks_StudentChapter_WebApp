import React from 'react';
import extendmembers from '../Extendteam-data';
import ExtendProfileCard from './ExtendProfileCard';

const ExtendedTeam = () => {
  return (
    <div className='flex justify-center'>
        <div className='container pb-20'>
        <h1 className='text-[yellow] font-scnd font-black md:text-6xl text-4xl text-center md:mt-40 my-14'>EXTENDED TEAM</h1>
        <div className='flex md:flex-row flex-col flex-wrap justify-center items-center md:gap-x-20 gap-y-10 mt-28 md:gap-y-32 px-12 md:px-20'>
    
          {extendmembers && extendmembers.map(extendmember => (
            <ExtendProfileCard key={extendmember.id} extenddata={extendmember} />
          ))}
          
        </div>
        </div>
    </div>
  )
}

export default ExtendedTeam
