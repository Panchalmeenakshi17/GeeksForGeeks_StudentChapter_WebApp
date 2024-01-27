import React from 'react'

const HeroSection = () => {

  const ScrollDown = () => {
    window.scrollTo({top:1500,behavior:"smooth"});
  }
    
  return (
    <div className='relative h-[75vh] mt-12'>
      <video src='Videos/bb.mp4' autoPlay={true} loop muted className='absolute blum bg-black  top-0 left-0 w-full h-full object-cover'/>
      <div className='  py-24 flex justify-center absolute top-0 left-0' >
        <div className=' flex justify-center items-center ' >
           <div className=' w-full rounded-3xl bg-[#00000000] backdrop-blur-md text-center  flex flex-col ml-[0px] gap-7'>
           <h1 className='md:text-6xl p-3 text-3xl font-scnd md:p-3 font-black text-white leading-tight'><span className=' font-'>GFG</span> Student Chapter Dronacharya College of Engineering </h1>
           <p className=' p-2 text-white '>A Community of geeks for the geeks by the geeks.</p>
           <button className=' justify-center flex bg-gfgmaincolor md:ml-[570px] w-full md:w-1/4 p-3 mb-4 shadow-black shadow-sm rounded-full transition ease-in-out delay-20 
              hover:-translate-y-1 hover:scale-110  duration-300 text-white' onClick={ScrollDown}>MEET OUR TEAM</button>
           </div>
           {/* <div className=' w-1/2 overflow-hidden rounded-3xl shadow-[#dcd8d8]  shadow-md'>
           <video className='w-full rounded-3xl' src='Videos/coder.mp4' autoPlay={true} loop muted alt='codeman' />
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
