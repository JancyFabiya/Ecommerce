import React from 'react'

const Counter = () => {
  return (
<div className="flex items-center justify-center text-2xl">
    Quantity
    <div className="ml-5 shadow-md flex">
        <div className='bg-gray-500 border-gray-300 text-gray-900 w-8 flex items-center justify-center cursor-pointer rounded-l-md'>
            -
        </div>
        <div className='w-8 flex item-center justify-center border-[1px] border-gray-300'>
            1
        </div>
        <div className='bg-gray-500 border-gray-300 text-gray-900 w-8 flex items-center justify-center cursor-pointer rounded-r-md'>
            +
        </div>
    </div>
</div>  )
}

export default Counter