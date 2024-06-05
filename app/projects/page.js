import Image from "next/image";
import Link from "next/link";
export default function Projects() {
  return (
    <div className="main bg-zinc-900">
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
                          src="/guessTheNumber.webp"
                          width={32}
                          height={32}
                        />
                      </div>
                      <h2 className="mt-6 text-base font-semibold text-zinc-100">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl bg-zinc-800/50"></div>
                        <a href="https://play.google.com/store/apps/details?id=com.musfiquenishad.GuessTheNumber&pcampaignid=web_share">
                          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <span className="relative z-10">
                            Guess The Number
                          </span>
                        </a>
                      </h2>
                      <p className="relative z-10 mt-2 text-sm  text-zinc-400">
                        Guess the Number is a number-guessing mathematical
                        puzzle game. Where computer thinks of a number within a
                        specified range and the player attempts to guess it by
                        receiving feedback on whether their guesses are too
                        high, too low, or correct
                      </p>
                      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                          <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                        </svg>

                        <span className="ml-2">www.play.google.com</span>
                      </p>
                    </li>{" "}
                    <li className="group relative flex flex-col items-start">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full  shadow-md shadow-zinc-800/5  ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
                        <Image src="/Lunitech.png" width={32} height={32} />
                      </div>
                      <h2 className="mt-6 text-base font-semibold text-zinc-100">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl bg-zinc-800/50"></div>
                        <a href="https://lunitech.co">
                          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <span className="relative z-10">Lunitech</span>
                        </a>
                      </h2>
                      <p className="relative z-10 mt-2 text-sm  text-zinc-400">
                        Luni Tech is an app developing company we publish wide
                        range of powerful and intuitive apps tailored to
                        simplify peoples Life and boost productivity.
                      </p>
                      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
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
                    <li className="group relative flex flex-col items-start">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full  shadow-md shadow-zinc-800/5  ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
                        <Image src="/tapeasy.png" width={32} height={32} />
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
                        share contact information, such as phone numbers, email
                        addresses, and social media profiles, by tapping the
                        card against an NFC-enabled smartphone.
                      </p>
                      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
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
