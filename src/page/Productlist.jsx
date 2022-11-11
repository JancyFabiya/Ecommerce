import React from 'react'
import Products from '../component/Products'
import Sidebar from '../component/Sidebar'

const Productlist = () => {
  return (
<>
<div className='grid grid-cols-4 gap-1'>
<Sidebar/>
{/* <div> */}
<Products/>

{/* </div> */}
</div>


</>
    )
}

export default Productlist