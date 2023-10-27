import aboutUsImgPerson from "../../../../assets/images/about_us/person.jpg";
import aboutUsImgParts from "../../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
	return (
		<div className="container py-10 pb-32 m-auto">
			<div className="flex flex-col lg:flex-row items-center gap-32">
				<div className=" relative w-full lg:w-1/2">
					<img
						className=" rounded-md border-4 border-white shadow-xl"
						src={aboutUsImgPerson}
						alt="about us section person"
					/>
					<img
						className="rounded-md absolute w-[400px] top-[60%] left-[55%] border-8 border-white shadow-xl"
						src={aboutUsImgParts}
						alt=" about us section parts"
					/>
				</div>
				<div className=" w-full lg:w-1/2 space-y-5">
					<p className=" text-red-500 font-semibold">About Us</p>
					<h1 className=" text-5xl text-[#151515] font-semibold w-full lg:w-[400px]">
						We are qualified & of experience in this field
					</h1>
					<div className=" text-gray-700 space-y-4">
						<p>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don&apos;t look even
							slightly believable.
						</p>
						<p>
							the majority have suffered alteration in some form, by injected
							humour, or randomised words which don&apos;t look even slightly
							believable.
						</p>
					</div>

					<div>
						<button
							type="button"
							className="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-200 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
						>
							Get More Info
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
