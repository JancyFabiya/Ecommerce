import React from "react";
import { FaThList } from "react-icons/fa";
import img from "../img/logo.png";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Products = () => {
  return (
    <>
      <div className="col-span-3">
        {/* Product Grid */}
        {/* <div className="grid grid-cols-4 gap-6"> */}
        <div className="h-screen flex items-center  gap-10">
          {/* single product */}
          <div className="card">
            <div className="bg-white shadow rounded overflow-hidden group">
              {/* product image */}
              <div className="relative">
                <img src={img} alt="" className="w-full" />
                <div className="absolute inset-0  flex items-center justify-end  ">
                {/* <div className="flex items-center "> */}
                  {/* <span className="badge rotate-90">New</span> */}
                  <div className="mb-14">
                  <span class="w-8 p-0.5  bg-black "></span>

                  </div>

                  <span className="badge rotate-90">Trending</span>
                {/* </div> */}
                  {/* <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <AiOutlineShoppingCart />
                  </a>
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <AiOutlineHeart />
                  </a> */}
                </div>
              </div>

              {/* After image */}
              <div className="p-5 flex-col gap-3">

                {/* badge */}
                {/* <div className="flex items-center gap-2">
                  <span className="badge rotate-90">New</span>
                  <span className="badge rotate-90">Trending</span>
                </div> */}
                {/* product details */}
                <div className="px-4 py-3 ">
                  <span className="text-gray-400 uppercase text-sm">Brand</span>
                  {/* <h2 className="product-title">product name</h2> */}
                  <p className="product-title text-lg font-bold block truncate capitalize">
                    product name
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 ml-2">$199</p>
                    </del>
                    <span className="discount-percent ml-2">Save 20%</span>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>

          <div className="card">
            <div className="bg-white shadow rounded overflow-hidden group">
              {/* product image */}
              <div className="relative">
                <img src={img} alt="" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    {/* <li className='fas fa-search'></li> */}
                    <AiOutlineShoppingCart />
                  </a>
                  <a
                    href=""
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    {/* <li className='far fa-heart'></li> */}
                    <AiOutlineHeart />
                  </a>
                </div>
              </div>

              {/* After image */}
              <div className="p-5 flex-col gap-3">
                {/* badge */}
                <div className="flex items-center gap-2">
                  <span className="badge">New</span>
                  <span className="badge">Trending</span>
                </div>
                {/* product details */}
                <div className="px-4 py-3 ">
                  <span className="text-gray-400 uppercase text-sm">Brand</span>
                  {/* <h2 className="product-title">product name</h2> */}
                  <p className="product-title text-lg font-bold block truncate capitalize">
                    product name
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 ml-2">$199</p>
                    </del>
                    <span className="discount-percent ml-2">Save 20%</span>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* <select  className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"></select> */}
      </div>
    </>
  );
};

export default Products;
