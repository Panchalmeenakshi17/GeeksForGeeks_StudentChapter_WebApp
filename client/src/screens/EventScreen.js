import React from 'react'
import FooterSection from '../components/FooterSection'
import Header from '../components/Header'
import OnGoingEvents from '../components/OnGoingEvents'
import PastEvents from '../components/PastEvents'
import Gallery from '../components/Gallery'

const EventScreen = () => {
  return (
    <>
    <div className="bg-black">
      <Header />
      <div className='relative h-[75vh] mt-12'>
      <video src='Videos/b.mp4' autoPlay={true} loop muted className='absolute blum bg-black  top-0 left-0 w-full h-full object-cover'/>
      <div className=' backdrop-blur-md w-full h-full  py-24 flex justify-center absolute top-0 left-0' >
        <div className=' flex justify-center items-center ' >
           <div className=' w-full rounded-3xl bg-[#00000000] backdrop-blur-md text-center  flex flex-col ml-[0px] gap-7'>
           <h1 className='text-6xl text-center w-full font-scnd p-3 font-black text-white leading-tight'>Events Held by GFG DCE </h1>
           <p className=' p-2 text-white text-2xl font-scnd '>Scroll Down to have a Glimpse of all of them</p>
           
           </div>
           {/* <div className=' w-1/2 overflow-hidden rounded-3xl shadow-[#dcd8d8]  shadow-md'>
           <video className='w-full rounded-3xl' src='Videos/coder.mp4' autoPlay={true} loop muted alt='codeman' />
        </div> */}
        </div>
      </div>
    </div>
      <div className=" bg-black">
     <div>
        <OnGoingEvents />
      </div>
      <div>
        <PastEvents />
      </div>
      <div className="">
        <Gallery/>
      </div>
      </div>
      </div>
      <FooterSection /> 
    </>
  )
}

export default EventScreen
