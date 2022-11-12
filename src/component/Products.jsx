import React, { useState } from "react";
import { FaThList } from "react-icons/fa";
import img from "../image/decor7.jpg";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Products = () => {
  // const [tag,setTag] = useState(false)
  const trending = true;
  return (
    <>
      <div className="col-span-3 mt-14 overflow-hidden mb-14">
        {/* <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 "> */}
        {/* Product Grid */}
        {/* <div className="grid grid-cols-4 gap-6"> */}
        <div className=" grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-12">
          {/* single product */}

          <div className="card">
            <div className="bg-white shadow rounded overflow-hidden group">
              {/* product image */}
              <div className="relative">

                <div>

                <img src={img} alt="" className="w-full max-h-32	" />

                </div>

                <div className="absolute inset-0  grid  items-center justify-end  ">
                  {/* <div className="flex items-center "> */}
                  {/* <span className="badge rotate-90">New</span> */}
                  <div className="mb-1 ml-14 h-6">
                    <span className=" pl-0.5   bg-black "></span>
                  </div>
                  {trending ? (
                    <span className="badge rotate-90 mb-12 ml-8">New</span>
                  ) : (
                    <span className="badge rotate-90 mb-12 ml-5">Trending</span>
                  )}
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
          <Link to ={"/product"}>

                  <p className="product-title text-lg font-bold block truncate capitalize">
                    product name
                  </p>
                  </Link>
                  <select className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
                    <option>Select Option</option>
                    <option>Select</option>
                  </select>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 ml-2">$199</p>
                    </del>
                    <span className="discount-percent ml-2">Save 20%</span>
                  </div>

                  {/* add to cart button */}

                  <div className="flex flex-row justify-between">
                    {/* <label className="border-gray-400 text-gray-400 text-sm  rounded-md bg-gray-200"htmlFor="">qty</label> */}

                    {/* <input className="w-12 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="qty" type="text" /> */}
                    <input
                      type="number"
                      id="visitors"
                      className=" w-14 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex flex-row"
                      placeholder="Qt"
                      required
                    />

                    <button className="button-primary flex gap-1 flex flex-row">
                      <AiOutlineShoppingCart className="mt-1" />
                      Add to cart
                    </button>
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
                <img src={img} alt="" className="w-full max-h-32	" />
                <div className="absolute inset-0  grid  items-center justify-end  ">
                  {/* <div className="flex items-center "> */}
                  {/* <span className="badge rotate-90">New</span> */}
                  <div className="mb-1 ml-14 h-6">
                    <span className=" pl-0.5   bg-black "></span>
                  </div>
                  {trending ? (
                    <span className="badge rotate-90 mb-12 ml-8">New</span>
                  ) : (
                    <span className="badge rotate-90 mb-12 ml-5">Trending</span>
                  )}
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
                  <select className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
                    <option>Select Option</option>
                    <option>Select</option>
                  </select>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 ml-2">$199</p>
                    </del>
                    <span className="discount-percent ml-2">Save 20%</span>
                  </div>

                  {/* add to cart button */}

                  <div className="flex flex-row justify-between">
                    {/* <label className="border-gray-400 text-gray-400 text-sm  rounded-md bg-gray-200"htmlFor="">qty</label> */}

                    {/* <input className="w-12 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="qty" type="text" /> */}
                    <input
                      type="number"
                      id="visitors"
                      className=" w-14 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex flex-row"
                      placeholder="qty"
                      required
                    />

                    <button className="button-primary flex gap-1 flex flex-row">
                      <AiOutlineShoppingCart className="mt-1" />
                      Add to cart
                    </button>
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
                <img src={img} alt="" className="w-full max-h-32	" />
                <div className="absolute inset-0  grid  items-center justify-end  ">
                  {/* <div className="flex items-center "> */}
                  {/* <span className="badge rotate-90">New</span> */}
                  <div className="mb-1 ml-14 h-6">
                    <span className=" pl-0.5   bg-black "></span>
                  </div>
                  {trending ? (
                    <span className="badge rotate-90 mb-12 ml-8">New</span>
                  ) : (
                    <span className="badge rotate-90 mb-12 ml-5">Trending</span>
                  )}
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
                  <select className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
                    <option>Select Option</option>
                    <option>Select</option>
                  </select>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 ml-2">$199</p>
                    </del>
                    <span className="discount-percent ml-2">Save 20%</span>
                  </div>

                  {/* add to cart button */}

                  <div className="flex flex-row justify-between">
                    {/* <label className="border-gray-400 text-gray-400 text-sm  rounded-md bg-gray-200"htmlFor="">qty</label> */}

                    {/* <input className="w-12 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="qty" type="text" /> */}
                    <input
                      type="number"
                      id="visitors"
                      className=" w-14 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex flex-row"
                      placeholder="qty"
                      required
                    />

                    <button className="button-primary flex gap-1 flex flex-row">
                      <AiOutlineShoppingCart className="mt-1" />
                      Add to cart
                    </button>
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
                <img src={img} alt="" className="w-full max-h-32	" />
                <div className="absolute inset-0  grid  items-center justify-end  ">
                  {/* <div className="flex items-center "> */}
                  {/* <span className="badge rotate-90">New</span> */}
                  <div className="mb-1 ml-14 h-6">
                    <span className=" pl-0.5   bg-black "></span>
                  </div>
                  {trending ? (
                    <span className="badge rotate-90 mb-12 ml-8">New</span>
                  ) : (
                    <span className="badge rotate-90 mb-12 ml-5">Trending</span>
                  )}
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
                  <select className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
                    <option>Select Option</option>
                    <option>Select</option>
                  </select>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 ml-2">$199</p>
                    </del>
                    <span className="discount-percent ml-2">Save 20%</span>
                  </div>

                  {/* add to cart button */}

                  <div className="flex flex-row justify-between">
                    {/* <label className="border-gray-400 text-gray-400 text-sm  rounded-md bg-gray-200"htmlFor="">qty</label> */}

                    {/* <input className="w-12 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="qty" type="text" /> */}
                    <input
                      type="number"
                      id="visitors"
                      className=" w-14 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex flex-row"
                      placeholder="qty"
                      required
                    />

                    <button className="button-primary flex gap-1 flex flex-row">
                      <AiOutlineShoppingCart className="mt-1" />
                      Add to cart
                    </button>
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
                <img src={img} alt="" className="w-full max-h-32	" />
                <div className="absolute inset-0  grid  items-center justify-end  ">
                  {/* <div className="flex items-center "> */}
                  {/* <span className="badge rotate-90">New</span> */}
                  <div className="mb-1 ml-14 h-6">
                    <span className=" pl-0.5   bg-black "></span>
                  </div>
                  {trending ? (
                    <span className="badge rotate-90 mb-12 ml-8">New</span>
                  ) : (
                    <span className="badge rotate-90 mb-12 ml-5">Trending</span>
                  )}
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
                  <select className="w-44 rounded-sm text-sm text-gray-600 px-1 py-1 border ">
                    <option>Select Option</option>
                    <option>Select</option>
                  </select>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold my-3">$149</p>
                    <del>
                      <p className="text-sm text-gray-600 ml-2">$199</p>
                    </del>
                    <span className="discount-percent ml-2">Save 20%</span>
                  </div>

                  {/* add to cart button */}

                  <div className="flex flex-row justify-between">
                    {/* <label className="border-gray-400 text-gray-400 text-sm  rounded-md bg-gray-200"htmlFor="">qty</label> */}

                    {/* <input className="w-12 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="qty" type="text" /> */}
                    <input
                      type="number"
                      id="visitors"
                      className=" w-14 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex flex-row"
                      placeholder="qty"
                      required
                    />

                    <button className="button-primary flex gap-1 flex flex-row">
                      <AiOutlineShoppingCart className="mt-1" />
                      Add to cart
                    </button>
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
