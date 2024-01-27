import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import {useFormik} from 'formik';
import { signUpSchema } from '../schemas';
import {AiFillCheckCircle, AiFillExclamationCircle} from 'react-icons/ai';
import {useDispatch,useSelector} from 'react-redux';
import {registerUser} from '../actions/userAction';
import Loader from '../components/Loader';
import Error from '../components/Error';

const initialValues = {
  name : "",
  email : "",
  phone_number : "",
  password : "",
  confirm_password : "",
  agreeToTerms: false,
};

const SignupScreen = () => {

  const dispatch = useDispatch();

  const registerState = useSelector(state => state.registerUserReducer);
  const {error,loading} = registerState;

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues,
    validationSchema : signUpSchema,
    onSubmit : (values, action) => {
      dispatch(registerUser(values));
      action.resetForm();
    }
  });

  return (
    <>
      {loading && <Loader />}
      {error && <Error error="Something Went Wrong"/>}
      <div className="relative bg-black h-[100vh]">
      <div className="">
      <img src='https://images.unsplash.com/photo-1495291916458-c12f594151e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='not found'/>
    
      </div>
    
    <div className=" absolute inset-1">
    <div className=" font-scnd  ">
      <div className=' flex justify-end  p-8 md:py-8 md:px-12'>
        <NavLink to='/'>
           <AiOutlineClose className='text-3xl text-white font-bold cursor-pointer' />
        </NavLink>
      </div>
      <div className='md:flex flex-row justify-center bg-[#ff000000] backdrop-blur-sm md:px-20 mb-10'>
        <div className='md:w-1/2 p-5  md:px-20 md:flex flex-col justify-center'>
            <h1 className='text-5xl text-center text-white'>Sign Up</h1>
            <div className="h-full   w-full">
            <form className=' md:mt-0 mt-20' onSubmit={handleSubmit}>
              <div className='md:mt-14 mt-10 relative'>
              <input type='name' placeholder='Name' 
                     className='border-solid border-2 shadow-sm shadow-gray-400 border-black bg-[#3b3b3b7c] font-black outline-none text-gfgmaincolor rounded-lg focus:border-gfgmaincolor py-2 px-4 w-full'
                     autoComplete='off'
                     name='name'
                     value={values.name}
                     onChange={handleChange}
                     onBlur={handleBlur}
               />
               {values.name === "" ? null : (errors.name && touched.name ? (<AiFillExclamationCircle className='absolute fill-red-500 right-4 text-xl top-3'/>) : 
               (<AiFillCheckCircle className='absolute fill-green-500 right-4 text-xl top-3'/>))}
               { values.name === "" && errors.name && touched.name ? (<AiFillExclamationCircle className='absolute fill-red-500 right-4 text-xl top-3'/>) 
               : null}
               { errors.name && touched.name ? (<p className='text-red-500'>{errors.name}</p>) : null}
              </div>
              <div className='mt-5  relative'>
              <input type='email' placeholder='Email' 
                     className='border-solid border-2 shadow-sm shadow-gray-400 border-black bg-[#3b3b3b7c] font-black outline-none text-gfgmaincolor rounded-lg focus:border-gfgmaincolor py-2 px-4 w-full'
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
              <div className='mt-5  relative'>
              <input type='number' placeholder='Phone No.' 
                     className='border-solid border-2 shadow-sm shadow-gray-400 border-black bg-[#3b3b3b7c] font-black outline-none text-gfgmaincolor rounded-lg focus:border-gfgmaincolor py-2 px-4 w-full'
                     autoComplete='off'
                     name='phone_number'
                     value={values.phone_number}
                     onChange={handleChange}
                     onBlur={handleBlur}
               />
               {values.phone_number === "" ? null : (errors.phone_number && touched.phone_number ? (<AiFillExclamationCircle className='absolute fill-red-500 right-4 text-xl top-3'/>) : 
               (<AiFillCheckCircle className='absolute fill-green-500 right-4 text-xl top-3'/>))}
               { values.phone_number === "" && errors.phone_number && touched.phone_number ? (<AiFillExclamationCircle className='absolute fill-red-500 right-4 text-xl top-3'/>) 
               : null}
               { errors.phone_number && touched.phone_number ? (<p className='text-red-500'>{errors.phone_number}</p>) : null}
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
              <div className='mt-5 relative'>
              <input type='password' placeholder='Confirm Password' 
                     className='border-solid border-2 shadow-sm shadow-gray-400 border-black bg-[#3b3b3b7c] font-black outline-none text-gfgmaincolor rounded-lg focus:border-gfgmaincolor py-2 px-4 w-full'
                     autoComplete='off'
                     name='confirm_password'
                     value={values.confirm_password}
                     onChange={handleChange}
                     onBlur={handleBlur}
               />
               {values.confirm_password === "" ? null : (errors.confirm_password && touched.confirm_password ? (<AiFillExclamationCircle className='absolute fill-red-500 right-4 text-xl top-3'/>) : 
               (<AiFillCheckCircle className='absolute fill-green-500 right-4 text-xl top-3'/>))}
               { values.confirm_password === "" && errors.confirm_password && touched.confirm_password ? (<AiFillExclamationCircle className='absolute fill-red-500 right-4 text-xl top-3'/>) 
               : null}
               { errors.confirm_password && touched.confirm_password ? (<p className='text-red-500'>{errors.confirm_password}</p>) : null}
              </div>
              <div className='mt-5 flex justify-start items-center w-full'>
              <input type='checkbox'
                     className='border-solid border-2 rounded-3xl border-black'
                     name="agreeToTerms"
                     checked={values.agreeToTerms}
                     onChange={handleChange}
                     style={{accentColor:"#a88bff"}}
               />
              <span className='ml-2 text-blue-300 flex'>
                 &nbsp; <p className='text-gfgmaincolor hover:text-blue-200 transition ease-in-out font-bold'> I accept the Terms of Use & Privacy Policy</p> 
              </span>
              </div>
              {errors.agreeToTerms && touched.agreeToTerms && (
                <div className='text-red-500'>{errors.agreeToTerms}</div>
              )}
              <div className='md:mt-14 mt-8'>
              { values.agreeToTerms === false || (errors.agreeToTerms && touched.agreeToTerms) ? <button className='w-full bg-[blue] rounded-lg shadow-sm shadow-gray-400 font-black hover:bg-[#8888ed] hover:text-white py-3 text-center text-white'
                  type='submit'  >Sign up!</button> : <button className='w-full bg-[blue] rounded-lg shadow-sm shadow-gray-400 font-black hover:bg-gfgmaincolor hover:text-white py-3 text-center text-white'
                  type='submit'  >Sign up!</button>}
              </div>
            </form>
            <span className='text-blue-300 mt-5'>
             Already Have an Account ?  &nbsp;
             <NavLink to='/login' className='text-gfgmaincolor hover:text-blue-200 transition ease-in-out font-black'>Log in!</NavLink> 
            </span>
        </div>
        {/* <div className='md:w-1/2 flex justify-center items-center'>
           <img src='../images/toolsitems.png' alt='not valid'/>
        </div> */}
      </div></div>
    </div>
      </div></div>
      
      
    </>
  )
}

export default SignupScreen


