import { useState } from "react";
import logo from "../../../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const [isToggleOpen, setIsToggleOpen] = useState(false);

	// Navlinks
	const navLinks = (
		<div className=" flex items-center gap-10">
			<li className=" hover:text-red-500 transition-colors duration-200 ease-in">
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? " text-red-600" : "")}
				>
					Home
				</NavLink>
			</li>
			<li className=" hover:text-red-500 transition-colors duration-200 ease-in">
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? " text-red-600" : "")}
				>
					About
				</NavLink>
			</li>
			<li className=" hover:text-red-500 transition-colors duration-200 ease-in">
				<NavLink
					to="/service"
					className={({ isActive }) => (isActive ? " text-red-600" : "")}
				>
					Service
				</NavLink>
			</li>
			<li className=" hover:text-red-500 transition-colors duration-200 ease-in">
				<NavLink
					to="/blog"
					className={({ isActive }) => (isActive ? " text-red-600" : "")}
				>
					Blog
				</NavLink>
			</li>
			<li className=" hover:text-red-500 transition-colors duration-200 ease-in">
				<NavLink
					to="/contact"
					className={({ isActive }) => (isActive ? " text-red-600" : "")}
				>
					Contact
				</NavLink>
			</li>
		</div>
	);

	return (
		<div className=" sticky top-0 z-10 bg-transparent">
			{/*<!-- Header --> */}
			<header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
				<div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
					<nav
						aria-label="main navigation"
						className="flex h-auto py-2 justify-between items-center font-medium text-slate-700"
						role="navigation"
					>
						<div className=" flex-1">
							<img className=" w-16 h-16" src={logo} alt="" />
						</div>
						<button
							className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
									isToggleOpen
										? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
										: ""
								}
              `}
							onClick={() => setIsToggleOpen(!isToggleOpen)}
							aria-expanded={isToggleOpen ? "true" : "false"}
							aria-label="Toggle navigation"
						>
							<div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
								></span>
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
								></span>
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
								></span>
							</div>
						</button>
						{/*      <!-- Navigation links --> */}
						<div>
							<ul
								role="menubar"
								aria-label="Select page"
								className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center items-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
									isToggleOpen
										? "visible opacity-100 backdrop-blur-sm"
										: "invisible opacity-0"
								}`}
							>
								{navLinks}
							</ul>
						</div>
						{/*      <!-- Actions --> */}
						<div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
							<a
								href="#"
								className="relative  inline-flex h-10 w-10 items-center justify-center rounded-full text-lg text-stone-500"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="1.5"
									aria-labelledby="title description"
									role="graphics-symbol"
								>
									<title id="title">Cart Icon</title>
									<desc id="description">Cart icon with items</desc>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
									/>
								</svg>
							</a>
							<a
								href="#"
								className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-lg text-stone-500"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-gray-200"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3964 3.78941 12.4887 2.99921 10.4995 2.99921C8.51029 2.99921 6.60256 3.78941 5.19599 5.19599C3.78941 6.60256 2.99921 8.51029 2.99921 10.4995C2.99921 12.4887 3.78941 14.3964 5.19599 15.803C6.60256 17.2096 8.51029 17.9998 10.4995 17.9998C12.4887 17.9998 14.3964 17.2096 15.803 15.803V15.803Z"
										stroke="#444444"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
							{/* Btn */}
							<button
								type="button"
								className="py-2.5 px-5 mr-2 mb-2 text-sm font-semibold text-red-500 focus:outline-none bg-white rounded-lg border border-rose-400 hover:bg-rose-50 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-700 dark:bg-red-800 dark:text-red-400 dark:border-red-600 dark:hover:text-white dark:hover:bg-red-700 transition-all duration-300 ease-in-out"
							>
								Appointment
							</button>
							<Link
								to={"/register"}
								type="button"
								className="py-2.5 px-5 mr-2 mb-2 text-sm font-semibold text-red-500 focus:outline-none bg-white rounded-lg border border-rose-400 hover:bg-rose-50 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-700 dark:bg-red-800 dark:text-red-400 dark:border-red-600 dark:hover:text-white dark:hover:bg-red-700 transition-all duration-300 ease-in-out"
							>
								Sign Up
							</Link>
						</div>
					</nav>
				</div>
			</header>
			{/*<!-- End Navbar with Topbar--> */}
		</div>
	);
};

export default Navbar;
