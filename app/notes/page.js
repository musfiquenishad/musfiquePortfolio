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

function Notes() {
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

				<main className="flex-auto ">
					<div className="sm:px-8 mt-16 sm:mt-32">
						<div className="mx-auto w-full max-w-7xl lg:px-8">
							<div className="relative px-4 sm:px-8 lg:px-12">
								<div className="mx-auto max-w-2xl lg:max-w-5xl">
									<header className="max-w-2xl">
										<h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
											Notes on software design, company building
										</h1>
										<p className="mt-6 text-base text-zinc-400">
											All of my long-form thoughts on programming, leadership,
											product design, and more, collected in chronological
											order.
										</p>
									</header>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-52 mb-52 sm:mt-20 flex items-center justify-center">
						<p className="mt-6 text-xl text-teal-500 flex font-semibold">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6"
							>
								<path
									fillRule="evenodd"
									d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
									clipRule="evenodd"
								/>
							</svg>

							<span className="ml-4">No notes published yet</span>
						</p>
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
