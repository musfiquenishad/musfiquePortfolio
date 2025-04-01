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
import { PaperClipIcon } from "@heroicons/react/20/solid";

function Contact() {
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
									<header className="max-w-2xl">
										<h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
											Get in touch with me.
										</h1>
										<p className="mt-6 text-base text-zinc-400">
											Feel free to send me an email, lets build something big
											together.
										</p>
									</header>
								</div>
							</div>
						</div>
					</div>

					<div className=" sm:mt-28 flex items-center justify-center mx-auto w-full max-w-5xl px-2 mt-20">
						<div>
							<div className="px-4 sm:px-0">
								<h3 className="text-base font-semibold leading-7 text-zinc-100">
									Contact Information
								</h3>
								<p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-200">
									Personal details and Contact.
								</p>
							</div>
							<div className="mt-6 border-t border-zinc-700/40">
								<dl className="divide-y divide-zinc-700/40">
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-zinc-100">
											Full name
										</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-200 sm:col-span-2 sm:mt-0">
											Musfique Ahsan Nishad
										</dd>
									</div>

									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-zinc-100">
											Email address
										</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-200 sm:col-span-2 sm:mt-0">
											musfiquenishad@gmail.com, nishad@lunitech.co
										</dd>
									</div>

									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-zinc-100">
											Address
										</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-200 sm:col-span-2 sm:mt-0">
											Paterbug, Dania, Dhaka-1236, Bangladesh.
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-zinc-100">
											About
										</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-200 sm:col-span-2 sm:mt-0">
											I am Musfique Ahsan Nishad, a Computer Science and
											Engineering student at Southeast University in Bangladesh.
											I have a passion for software engineering and artificial
											intelligence, sparked by creating my first C programming
											applications in high school. At university, I led projects
											like a web-based link shortener and an NFC contact-sharing
											platform, and developed a game, Guess the Number for
											Android & IOS. Currently, I work as a software developer
											at Lunitech LLC, where I continue to expand my skills and
											expertise.
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-zinc-100">
											Download Resume
										</dt>
										<dd className="mt-2 text-sm text-zinc-100 sm:col-span-2 sm:mt-0">
											<ul
												role="list"
												className="divide-y divide-zinc-700/40 rounded-md border border-zinc-700/40"
											>
												<li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
													<div className="flex w-0 flex-1 items-center">
														<PaperClipIcon
															className="h-5 w-5 flex-shrink-0 text-zinc-200"
															aria-hidden="true"
														/>
														<div className="ml-4 flex min-w-0 flex-1 gap-2">
															<span className="truncate font-medium">
																resume.pdf
															</span>
															<span className="flex-shrink-0 text-zinc-200">
																137.8kb
															</span>
														</div>
													</div>
													<div className="ml-4 flex-shrink-0">
														<a
															target="_blank"
															rel="noopener noreferrer"
															href="https://firebasestorage.googleapis.com/v0/b/musfiqueportfolio.appspot.com/o/resume.pdf?alt=media&token=58661fde-39cd-425a-b914-c35d66cccf3c"
															className="font-medium text-teal-500 hover:text-teal-400"
														>
															Download
														</a>
													</div>
												</li>
												<li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
													<div className="flex w-0 flex-1 items-center">
														<PaperClipIcon
															className="h-5 w-5 flex-shrink-0 text-zinc-200"
															aria-hidden="true"
														/>
														<div className="ml-4 flex min-w-0 flex-1 gap-2">
															<span className="truncate font-medium">
																cover_letter.pdf
															</span>
															<span className="flex-shrink-0 text-zinc-200">
																61.8kb
															</span>
														</div>
													</div>
													<div className="ml-4 flex-shrink-0">
														<a
															target="_blank"
															rel="noopener noreferrer"
															href="https://firebasestorage.googleapis.com/v0/b/musfiqueportfolio.appspot.com/o/cover_letter.pdf?alt=media&token=d3ef6fa2-c566-4093-bafc-94942e837c0f"
															className="font-medium text-teal-500 hover:text-teal-400"
														>
															Download
														</a>
													</div>
												</li>
											</ul>
										</dd>
									</div>
								</dl>
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

export default Contact;
