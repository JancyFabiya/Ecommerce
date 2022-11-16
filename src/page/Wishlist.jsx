import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'
import Propic from '../image/logo.png'
import img from '../image/decor7.jpg'
import {RiDeleteBin6Fill} from 'react-icons/ri'

const Wishlist = () => {
  return (
<>
<NavBar/>
<div className='container grid grid-cols-12 items-start gap-6 pb-16 pt-14'>
    <div className="col-span-3">
        <div className="px-4 py-3 shadow flex items-start gap-6 pt-4 pb-16">
            <div className="col-span-3">
                <div className="px-4 py-3 shadow flex items-center gap-4">
                    <div className="flex-shrink-0">
                        <img src={Propic} alt="" className='rounded-full w-14 h-14 border border-gray-200 p-1 object-cover'/>
                    </div>
                    <div className="flex-grow">
                        <p className="text-gray-600">Hello,</p>
                        <h4 className="text-gray-800 font-medium">
                            User Name
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* wishlist */}
<div className="col-span-9 space-y-4 ">
    {/* single wishlist */}
    <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
        <div className="w-28 flex-shrink-0">
            <img src={img} alt="" className='w-full' />
        </div>
        <div className="w-1/3">
            <h2 className='text-gray-800 text-xl font-midum uppercase'>Product Name</h2>
            <p className='text-gray-500 text-sm'>Availablity:<span className='text-green-600'>In Stock</span></p>
        </div>
        <div className="text-primary text-lg font-semibold">₹320.00</div>
        <button className='button-primary uppercase'>Add to Cart</button>
        <div className="text-gray-600 cursor-pointer">
            {/* <i className="fas fa-trash"></i> */}
            <RiDeleteBin6Fill/>
        </div>
    </div>
    {/* single wishlist end */}
    <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
        <div className="w-28 flex-shrink-0">
            <img src={img} alt="" className='w-full' />
        </div>
        <div className="w-1/3">
            <h2 className='text-gray-800 text-xl font-midum uppercase'>Product Name</h2>
            <p className='text-gray-500 text-sm'>Availablity:<span className='text-red-600'>Out of Stock</span></p>
        </div>
        <div className="text-primary text-lg font-semibold">₹320.00</div>
        <button className='button-primary cursor-not-allowed uppercase'>Add to Cart</button>
        <div className="text-gray-600 cursor-pointer">
            {/* <i className="fas fa-trash"></i> */}
            <RiDeleteBin6Fill/>
        </div>
    </div>
</div>

</div>
<div className='pt-16 mt-16'></div>
<Footer/>
</>
  )
}

export default Wishlist
