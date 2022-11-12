import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiBorderAll, BiFoodTag, BiCategoryAlt } from "react-icons/bi";
import {
  MdOutlineRoomService,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { FaStarOfDavid } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="h-screen flex item-end justify-end px-4 pb-6">
        <button className="relative z-30 lg:hidden peer top-0 h-14 w-14 rounded-full bg-slate-700 hover:bg-slate-800 focus:bg-slate-700 transition mb-[660px]">
          <span className="text-white">
            <GiHamburgerMenu className="w-6 m-auto" />
          </span>
        </button>
        <div className="z-20 fixed top-0-left-96 lg:left-0 h-screen w-9/12 lg:w-72 bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <nav role="navigation" className="p-6">
            {/* <div className="flex item-center gap-4 pb-4">
              <h2 className="text-3xl textslate-700 font-bold">Department</h2>
            </div> */}
            <div className="mt-4 mx-4 relative overflow-y-auto overflow-x-hidden h-[85vh">
              <span className="uppercase px-4 text-gray-500">Department</span>
              <ul className="space-y-4 mb-12 px-4 mt-8">
                <li>
                  <a
                    href=""
                    className="flex gap-4 text-gray-60 hover:text-gray-800 transition"
                  >
                    {/* <BiBorderAll className="m-1" /> */}
                    Any
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex gap-4 text-gray-60 hover:text-gray-800 transition"
                  >
                    {/* <MdOutlineRoomService className="m-1" /> */}
                    Catering
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex gap-4 text-gray-60 hover:text-gray-800 transition"
                  >
                    {/* <MdProductionQuantityLimits className="m-1" /> */}
                    Grandhige
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex gap-4 text-gray-60 hover:text-gray-800 transition"
                  >
                    {/* <BiFoodTag className="m-1" /> */}
                    Prasadam
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex gap-4 text-gray-60 hover:text-gray-800 transition"
                  >
                    {/* <FaStarOfDavid className="m-1" /> */}
                    Yantra
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex gap-4 text-gray-60 hover:text-gray-800 transition"
                  >
                    {/* <BiCategoryAlt className="m-1" /> */}
                    Sample Category
                  </a>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="pr-2">
                  <div className="py-2 px-4 text-gray-700 uppercase">
                    <a href="" className="block">
                      Price
                    </a>
                  </div>
                  <ul className="text-sm pb-24">
                    <li>
                      <a
                        href=""
                        className="block py-2 px-5 rounded bg-cyan-500 bg-opacity-10 hover:bg-opacity-20 text-cyan-500"
                      >
                        Any
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block py-2 px-5 hover:text-gray-500 transition"
                      >
                        Rs 1 to Rs 10
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block py-2 px-5 hover:text-gray-500 transition"
                      >
                        Rs 10 to Rs 100
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block py-2 px-5 hover:text-gray-500 transition"
                      >
                        Rs 100 to Rs 1000
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
