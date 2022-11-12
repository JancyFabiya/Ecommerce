import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import img from '../image/decor7.jpg'
import Counter from './Counter'

const Product = () => {
  return (
<>
<div className='flex   ' >
    <div className='flex flex-1 items-center justify-center'>
        <img src={img} alt="" className='w-[80%] h-[60%] rounded-lg shadow-lg hover:scale-[1.1] ease-in-duration-300 mb-12 mr-12'/>
    </div>
    <div
    className='flex-[1.3] flex  items-start justify-items-start flex-col mt-10 w-12'>
        <h1 className='text-[40px] overflow-ellipsis overflow-hidden whitespace-nowrap'>Product Name</h1>
        {/* <div className='w-[50%]'> */}
        <p className='pr-[4rem] text-justify mt-4 overflow-hidden'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p className='text-gray-800 mt-7 text-3xl'>Price: <b>$70</b> <del>$80</del></p>
        {/* </div> */}
    <div className="mt-7 text-2xl">
        {/* Size */}
        <select className="ml-5 border-2" name="" id="">
            <option selected disabled>Select</option>
            <option>1 kg - $ 20</option>
            <option>1 kg - $ 20</option>
            <option>1 kg - $ 20</option>

        </select>
    </div>
    <div className='mt-6'>
        <Counter/>
    </div>
    <div className='m-10'>
    <button className="button-primary flex gap-1 flex flex-row">
                      <AiOutlineShoppingCart className="mt-1" />
                      Add to cart
                    </button>
    </div>
   
    </div>

</div>
</> 
 )
}

export default Product