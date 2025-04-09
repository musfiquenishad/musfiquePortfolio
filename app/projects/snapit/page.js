"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
	Dialog,
	DialogPanel,
	DialogTitle,
	Transition,
	TransitionChild,
} from "@headlessui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const images = ["/snapitui-1.png", "/snapitui-2.png"];

function Notes() {
	const [open, setOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const prevImage = () =>
		setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	const nextImage = () =>
		setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

	return (
		<div>
			{/* Modal */}
			<Transition show={open}>
				<Dialog className="relative z-10 md:hidden" onClose={setOpen}>
					<TransitionChild
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-zinc-900 bg-opacity-90 transition-opacity" />
					</TransitionChild>

					<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-start justify-center p-4 text-center sm:items-start sm:p-0">
							<TransitionChild
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<DialogPanel className="relative transform overflow-hidden rounded-lg bg-zinc-900 text-left shadow-xl transition-all w-full ">
									<div className="bg-zinc-800/90 text-zinc-200 px-8 py-4 ">
										<Link
											className="relative block py-2 transition  hover:text-teal-400 border-b-2 border-zinc-700/20"
											href="/about"
										>
											About
										</Link>
										<Link
											className="relative block py-2 transition  hover:text-teal-400 border-b-2 border-zinc-700/20"
											href="/projects"
										>
											Projects
										</Link>
										<Link
											className="relative block py-2 transition  hover:text-teal-400 border-b-2 border-zinc-700/20"
											href="/notes"
										>
											Notes
										</Link>
										<Link
											className="relative block py-2 transition  hover:text-teal-400"
											href="/contact"
										>
											Contact
										</Link>
									</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
			<div className="bg-zinc-900">
				{/* Header */}
				<header className="pointer-events-none relative z-5 flex flex-none flex-col">
					<div className="top-0 z-10 h-16 pt-6">
						<div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
							<div className="mx-auto w-full max-w-7xl lg:px-8">
								<div className="relative px-4 sm:px-8 lg:px-12">
									<div className="mx-auto max-w-2xl lg:max-w-5xl">
										<div className="relative flex gap-4">
											<div className="flex flex-1">
												<div className="h-10 w-10 rounded-full  p-0.5 shadow-lg shadow-zinc-800/5 ring-1  backdrop-blur bg-zinc-800/90 ring-white/10">
													<Link className="pointer-events-auto" href="/">
														<Image
															alt="picture of musfique"
															className="rounded-full  object-cover bg-zinc-800 h-9 w-9"
															src="/avatar.jpg"
															width={512}
															height={512}
														/>
													</Link>
												</div>
											</div>
											<div className="flex flex-1 justify-end md:justify-center">
												<div className="pointer-events-auto md:hidden">
													<button
														onClick={() => {
															setOpen(true);
														}}
														type="button"
														className="group flex items-center rounded-full px-4 py-2 text-sm font-medium  shadow-lg shadow-zinc-800/5 ring-1  backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10 hover:ring-white/20"
													>
														Menu
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth={1.5}
															stroke="currentColor"
															className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-400"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="m19.5 8.25-7.5 7.5-7.5-7.5"
															/>
														</svg>
													</button>

													<div hidden></div>
												</div>
												<nav className="pointer-events-auto hidden md:block">
													<ul className="flex rounded-full  px-3 text-sm font-medium  shadow-lg shadow-zinc-800/5 ring-1  backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10">
														<li>
															<Link
																className="relative block px-3 py-2 transition  hover:text-teal-400"
																href="/about"
															>
																About
															</Link>
														</li>
														<li>
															<Link
																className="relative block px-3 py-2 transition  hover:text-teal-400"
																href="/projects"
															>
																Projects
															</Link>
														</li>
														<li>
															<Link
																className="relative block px-3 py-2 transition  hover:text-teal-400"
																href="/notes"
															>
																Notes
															</Link>
														</li>
														<li>
															<Link
																className="relative block px-3 py-2 transition  hover:text-teal-400"
																href="/contact"
															>
																Contact
															</Link>
														</li>
													</ul>
												</nav>
											</div>
											<div className="flex justify-end md:flex-1">
												<div className="pointer-events-auto">
													<button
														type="button"
														className="group rounded-full px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1  backdrop-blur transition bg-zinc-800/90 ring-white/10 hover:ring-white/20"
													>
														<a
															href="https://firebasestorage.googleapis.com/v0/b/musfiqueportfolio.appspot.com/o/resume.pdf?alt=media&token=58661fde-39cd-425a-b914-c35d66cccf3c"
															target="_blank"
															rel="noopener noreferrer"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																strokeWidth={1.5}
																stroke="currentColor"
																className="size-5  stroke-zinc-500 transition [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
																color={"#71717a"}
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
																/>
															</svg>
														</a>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

				<main className="flex-auto pt-32">
					<div className="max-w-4xl mx-auto space-y-6 px-5">
						{/* Title & Intro */}
						<div>
							<p className="text-sm text-gray-400">March 2025</p>
							<h1 className="text-4xl font-extrabold leading-tight">
								Designing UI/UX for{" "}
								<span className="text-yellow-500">Snapit APP</span>
							</h1>
							<p className="text-gray-400 mt-2">
								Role: UI/UX Designer · Tools: Figma · Duration: 4 weeks
							</p>
							<p className="text-gray-300 mt-4">
								Snapit is a cross-platform photo and video sharing app that
								helps users easily send and receive high-quality media files
								between different devices—whether it’s Android or iPhone. I was
								responsible for designing the end-to-end user experience and
								interface, with a strong focus on simplicity, speed, and joyful
								interactions.
							</p>
						</div>

						{/* Problem Statement */}
						<section className="text-gray-300">
							<h2 className="text-2xl font-bold text-white mt-6 border-l-4 border-yellow-500 pl-3">
								The Challenge
							</h2>
							<p className="mt-2">
								During events like trips, birthdays, or group outings, users
								often struggle to collect all the photos and videos taken by
								different people. Existing solutions either compress media,
								require complicated setup, or limit sharing across platforms.
								Snapit needed a clean and intuitive interface that made sharing
								media feel as easy as messaging—without compromising quality.
							</p>
						</section>

						{/* Image Carousel */}
						<div className="mt-6">
							<div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-700">
								<Image
									src={images[currentImageIndex]}
									alt={`Linqnest UI ${currentImageIndex + 1}`}
									width={1200}
									height={700}
									onClick={() => setIsOpen(true)}
									className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
								/>
								<button
									onClick={prevImage}
									className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white"
								>
									<ChevronLeftIcon className="h-5 w-5" />
								</button>
								<button
									onClick={nextImage}
									className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white"
								>
									<ChevronRightIcon className="h-5 w-5" />
								</button>
							</div>

							{/* Thumbnails */}
							<div className="flex justify-center gap-3 mt-4">
								{images.map((img, i) => (
									<div
										key={i}
										onClick={() => setCurrentImageIndex(i)}
										className={`w-24 h-16 overflow-hidden rounded-md cursor-pointer border ${
											i === currentImageIndex
												? "border-yellow-500"
												: "border-gray-700"
										}`}
									>
										<Image
											src={img}
											alt={`Preview ${i + 1}`}
											width={96}
											height={64}
											className="w-full h-full object-cover"
										/>
									</div>
								))}
							</div>

							{/* Fullscreen Modal */}
							<Dialog
								open={isOpen}
								onClose={() => setIsOpen(false)}
								className="relative z-50"
							>
								<div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
									<Dialog.Panel>
										<Image
											src={images[currentImageIndex]}
											alt="Zoomed Linqnest UI"
											width={1600}
											height={900}
											className="max-h-[90vh] w-auto rounded-lg border border-gray-700"
										/>
									</Dialog.Panel>
								</div>
							</Dialog>
						</div>

						{/* UX Process */}
						<section className="text-gray-300">
							<h2 className="text-2xl font-bold text-white mt-8 border-l-4 border-yellow-500 pl-3">
								My Design Process
							</h2>
							<ul className="list-disc list-inside space-y-1 mt-2">
								<li>
									User Discovery: Conducted interviews with 6 users who
									frequently share media in groups to identify their biggest
									pain points.
								</li>
								<li>
									Journey Mapping: Mapped out user flows for sending, receiving,
									and organizing shared media.
								</li>
								<li>
									Wireframes: Created low-fidelity wireframes to explore
									different sharing mechanics and onboarding flows.
								</li>
								<li>
									High-Fidelity UI: Designed an engaging, friendly interface
									using a yellow (#F59E0B / yellow-500) accent to reflect
									energy, warmth, and creativity.
								</li>
								<li>
									Prototyping: Built interactive prototypes for both Android and
									iOS views, and ran usability testing on TestFlight and Expo
									Go.
								</li>
							</ul>
						</section>

						{/* Style Guide */}
						<section className="text-gray-300">
							<h2 className="text-2xl font-bold text-white mt-8 border-l-4 border-yellow-500 pl-3">
								Design System
							</h2>
							<ul className="list-disc list-inside space-y-1 mt-2">
								<li>
									Bright Yellow Accent: Used as a primary action color to
									encourage user engagement and highlight core actions like
									Share, Create Room, and Upload.
								</li>
								<li>
									Media-First Layout: Prioritized image and video thumbnails,
									full-width previews, and smooth media transitions.
								</li>
								<li>
									Reusable Components: Created a flexible design system for
									buttons, avatars, bottom sheets, QR share cards, and status
									indicators.
								</li>
								<li>
									Dark Mode Support: Designed dark mode to enhance viewing
									experience during nighttime or in low-light environments.
								</li>
							</ul>
						</section>

						{/* Outcome */}
						<section className="text-gray-300">
							<h2 className="text-2xl font-bold text-white mt-8 border-l-4 border-yellow-500 pl-3">
								Results
							</h2>
							<ul className="list-disc list-inside space-y-1 mt-2">
								<li>
									Prototype shared among test users resulted in over 500 shared
									files in the first week.
								</li>
								<li>
									Positive feedback on the ease of use, especially from less
									tech-savvy users.
								</li>
								<li>
									Sharing flow time was reduced to under 30 seconds from app
									launch to completed file transfer.
								</li>
							</ul>
						</section>

						{/* Final Thoughts */}
						<section className="text-gray-300">
							<h2 className="text-2xl font-bold text-white mt-8 border-l-4 border-yellow-500 pl-3">
								What I Learned
							</h2>
							<p className="mt-2">
								Designing Snapit taught me the importance of emotional
								design—people don’t just want functionality, they want something
								that feels fast, friendly, and fun. I learned to simplify flows
								without cutting core features and how to design for both techies
								and casual users alike. Using color strategically helped create
								trust and excitement in an app meant to be used during memorable
								moments.
							</p>
						</section>

						{/* Back Button */}
						<div className="pt-20 text-center">
							<a
								href="/projects"
								className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-5 rounded-full transition"
							>
								← Back to Projects
							</a>
						</div>
					</div>
				</main>

				<footer className="mt-32 flex-none">
					<div className="sm:px-8">
						<div className="mx-auto w-full max-w-7xl lg:px-8">
							<div className="border-t border-zinc-700/40 pb-16 pt-10">
								<div className="relative px-4 sm:px-8 lg:px-12">
									<div className="mx-auto max-w-2xl lg:max-w-5xl">
										<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
											<div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-100">
												<Link
													href="/about"
													className="transition hover:text-teal-400"
												>
													About
												</Link>
												<Link
													href="/projects"
													className="transition hover:text-teal-400"
												>
													Projects
												</Link>
												<Link
													href="/notes"
													className="transition hover:text-teal-400"
												>
													Notes
												</Link>
												<Link
													href="/contact"
													className="transition hover:text-teal-400"
												>
													Contact
												</Link>
											</div>
											<p className="text-sm text-zinc-500">
												© {new Date().getFullYear()} Musfique All rights
												reserved.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default Notes;
