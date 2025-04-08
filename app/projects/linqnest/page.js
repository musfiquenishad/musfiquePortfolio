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

const images = [
	"/linqnest-web-dark.png",
	"/linqnest-web-light.png",
	"/linqnest-mobile-dark.png",
];

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

				<main className="flex-auto py-10">
					<div className="max-w-4xl mx-auto space-y-6">
						{/* Title & Intro */}
						<div>
							<p className="text-sm text-gray-400">March 2025</p>
							<h1 className="text-4xl font-extrabold leading-tight">
								Designing UI/UX for{" "}
								<span className="text-teal-500">Linqnest</span>
							</h1>
							<p className="text-gray-400 mt-2">
								Role: UI/UX Designer · Tools: Figma · Duration: 3 weeks
							</p>
							<p className="text-gray-300 mt-4">
								Linqnest is a modern web-based platform that helps users
								shorten, manage, and organize their important links with ease.
								My goal was to create a sleek, user-friendly dashboard that
								feels fast, accessible, and visually delightful—across all
								screen sizes.
							</p>
						</div>

						{/* Problem Statement */}
						<section className="text-gray-300">
							<h2 className="text-2xl font-bold text-white mt-6 border-l-4 border-teal-500 pl-3">
								The Challenge
							</h2>
							<p className="mt-2">
								Users needed a clean and intuitive way to manage long lists of
								URLs, create short links, and share them effectively. The
								original concept lacked visual clarity and did not scale well
								across devices.
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
									className="w-full h-[600px] object-cover cursor-pointer transition hover:scale-[1.01]"
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
												? "border-teal-500"
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
							<h2 className="text-2xl font-bold text-white mt-8 border-l-4 border-teal-500 pl-3">
								My Design Process
							</h2>
							<ul className="list-disc list-inside space-y-1 mt-2">
								<li>
									Interviewed 4 target users to understand link management pain
									points
								</li>
								<li>
									Created low-fidelity wireframes to map out key interactions
								</li>
								<li>Designed light & dark responsive versions in Figma</li>
								<li>Built an interactive prototype for usability testing</li>
							</ul>
						</section>

						{/* Style Guide */}
						<section className="text-gray-300">
							<h2 className="text-2xl font-bold text-white mt-8 border-l-4 border-teal-500 pl-3">
								Design System
							</h2>
							<p className="mt-2">
								The Linqnest design uses a modern dark/light theme switcher with
								high contrast text, teal highlights for CTAs, and rounded UI
								elements for a clean, professional look. The typography is
								minimalist and responsive, ensuring excellent readability.
							</p>
						</section>

						{/* Outcome */}
						<section className="text-gray-300">
							<h2 className="text-2xl font-bold text-white mt-8 border-l-4 border-teal-500 pl-3">
								Results
							</h2>
							<ul className="list-disc list-inside space-y-1 mt-2">
								<li>
									Increased prototype engagement time by 3x in usability testing
								</li>
								<li>
									Users praised the simple layout and intuitive link editing UI
								</li>
								<li>
									Mobile-friendly design improved link creation flow by 40%
								</li>
							</ul>
						</section>

						{/* Final Thoughts */}
						<section className="text-gray-300">
							<h2 className="text-2xl font-bold text-white mt-8 border-l-4 border-teal-500 pl-3">
								What I Learned
							</h2>
							<p className="mt-2">
								Simplicity wins. Even feature-rich tools like Linqnest benefit
								from thoughtful spacing, minimal clicks, and accessible
								typography. I also learned how powerful a clean UI can be in
								reducing cognitive load for everyday tasks like link management.
							</p>
						</section>

						{/* Back Button */}
						<div className="mt-12 text-center">
							<a
								href="/projects"
								className="inline-block bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold py-2 px-5 rounded-full transition"
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
