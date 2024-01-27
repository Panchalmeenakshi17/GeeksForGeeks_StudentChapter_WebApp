import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import {useFormik} from 'formik';
import { loginSchema } from '../schemas';
import {AiFillCheckCircle, AiFillExclamationCircle} from 'react-icons/ai';
import {useDispatch,useSelector} from 'react-redux';
import {loginUser} from '../actions/userAction';
import Loader from '../components/Loader';
import Error from '../components/Error';


const initialValues = {
  email : "",
  password : "",
  agreeToTerms: false,
};

const LoginScreen = () => {

  const dispatch = useDispatch();

  const loginState = useSelector(state => state.loginUserReducer);
  const {error,loading} = loginState;

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues,
    validationSchema : loginSchema,
    onSubmit : (values, action) => {
      dispatch(loginUser(values));
      action.resetForm();
    }
  });

  return (
    <>
      {loading && <Loader />}
      {error && <Error error="Something Went Wrong"/>}
      <div className="relative bg-[#0c0200] h-[100vh] ">
        <div className="">
          <img src='https://images.unsplash.com/photo-1594075957872-c68bf4453548?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className=' ' alt='not found'/>
        </div>
        <div className=" absolute inset-1">
        <div className=" transition ease-in-out font-scnd">
      <div className='flex justify-end py-8 px-12'>
        <NavLink to='/'>
           <AiOutlineClose className='text-3xl text-white font-bold cursor-pointer' />
        </NavLink>
      </div>
      <div className=' flex justify-center w-full md:px-20 mt-4'>
        <div className='md:w-1/2  backdrop-blur-2xl  p-4 md:p-10 rounded-2xl md:rounded-3xl  md:px-20 w-full flex flex-col justify-center'>
            <h1 className='md:text-6xl text-4xl  text-center  text-[white]'>Welcome Back</h1>
            <form onSubmit={handleSubmit}>
              <div className='md:mt-14 mt-10 relative'>
              <input type='email' placeholder='Email' 
                     className='border-solid border-2  shadow-sm shadow-gray-400 border-black bg-[#3b3b3b7c] font-black outline-none text-gfgmaincolor rounded-lg focus:border-gfgmaincolor py-2 px-4 w-full'
                     autoComplete='off'
                     name='email'
                     value={values.email}
                     onChange={handleChange}
                     onBlur={handleBlur}
               />
               {values.email === "" ? null : (errors.email && touched.email ? (<AiFillExclamationCircle className='absolute fill-red-500 right-4 text-xl top-3'/>) : 
               (<AiFillCheckCircle className='absolute fill-green-500 right-4 text-xl top-3'/>))}
               { values.email === "" && errors.email && touched.email ? (<AiFillExclamationCircle className='absolute fill-red-500 right-4 text-xl top-3'/>) 
               : null}
               { errors.email && touched.email ? (<p className='text-red-500'>{errors.email}</p>) : null}
              </div>
                
              <div className='mt-5 relative'>
              <input type='password' placeholder='Password' 
                     className='border-solid border-2 shadow-sm shadow-gray-400 border-black bg-[#3b3b3b7c] font-black outline-none text-gfgmaincolor rounded-lg focus:border-gfgmaincolor py-2 px-4 w-full'
                     autoComplete='off'
                     name='password'
                     value={values.password}
                     onChange={handleChange}
                     onBlur={handleBlur}
               />
               {values.password === "" ? null : (errors.password && touched.password ? (<AiFillExclamationCircle className='absolute fill-red-500 right-4 text-xl top-3'/>) : 
               (<AiFillCheckCircle className='absolute fill-green-500 right-4 text-xl top-3'/>))}
               { values.password === "" && errors.password && touched.password ? (<AiFillExclamationCircle className='absolute fill-red-500 right-4 text-xl top-3'/>) 
               : null}
               { errors.password && touched.password ? (<p className='text-red-500'>{errors.password}</p>) : null}
              </div>
              <div className='mt-5 flex justify-start items-center w-full'>
              <input type='checkbox' 
                     className='border-solid border-2 rounded-3xl border-gfgmaincolor'
                     name="agreeToTerms"
                     checked={values.agreeToTerms}
                     onChange={handleChange}
                     style={{accentColor:"#30558d"}}
               />
              <span className='ml-2 text-black flex'>
                 <p className='text-[white] hover:text-blue-200 transition ease-in-out font-bold'> I accept the Terms of Use & Privacy Policy</p>
              </span>
              </div>
              {errors.agreeToTerms && touched.agreeToTerms && (
                <div className='text-red-500'>{errors.agreeToTerms}</div>
              )}
              <div className='md:mt-14 mt-8'>
              { values.agreeToTerms === false || (errors.agreeToTerms && touched.agreeToTerms) ? <button className='w-full bg-[blue] rounded-lg shadow-sm shadow-gray-400 font-black hover:bg-[#8e8eff] transition ease-in-out hover:text-white py-3 text-center text-white'
                  type='submit'  >Log in!</button> : <button className='w-full bg-[blue] rounded-lg  transition ease-in-out shadow-sm shadow-gray-400 font-black hover:bg-[#8e8eff] hover:text-white py-3 text-center text-white'
                  type='submit'  >Log in!</button>}
              </div>
            </form>
            <span className='text-blue-300 mt-5'>
             Don't Have an Account ?  &nbsp;
             <NavLink to='/signup' className='text-gfgmaincolor hover:text-blue-200 transition ease-in-out font-black'>Sign up!</NavLink> 
            </span>
        </div>
        {/* <div className=' md:w-1/2 md:flex justify-center items-center'>
           <img src='../images/toolsitems.png' alt='not valid'/>
        </div>
         */}
         </div>
      </div>
        </div>
      </div>
      
    </>
  )
}

export default LoginScreen
