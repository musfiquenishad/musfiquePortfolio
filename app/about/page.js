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

function About() {
	const [open, setOpen] = useState(false);

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
															className="rounded-full  object-cover bg-zinc-800 h-9 w-9"
															src="/avatar.jpg"
															width={512}
															height={512}
															alt="picture of musfique"
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

				<main className="flex-auto ">
					<div className="sm:px-8 mt-16 sm:mt-32">
						<div className="mx-auto w-full max-w-7xl lg:px-8">
							<div className="relative px-4 sm:px-8 lg:px-12">
								<div className="mx-auto max-w-2xl lg:max-w-5xl">
									<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
										<div className="lg:pl-20">
											<div className="max-w-xs px-2.5 lg:max-w-none">
												<Image
													className="aspect-square rotate-3 rounded-2xl  object-cover bg-zinc-800"
													src="/avatar.jpg"
													width={800}
													height={800}
													alt="Picture of Musfique"
												/>
											</div>
										</div>
										<div className="lg:order-first lg:row-span-2">
											<h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
												I’m Musfique Ahsan Nishad. I design the future.
											</h1>
											<div className="mt-6 space-y-7 text-base text-zinc-400">
												<p>
													My passion for technology and problem-solving has
													driven me since the beginning. My journey started in
													high school when I built my first applications using C
													programming, including a BMI calculator and a
													temperature converter. These early projects ignited my
													interest in software engineering.
												</p>
												<p>
													During my studies in Computer Science and Engineering
													at Southeast University (SEU), I expanded my skills
													through various innovative projects. One of my key
													achievements was leading the development of a
													web-based link shortener, allowing users to create and
													manage shortened URLs efficiently. This project
													deepened my expertise in web development, including
													front-end and back-end technologies such as HTML, CSS,
													JavaScript, React.js, and Node.js.
												</p>
												<p>
													Another significant project involved creating an
													NFC-based contact-sharing platform, offering a
													sustainable alternative to traditional business cards.
													This project provided me with hands-on experience in
													NFC technology and strengthened my understanding of
													NoSQL databases like MongoDB and Firebase for handling
													user data operations.
												</p>
												<p>
													In addition to these, I developed and published a
													mathematical puzzle game,
													<em>Guess the Number</em>, on the Google Play Store
													and Apple App Store. This project refined my mobile
													app development skills and enhanced my ability to
													create engaging user experiences while solving complex
													challenges.
												</p>
											</div>
										</div>

										<div className="lg:pl-20">
											<ul role="list">
												<li className="flex">
													<a
														href="https://x.com/musfiquenishad"
														className="group flex text-sm font-medium transition text-zinc-200 hover:text-teal-500"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24"
															width={24}
															height={24}
															color={"#71717a"}
															fill={"none"}
														>
															<path
																d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<span className="ml-4"></span>
														Follow on X
													</a>
												</li>
												<li className="mt-4 flex">
													<a
														href="https://www.instagram.com/musfiquenishad"
														className="group flex text-sm font-medium transition  text-zinc-200 hover:text-teal-500"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24"
															width={24}
															height={24}
															color={"#71717a"}
															fill={"none"}
														>
															<path
																d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinejoin="round"
															/>
															<path
																d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
																stroke="currentColor"
																strokeWidth="1.5"
															/>
															<path
																d="M17.5078 6.5L17.4988 6.5"
																stroke="currentColor"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<span className="ml-4"></span>
														Follow on Instagram
													</a>
												</li>
												<li className="mt-4 flex">
													<a
														href="https://github.com/musfiquenishad"
														className="group flex text-sm font-medium transition text-zinc-200 hover:text-teal-500"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24"
															width={24}
															height={24}
															color={"#71717a"}
															fill={"none"}
														>
															<path
																d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<span className="ml-4"></span>
														Follow on Github
													</a>
												</li>
												<li className="mt-4 flex">
													<a
														href="https://www.linkedin.com/in/musfique-nishad/"
														className="group flex text-sm font-medium transition  text-zinc-200 hover:text-teal-500"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24"
															width={24}
															height={24}
															color={"#71717a"}
															fill={"none"}
														>
															<path
																d="M7 10V17"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																d="M7.00801 7L6.99902 7"
																stroke="currentColor"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinejoin="round"
															/>
														</svg>
														<span className="ml-4"></span>
														Follow on LinkedIn
													</a>
												</li>
												<li className="mt-8 border-t pt-8 border-zinc-700/40 flex">
													<a
														className="group flex text-sm font-medium transition text-zinc-200 hover:text-teal-500"
														href="mailto:nishad@lunitech.co"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24"
															fill="currentColor"
															className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
														>
															<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
															<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
														</svg>
														<span className="ml-4"></span>
														nishad@lunitech.co
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
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

export default About;
