import { Link } from 'react-router-dom'

const UserNavBar = () => {
    return (
        <header className='flex justify-between items-center sticky top-[-10px] h-[70px] bg-gray-800 text-white px-4'>
            <div className="ml-6 font-bold text-2xl">FLONE</div>
            <nav>
                <ul className="flex gap-7 pr-9">
                    <Link to="/" className="cursor-pointer">Home</Link>
                    <Link to="/products" className="cursor-pointer">Products</Link>
                    <Link to="/about-us" className="cursor-pointer">About Us</Link>
                    <Link to="/contact-us" className="cursor-pointer">Contact Us</Link>
                    <Link to="/cart" className="cursor-pointer">Cart</Link>
                </ul>
            </nav>
        </header>
    )
}

export default UserNavBar
