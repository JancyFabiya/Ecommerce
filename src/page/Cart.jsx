import React from "react";
import Counter from "../component/Counter";
import Footer from "../component/Footer";
import NavBar from "../component/Navbar";
import img from "../image/decor7.jpg";
import {Link} from "react-router-dom";

const Cart = () => {
  return (
    <>
      <NavBar />
      <div className="p-9">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4">
            <Link to='/'>
            <button className="button-primary bg-white text-[#eab308] border-2 border-[#eab308] hover:bg-white">
            Continue Shopping
          </button>
            </Link>
          
          <div className="flex unserline text-lg hover:cursor-pointer">
            <p>Items in your Cart : 3</p>
            <p>Wishlist Item: 0</p>
          </div>
          <Link to ="/checkout">
          <button className="button-primary">checkout</button>
          </Link>
        </div>

        {/* central div */}

        <div className="flex mt-7">
          <div className="flex flex-col flex-1 ">
            {/* list of products div */}
            <div className="flex w-[100%] h-auto items-center ">
              <div className="product flex self-start pl-5">
                <img
                  src={img}
                  alt="product_img"
                  className="w-[9rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p className="mr-2">
                    <b>ID: </b>12345678
                  </p>
                  <p className="mr-2">
                    <b>PRoduct: </b>dfghj
                  </p>
                  <p className="mr-2">
                    <b>Qty: </b>1
                  </p>
                  {/* <p className='mr-2'>
                        <b>Price: </b>₹ 100
                    </p> */}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>₹ 100</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
            {/* second product */}
            <div className="flex w-[100%] h-auto items-center ">
              <div className="product flex self-start pl-5">
                <img
                  src={img}
                  alt="product_img"
                  className="w-[9rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p className="mr-2">
                    <b>ID: </b>12345678
                  </p>
                  <p className="mr-2">
                    <b>PRoduct: </b>dfghj
                  </p>
                  <p className="mr-2">
                    <b>Qty: </b>1
                  </p>
                  {/* <p className='mr-2'>
                        <b>Price: </b>₹ 100
                    </p> */}
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>₹ 100</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
          </div>
          <div className="p-5 flex-[0.4] w-auto h-[40vh] border-2 border-[#eab308] rounded-md shadow-lg flex flex-col items-center">
            <h1 className="text-[2rem]">Summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Subtotal</p>
              <p>₹ 140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping</p>
              <p>₹ 140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping discount</p>
            {/* </div> */}
            <p>₹ 140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] text-3xl font-bold">
            <p>Total</p>
            <p>₹ 140</p>
          </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
