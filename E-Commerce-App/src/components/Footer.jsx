
const Footer = () => {
  return (
    <div>
        <footer className='flex justify-center items-center h-[100px] bg-gray-800 text-white px-4'>
            <div>Copyright © {new Date().getFullYear()} FLONE. All rights reserved.</div>
        </footer>
    </div>
  )
}

export default Footer;