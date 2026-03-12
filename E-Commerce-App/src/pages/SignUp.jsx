import { Link } from 'react-router-dom';
import Button from '../components/Button'
import { useState } from 'react';
import axios from 'axios';
import {toast} from "react-toastify";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const SignUp = () => {

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    const signupData = {
      name,
      email,
      password,
      confirmPassword
    };

    axios.post(`${API_BASE_URL}/auth/sign-up`, signupData, {
  withCredentials: true,
})
      .then((res) => {
        toast.success("Signup successful! Please login.");
        // setName('');
        // setEmail('');
        // setPassword('');
        // setConfirmPassword('');
      }
    ).catch((err) => {
        toast.error("Signup failed: " + err.response.data.message);
    });

  }

  return (
    <div className=' bg-gray-800 min-h-[80vh]'>
      
         <h1 className='text-3xl font-bold text-center pt-10 text-gray-200'>Create New Account</h1>
            <form className='w-[400px] mx-auto mt-10 flex flex-col items-center gap-5 text-gray-200' onSubmit={handleSignup}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='border px-3 py-2 rounded  w-[350px] sm:w-[500px]'/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='border px-3 py-2 rounded  w-[350px] sm:w-[500px]'/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='border px-3 py-2 rounded  w-[350px] sm:w-[500px]'/>
                <input type="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' className='border px-3 py-2 rounded  w-[350px] sm:w-[500px]'/> 
                <p>Already have an account? <Link to="/login" className="text-purple-600 hover:underline">Login</Link></p>   
                <Button name= "Sign Up" className="bg-purple-600 h-[50px] w-[120px] hover:bg-purple-700"/>
            </form>
    </div>

  )
}

export default SignUp;