import React from 'react'
import NavBar from '../component/Navbar'
import Products from '../component/Products'
import Sidebar from '../component/Sidebar'

const Productlist = () => {
  return (
<>

<NavBar/>
<div className='grid grid-cols-4 gap-1'>
<Sidebar/>
<Products/>

</div>


</>
    )
}

export default Productlist