import { useState } from "react";
import logo from '../image/logo.png'
import { AiOutlineSearch } from "react-icons/ai";

export default function NavBar() {
	const [navbar, setNavbar] = useState(false);

	return (
		<nav className="w-full bg-white shadow-sm">
			<div className="flex justify-between lg:max-w-6xl mx-auto  md:items-center    ">

				<div className="flex items-center justify-between py-3 md:py-5 ">
					<a href="">
						<img className="h-[60px] w-[60px] ml-15px" src={logo} alt={logo} />

					</a>



				</div>
				<div className=" flex justify-center max-w-md items-center">
					<div className=" flex border-[2px] border-solid border-gray-300 rounded-md items-center h-[40px] w-full  ml-2  ">

						<input type='text' className="border-none  outline-none ml-3 " placeholder="Search" />
						< AiOutlineSearch className=" text-gray-500 text-xl  mr-2 " />
					</div>
				</div>

				<div className="flex items-center justify-between py-3 md:py-5 ">
					{/* <a href="javascript:void(0)">
						<img className="h-[70px] w-[70px] ml-15px" src={logo} alt={logo} />

					</a> */}


					<div className="md:hidden">
						<button
							className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
							onClick={() => setNavbar(!navbar)}
						>
							{navbar ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>

					</div>
					<div
						className={` pb-3 mt-8 md:block md:pb-0  md:mt-0 ${navbar ? "block" : "hidden"
							}`}
					>
						<ul className="items-center justify-between space-y-8 md:flex md:space-x-6 md:space-y-0">
							<li className="text-gray-600 hover:text-blue-600 font-medium text-[18px]  cursor-pointer">
								<a href="">Cart</a>
							</li>
							<li className="text-gray-600 hover:text-blue-600  font-medium text-[18px]  cursor-pointer">
								<a href="">Wishlist</a>
							</li>
							<li className="text-gray-600 hover:text-blue-600  font-medium text-[18px]   cursor-pointer">
								<a href="">SignIn</a>
							</li>

						</ul>
					</div>
				</div>


			</div>




		</nav>
	);
}