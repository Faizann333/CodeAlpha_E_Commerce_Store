import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../store/AuthContext';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const UserSideBar = () => {
    const navigate = useNavigate();
    const { handleLogout,user } = useContext(AuthContext);

      const LogoutHandler = async () => {
           await handleLogout();
             navigate("/");
    }


  return (
    <div className='h-[900px] w-[150px] bg-gray-700  absolute top-[70px] left-0 z-10'>
        
     <nav className='flex flex-col items-center gap-3'>
                <ul className="flex flex-col gap-4 pr-9">
                    <li className="sm:hidden block relative  px-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="sm:hidden block relative  px-1">
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Products
                        </NavLink>
                    </li>

                    <li className="sm:hidden block relative  px-1">
                        <NavLink
                            to="/about-us"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            About Us
                        </NavLink>
                    </li>


                    <li className="sm:hidden block relative  px-1">
                        <NavLink
                            to="/contact-us"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    {user && (
                        <div>
                             <Button name="Logout" className={" sm:block"} onClick={LogoutHandler} />
                        </div>
                    )}
                </ul>
            </nav>
    </div>
  )
}

export default UserSideBar;