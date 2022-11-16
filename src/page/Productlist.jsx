import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'
import Products from '../component/Products'
import Sidebar from '../component/Sidebar'

const Productlist = () => {
  return (
<>
<div className='h-screen overflow-y-scroll '>
<NavBar/>
<div>
<div className='grid grid-cols-4 gap-1'>
<Sidebar/>
{/* <div> */}
<Products />

{/* </div> */}

</div>
</div>

<Footer/>
</div>



</>
    )
}

export default Productlist