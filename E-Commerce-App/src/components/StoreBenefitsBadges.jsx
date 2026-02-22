import { FaShippingFast } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";


const StoreBenefitsBadges = () => {
  return (
    <div className='flex justify-center gap-1 items-center py-12 text-white  '>
      <div className=' flex  w-[250px] items-center text-white  '>
        <div><FaShippingFast className='text-3xl'/></div>
        <div>
            <h1 className='font-semibold'>Free Shipping</h1>
            <p className='text-sm'>On all orders over $50</p>
        </div>
      </div>

        <div className=' flex gap-3 w-[250px] items-center  '>
        <div><FaShippingFast className='text-3xl'/></div>
        <div>
            <h1 className='font-semibold'>Support 24 / 7</h1>
            <p className='text-sm'>On all orders</p>
        </div>
      </div>

        <div className=' flex gap-3 w-[250px] items-center  '>
        <div><FaShippingFast className='text-3xl'/></div>
        <div>
            <h1 className='font-semibold'>Money Return</h1>
            <p className='text-sm'>On all orders </p>
        </div>
      </div>

        <div className=' flex gap-3 w-[250px] items-center '>
        <div><MdDiscount className='text-3xl'/></div>
        <div>
            <h1 className='font-semibold'>Order Discounts</h1>
            <p className='text-sm'>On selected Products </p>
        </div>
      </div>
    </div>
  )
}

export default StoreBenefitsBadges;