import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { SiGeeksforgeeks } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import {FaUser} from 'react-icons/fa';
import {useDispatch,useSelector} from 'react-redux';
import {logoutUser} from '../actions/userAction';

const Header = () => {

  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState;

  return (
    <>
      <div className="flex justify-between items-center pt-4">
        <div className="flex  justify-between w-9/12">
          <div className="bg-gfgmaincolor md:p-0 p-2 flex w-full justify-between rounded-r-full items-center shadow-lg shadow-[#1d2338]">
            <div className="flex md:gap-14 gap-3 text-2xl  items-center md:text-4xl md:ml-24 ">
              <BsFacebook className="fill-white shadow-lg shadow-black hover:fill-[#0022ff] hover:rounded-full hover:bg-white md:rounded-full transition ease-in-out hover:-translate-y-1 hover:shadow-sm hover:shadow-white " />
              <BsInstagram className="fill-white shadow-lg shadow-black hover:fill-[#d62976] hover:rounded-xl hover:bg-white md:rounded-xl transition ease-in-out hover:-translate-y-1 hover:shadow-sm hover:shadow-white " />
              <FaLinkedinIn className="fill-white shadow-lg shadow-black hover:fill-[#0a66c2] hover:rounded-sm hover:bg-white md:rounded-sm transition ease-in-out hover:-translate-y-1 hover:shadow-sm hover:shadow-white " />
              <BsGithub className="fill-white shadow-lg shadow-black hover:fill-black hover:rounded-full hover:bg-white md:rounded-full transition ease-in-out hover:-translate-y-1 hover:shadow-sm hover:shadow-white" />
            </div>
            <SiGeeksforgeeks className="fill-white  text-xl md:text-7xl md:mr-10" />
          </div>
        </div>


        
        <div>
         
          <div className="flex relative font-scnd">
    {!menu && (
      <BiMenuAltRight className="md:text-7xl text-4xl  fill-gfgmaincolor hover:fill-[blue] cursor-pointer" onClick={() => setMenu(true)} />
    )}
    {menu && ( 
          <ul
            className="z-10 bg-black/70 backdrop-blur-md fixed -top-0 -right-2 p-3 md:w-[20vw] w-[60vw] h-screen shadow-md list-none
            flex flex-col justify-start items-center rounded-md text-white animate-slide-in"
          >
            <li className="text-3xl w-full my-4"><AiOutlineClose className='stroke-2 cursor-pointer' onClick={() => setMenu(false)} /></li>

            {currentUser ? (
              <>
                 <div className="flex flex-col items-center my-4 justify-center gap-6">
                    <div className="bg-white rounded-full border-2 border-solid border-gfgmaincolor shadow-md shadow-white/30 overflow-hidden scale-150">
                    <FaUser className="fill-gfgmaincolor text-3xl"/>
                    </div>
                    <h1 className="md:text-xl text-white">{currentUser.name}</h1>
                 </div>
              </>
            ) : null}
            
            <NavLink to='/' end
               className={({ isActive }) => isActive ? 'text-[#8e90e9] font-black' : null }
            >
            <li className='my-4 text-2xl mx-4 font-semibold cursor-pointer hover:text-[#8e90e9]'>Home</li>
            </NavLink>
            <NavLink to='/events' end
               className={({ isActive }) => isActive ? 'text-[#8e90e9] font-black' : null }
            >
            <li className='my-4 text-2xl mx-4 font-semibold cursor-pointer hover:text-[#8e90e9]'>Events</li>
            </NavLink>
            
            {currentUser ? (
              <>

              {/* <NavLink to='/account' end
               className={({ isActive }) => isActive ? 'text-[#8889f7] font-black' : null }>
            <li className='my-4 text-2xl mx-4 font-semibold cursor-pointer hover:text-[#8e90e9]'>Account</li>
            </NavLink> */}
        
            <li className='my-4 text-2xl mx-4 font-semibold cursor-pointer hover:text-[#8e90e9]'
            onClick={() => {dispatch(logoutUser())}}>Log out</li>
            
              </>
            ) : (
              <NavLink to='/login' end
               className={({ isActive }) => isActive ? 'text-[#8e90e9] font-black' : null }
            >
            <li className='my-4 text-2xl mx-4 font-semibold cursor-pointer hover:text-[#8e90e9]'>Log in</li>
            </NavLink>
            )}
          </ul>
        )}
    </div> 

        </div>
      </div>
    </>
  );
};

export default Header;
