import { useContext ,useState} from 'react'
import Button from './Button'
import { useNavigate, NavLink } from 'react-router-dom'
import { AuthContext } from '../store/AuthContext'
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiAlignJustify } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import UserSideBar from './UserSideBar';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const UserNavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { handleLogout,user } = useContext(AuthContext);
    const navigate = useNavigate();

    const LogoutHandler = async () => {
           await handleLogout();
             navigate("/");
    }

   

    return (
        <header className='flex justify-between items-center sticky z-50 top-[-10px] h-[70px] bg-black text-gray-100 px-4'>
            <div className='flex justify-center items-center'>
                <FiAlignJustify onClick={() => setSidebarOpen(!sidebarOpen)} className="font-bold text-2xl sm:hidden" />
                <h1 className="ml-6 font-bold text-2xl">FLONE</h1>
            </div>

            {/* Sidebar */}
            {sidebarOpen && <UserSideBar/>}

            <nav className='flex items-center gap-3'>
                <ul className="flex gap-7 pr-9">
                    <li className="hidden sm:block relative  px-1">
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
                    <li className="hidden sm:block relative  px-1">
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

                    <li className="hidden sm:block relative  px-1">
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


                    <li className="hidden sm:block relative  px-1">
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
                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div>

            </div>
            {user ? (
                <div className='flex gap-3'>
                    <Button name="Logout" className={"hidden sm:block"} onClick={LogoutHandler} />
                    <Button name="Admin Dashboard" onClick={() => {
                        navigate("/admin/dashboard")
                    }} />
                </div>
            ) :

                <div className='flex gap-3'>
                    <Button name="Login" onClick={() => {
                        navigate("/login")
                    }} />
                    <div className='flex items-center'>
                        <Button className={"sm:hidden h-full "} name={<FaShoppingCart size={25}/>} onClick={() => {
                            navigate("/cart")
                        }} />
                    </div>
                   
                    <Button className={"hidden sm:block"} name="Sign In" onClick={() => {
                        navigate("/sign-up")
                    }} />
                </div>

            }

        </header>
    )
}

export default UserNavBar
