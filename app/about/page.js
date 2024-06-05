import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="bg-zinc-900">
      {/* Header */}
      <header className="pointer-events-none relative z-50 flex flex-none flex-col">
        <div className="top-0 z-10 h-16 pt-6">
          <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="relative flex gap-4">
                    <div className="flex flex-1">
                      <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                        <Link className="pointer-events-auto" href="/">
                          <Image
                            className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                            src="/profile.jpg"
                            width={512}
                            height={512}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-end md:justify-center">
                      <div className="pointer-events-auto md:hidden">
                        <button
                          type="button"
                          className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                        >
                          Menu
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
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
                        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                          <li>
                            <Link
                              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="/about"
                            >
                              About
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="/projects"
                            >
                              Projects
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="/notes"
                            >
                              Notes
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                              href="/contact"
                            >
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="flex justify-end md:flex-1"></div>
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
                        className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        src="/aboutprofile.jpg"
                        width={800}
                        height={800}
                      />
                    </div>
                  </div>
                  <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
                      I’m Musfique Ahsan Nishad. I live in Dhaka, where I design
                      the future.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                      <p>
                        I’ve loved making things for as long as I can remember,
                        and wrote my first program when I was 6 years old, just
                        two weeks after my mom brought home the brand new
                        Macintosh LC 550 that I taught myself to type on.
                      </p>
                      <p>
                        The only thing I loved more than computers as a kid was
                        space. When I was 8, I climbed the 40-foot oak tree at
                        the back of our yard while wearing my older sister’s
                        motorcycle helmet, counted down from three, and jumped —
                        hoping the tree was tall enough that with just a bit of
                        momentum I’d be able to get to orbit.
                      </p>
                      <p>
                        I spent the next few summers indoors working on a rocket
                        design, while I recovered from the multiple surgeries it
                        took to fix my badly broken legs. It took nine
                        iterations, but when I was 15 I sent my dad’s Blackberry
                        into orbit and was able to transmit a photo back down to
                        our family computer from space.
                      </p>
                      <p>
                        Today, I’m the founder of Planetaria, where we’re
                        working on civilian space suits and manned shuttle kits
                        you can assemble at home so that the next generation of
                        kids really can make it to orbit — from the comfort of
                        their own backyards.
                      </p>
                    </div>
                  </div>
                  <div className="lg:pl-20">
                    <ul role="list">
                      <li className="flex">
                        <a
                          href="#"
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
                          href="#"
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
                          href="#"
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
                          href="#"
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
                          href="mailto:contact@musfique.com"
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
                          contact@musfique.com
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
                      © 2024 Musfique All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
