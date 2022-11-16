import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'

const Checkout = () => {
  return (
<>
<NavBar/>
<div className="container gap-6 grid grid-cols-12 items-start pb-16 pt-4">
<div className="col-span-8 border border-[#eab308] p-4 rounded">
<h3 className='text-lg font-medium capitalize mb-4'>Checkout</h3>
<div className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
<div>
    <label className='text-gray-600 mb-2 block'>First Name
    <span className="text-primary">*</span></label>
    <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0' />
</div>
<div>
    <label className='text-gray-600 mb-2 block'>Last Name
    <span className="text-primary">*</span></label>
    <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0' />
</div>

<div class="flex">
    <div class="flex items-center mr-4">
        <input id="yellow-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 "/>
        <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Home</label>
    </div>
    <div class="flex items-center mr-4">
        <input id="yellow-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 "/>
        <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Office</label>
    </div>
    <div class="flex items-center mr-4">
        <input id="yellow-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 "/>
        <label for="inline-checked-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others</label>
    </div>
   </div>

    </div>
    <div>
    <label className='text-gray-600 mb-2 block'>House/Office Name
    <span className="text-primary">*</span></label>
    <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0' />
</div>
<div>
    <label className='text-gray-600 mb-2 block'>Phone number
    <span className="text-primary">*</span></label>
    <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0' />
</div>
<div>
    <label className='text-gray-600 mb-2 block'>Email
    <span className="text-primary">*</span></label>
    <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0' />
</div>
<div>
    <label className='text-gray-600 mb-2 block'>Pincode
    <span className="text-primary">*</span></label>
    <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0' />
</div>
<div>
    <label className='text-gray-600 mb-2 block'>Area
    <span className="text-primary">*</span></label>
    <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0' />
</div>
<div>
    <label className='text-gray-600 mb-2 block'>City
    <span className="text-primary">*</span></label>
    <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0' />
</div>
<div>
    <label className='text-gray-600 mb-2 block'>State_Region
    <span className="text-primary">*</span></label>
    <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0' />
</div>
<div>
    <label className='text-gray-600 mb-2 block'>Country
    <span className="text-primary">*</span></label>
    <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0' />
</div>
</div>
</div>
<div className="col-span-4 border border-gray-200 p-4 rounded ">
    <h4 className='text-gray-800 text-lg mb-4 font-medium uppercase'>Order Summary</h4>
    <div className="space-y-2">
        <div className="flex justify-between">
            <div>
            <h5 className='text-gray-800 font-medium'>Product Name</h5>
            <p className='text-sm text-gray-800'>Ouantity: 2</p>
            </div>
            <p className="text-gray-800">
                x2
            </p>
            <p className="text-gray-800 font-medium">₹200</p>
        </div>
    </div>
    <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
        <p>Subtotal</p>
        <p>₹200</p>
    </div>
    <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
        <p>Shipping</p>
        <p>Free</p>
    </div>
    <div className="flex justify-between border-gray-200 text-gray-800 font-medium py-3 uppercase">
        <p className='font-semibold'>Total</p>
        <p>₹200</p>
    </div>
    {/* <div className="flex items-center mb-4 mt-2">

    </div> */}
    <button className='w-full block button-primary'>Place Order</button>
</div>
</div>
<Footer/>
</>
  )
}

export default Checkout
