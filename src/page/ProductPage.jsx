import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'
import Product from '../component/Product'
import Sidebar from '../component/Sidebar'

const ProductPage = () => {
  return (
    <>
    <div className="h-screen overflow-y-hidden">
    {/* <div className='grid grid-flow-row grid-row-3'> */}
<NavBar/>
{/* <div> */}
{/* <div className='grid grid-flow-col auto-cols-auto '> */}
{/* <Sidebar/> */}
<Product/>
{/* </div> */}
{/* </div> */}

{/* <div className='grid grid-col-1'> */}
<Footer/>
</div>
{/* </div> */}
{/* </div> */}

</>  

)
}

export default ProductPage