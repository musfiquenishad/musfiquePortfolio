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
export default function Projects() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			{" "}
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
			<div className="main bg-zinc-900">
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

				<main className="flex-auto">
					<div className="sm:px-8 mt-16 sm:mt-32">
						<div className="mx-auto w-full max-w-7xl lg:px-8">
							<div className="relative px-4 sm:px-8 lg:px-12">
								<div className="mx-auto max-w-2xl lg:max-w-5xl">
									<header className="max-w-2xl">
										<h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
											Things I’ve made trying to put my dent in the universe.
										</h1>
										<p className="mt-6 text-base text-zinc-400">
											I’ve worked on tons of little projects over the years but
											these are the ones that I’m most proud of.
										</p>
									</header>
									<div className="mt-16 sm:mt-20">
										<ul
											role="list"
											className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
										>
											<li className="group relative flex flex-col items-start">
												<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full  shadow-md shadow-zinc-800/5  ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
													<Image
														src="/guessTheNumberIcon.png"
														width={32}
														height={32}
														alt="guess the number logo"
													/>
												</div>
												<h2 className="mt-6 text-base font-semibold text-zinc-100">
													<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl bg-zinc-800/50"></div>
													<a href="https://guess.lunitech.co">
														<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
														<span className="relative z-10">
															Guess The Number
														</span>
													</a>
												</h2>
												<p className="relative z-10 mt-2 text-sm  text-zinc-400">
													Guess the Number is a number-guessing mathematical
													puzzle game. Where computer thinks of a number within
													a specified range and the player attempts to guess it
													by receiving feedback on whether their guesses are too
													high, too low, or correct
												</p>
												<p className="relative z-10 mt-6 flex text-sm font-medium  transition group-hover:text-teal-500 text-zinc-200">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="size-5"
													>
														<path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
														<path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
													</svg>

													<span className="ml-2">www.guess.lunitech.co</span>
												</p>
											</li>{" "}
											<li className="group relative flex flex-col items-start">
												<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full  shadow-md shadow-zinc-800/5  ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
													<Image
														src="/tapeasy.png"
														alt="tapeasy logo"
														width={32}
														height={32}
													/>
												</div>
												<h2 className="mt-6 text-base font-semibold text-zinc-100">
													<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl bg-zinc-800/50"></div>
													<a href="https://gotapeasy.com/">
														<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
														<span className="relative z-10">Tapeasy</span>
													</a>
												</h2>
												<p className="relative z-10 mt-2 text-sm  text-zinc-400">
													Tapeasy is an NFC business card-creating platform to
													share contact information, such as phone numbers,
													email addresses, and social media profiles, by tapping
													the card against an NFC-enabled smartphone.
												</p>
												<p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="size-5"
													>
														<path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
														<path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
													</svg>

													<span className="ml-2">www.gotapeasy.com</span>
												</p>
											</li>
											<li className="group relative flex flex-col items-start">
												<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full  shadow-md shadow-zinc-800/5  ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
													<Image
														src="/snapitLogo.png"
														alt="snapit logo"
														width={32}
														height={32}
													/>
												</div>
												<h2 className="mt-6 text-base font-semibold text-zinc-100">
													<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl bg-zinc-800/50"></div>
													<Link href="/projects/snapit">
														<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
														<span className="relative z-10">
															Snapit App UI/UX Design
														</span>
													</Link>
												</h2>
												<p className="relative z-10 mt-2 text-sm  text-zinc-400">
													Snapit is a Photo and Video sharing app that allows
													user to easily share high quality media files with
													friends and family.
												</p>
												<p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="size-5"
													>
														<path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
														<path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
													</svg>

													<span className="ml-2">projects/snapit</span>
												</p>
											</li>
											<li className="group relative flex flex-col items-start">
												<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full  shadow-md shadow-zinc-800/5  ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
													<Image
														src="/linqnestLogo.png"
														alt="linqnest logo"
														width={32}
														height={32}
													/>
												</div>
												<h2 className="mt-6 text-base font-semibold text-zinc-100">
													<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl bg-zinc-800/50"></div>
													<Link href="/projects/linqnest">
														<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
														<span className="relative z-10">
															Linqnest UI/UX Design
														</span>
													</Link>
												</h2>
												<p className="relative z-10 mt-2 text-sm  text-zinc-400">
													Linqnest is a modern web-based platform that helps
													users shorten, manage, and organize their important
													links with ease.
												</p>
												<p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="size-5"
													>
														<path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
														<path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
													</svg>

													<span className="ml-2">projects/linqnest</span>
												</p>
											</li>
											<li className="group relative flex flex-col items-start">
												<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full  shadow-md shadow-zinc-800/5  ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
													<Image
														src="/Lunitech.png"
														alt="lunitech logo"
														width={32}
														height={32}
													/>
												</div>
												<h2 className="mt-6 text-base font-semibold text-zinc-100">
													<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl bg-zinc-800/50"></div>
													<a href="https://lunitech.vercel.app/">
														<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
														<span className="relative z-10">Lunitech</span>
													</a>
												</h2>
												<p className="relative z-10 mt-2 text-sm  text-zinc-400">
													Luni Tech is an app developing company we publish wide
													range of powerful and intuitive apps tailored to
													simplify peoples Life and boost productivity.
												</p>
												<p className="relative z-10 mt-6 flex text-sm font-medium  transition group-hover:text-teal-500 text-zinc-200">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="size-5"
													>
														<path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
														<path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
													</svg>

													<span className="ml-2">www.lunitech.co</span>
												</p>
											</li>
										</ul>
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
