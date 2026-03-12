import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../store/AuthContext';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const AdminSideBar = () => {
    const navigate = useNavigate();
    const { handleLogout,user } = useContext(AuthContext);

      const LogoutHandler = async () => {
           await handleLogout();
             navigate("/");
    }


  return (
    <div className='h-[900px] w-[170px] bg-gray-700  absolute top-[70px] left-0 z-10'>
        
     <nav className=' pl-7 flex flex-col  items-center gap-3'>
                <ul className="flex flex-col gap-4 pr-9">
                    <li className="sm:hidden block relative  px-1">
                        <NavLink
                            to="/admin/dashboard"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            DashBoard
                        </NavLink>
                    </li>
                    <li className="sm:hidden block relative  px-1">
                        <NavLink
                            to="/admin/add-product"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Add Product
                        </NavLink>
                    </li>

                    <li className="sm:hidden block relative  px-1">
                        <NavLink
                            to="/admin/manage-products"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Manage Products
                        </NavLink>
                    </li>


                    <li className="sm:hidden block relative  px-1">
                        <NavLink
                            to="/admin/orders"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Orders
                        </NavLink>
                    </li>
                      <li className="sm:hidden block relative  px-1">
                        <NavLink
                            to="/admin/users"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Users
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

export default AdminSideBar;