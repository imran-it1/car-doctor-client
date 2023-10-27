import img1 from "../../../../assets/images/banner/1.jpg";
import img2 from "../../../../assets/images/banner/2.jpg";
import img3 from "../../../../assets/images/banner/3.jpg";
import img4 from "../../../../assets/images/banner/4.jpg";

const Banner = () => {
	return (
		<div>
			<div className="container mx-auto py-5">
				<div className="carousel h-[80vh]">
					<div id="slide1" className="carousel-item relative w-full">
						<img className="rounded-md w-full bg-cover" src={img1} alt="" />
						<div className=" rounded-md absolute inset-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)"></div>
						<div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-16 right-5 top-1/2">
							<div className=" text-white">
								<h1 className=" text-6xl font-bold">
									Affordable <br /> Price For Car <br /> Servicing
								</h1>
								<p className=" text-gray-300 leading-relaxed mt-2">
									There are many variations of passages of available, but <br />
									the majority have suffered alteration in some form
								</p>
							</div>
							<div className="space-x-5 mt-5">
								<button
									type="button"
									className="rounded border border-red-500 bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300"
								>
									Discover More
								</button>
								<button
									type="button"
									className="rounded border border-gray-300 bg-gray-200 px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
								>
									Latest Project
								</button>
							</div>
						</div>
						<div className="absolute flex transform right-5 bottom-[5%] gap-2">
							<a href="#slide4" className="btn btn-circle hover:bg-red-500">
								❮
							</a>
							<a href="#slide2" className="btn btn-circle bg-red-500">
								❯
							</a>
						</div>
					</div>
					<div id="slide2" className="carousel-item relative w-full">
						<img className="rounded-md w-full bg-cover" src={img2} alt="" />
						<div className=" rounded-md absolute inset-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)"></div>
						<div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-16 right-5 top-1/2">
							<div className=" text-white">
								<h1 className=" text-6xl font-bold">
									Affordable <br /> Price For Car <br /> Servicing
								</h1>
								<p className=" text-gray-300 leading-relaxed">
									There are many variations of passages of available, but <br />
									the majority have suffered alteration in some form
								</p>
							</div>
							<div className="space-x-5 mt-2">
								<button
									type="button"
									className="rounded border border-red-500 bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300"
								>
									Discover More
								</button>
								<button
									type="button"
									className="rounded border border-gray-300 bg-gray-200 px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
								>
									Latest Project
								</button>
							</div>
						</div>
						<div className="absolute flex transform right-5 bottom-[5%] gap-2">
							<a href="#slide1" className="btn btn-circle hover:bg-red-500">
								❮
							</a>
							<a href="#slide3" className="btn btn-circle bg-red-500">
								❯
							</a>
						</div>
					</div>
					<div id="slide3" className="carousel-item relative w-full">
						<img className="rounded-md w-full bg-cover" src={img3} alt="" />
						<div className=" rounded-md absolute inset-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)"></div>
						<div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-16 right-5 top-1/2">
							<div className=" text-white">
								<h1 className=" text-6xl font-bold">
									Affordable <br /> Price For Car <br /> Servicing
								</h1>
								<p className=" text-gray-300 leading-relaxed">
									There are many variations of passages of available, but <br />
									the majority have suffered alteration in some form
								</p>
							</div>
							<div className="space-x-5 mt-2">
								<button
									type="button"
									className="rounded border border-red-500 bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300"
								>
									Discover More
								</button>
								<button
									type="button"
									className="rounded border border-gray-300 bg-gray-200 px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
								>
									Latest Project
								</button>
							</div>
						</div>
						<div className="absolute flex transform right-5 bottom-[5%] gap-2">
							<a href="#slide2" className="btn btn-circle hover:bg-red-500">
								❮
							</a>
							<a href="#slide4" className="btn btn-circle bg-red-500">
								❯
							</a>
						</div>
					</div>
					<div id="slide4" className="carousel-item relative w-full">
						<img className="rounded-md w-full bg-cover" src={img4} alt="" />
						<div className=" rounded-md absolute inset-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)"></div>
						<div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-16 right-5 top-1/2">
							<div className=" text-white">
								<h1 className=" text-6xl font-bold">
									Affordable <br /> Price For Car <br /> Servicing
								</h1>
								<p className=" text-gray-300 leading-relaxed">
									There are many variations of passages of available, but <br />
									the majority have suffered alteration in some form
								</p>
							</div>
							<div className="space-x-5 mt-2">
								<button
									type="button"
									className="rounded border border-red-500 bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300"
								>
									Discover More
								</button>
								<button
									type="button"
									className="rounded border border-gray-300 bg-gray-200 px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
								>
									Latest Project
								</button>
							</div>
						</div>
						<div className="absolute flex transform right-5 bottom-[5%] gap-2">
							<a href="#slide3" className="btn btn-circle hover:bg-red-500">
								❮
							</a>
							<a href="#slide1" className="btn btn-circle bg-red-500">
								❯
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
