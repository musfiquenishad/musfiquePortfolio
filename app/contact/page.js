import Image from "next/image";
import Link from "next/link";
import React from "react";

function Contact() {
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
                      <div className="h-10 w-10 rounded-full  p-0.5 shadow-lg shadow-zinc-800/5 ring-1  backdrop-blur bg-zinc-800/90 ring-white/10">
                        <Link className="pointer-events-auto" href="/">
                          <Image
                            className="rounded-full object-cover bg-zinc-800 h-9 w-9"
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
                          className="group flex items-center rounded-full px-4 py-2 text-sm font-medium  shadow-lg shadow-zinc-800/5 ring-1  backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10 hover:ring-white/20"
                        >
                          Menu
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="ml-3 h-auto w-2 stroke-zinc-500  group-hover:stroke-zinc-400"
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
                        <ul className="flex rounded-full  px-3 text-sm font-medium  shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10">
                          <li>
                            <Link
                              className="relative block px-3 py-2 transition hover:text-teal-400"
                              href="/about"
                            >
                              About
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="relative block px-3 py-2 transition hover:text-teal-400"
                              href="/projects"
                            >
                              Projects
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="relative block px-3 py-2 transition hover:text-teal-400"
                              href="/notes"
                            >
                              Notes
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="relative block px-3 py-2 transition hover:text-teal-400"
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
                <header className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
                    Get in touch with me.
                  </h1>
                  <p className="mt-6 text-base text-zinc-400">
                    Here are some of my contact lists and my office location
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

            <span className="ml-4">
              This page is Under Development, Please go to{" "}
              <Link href="/about">About</Link> page and find my details from
              there.
            </span>
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

export default Contact;
