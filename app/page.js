import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="main bg-zinc-900">
      {/* Header */}

      <div className="flex items-center justify-center">
        <nav className="pointer-events-auto mt-8">
          <ul className="flex rounded-full bg-zinc-800/90 px-3 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 backdrop-blur">
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
                href="/articles"
              >
                Articles
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

      <div className="sm:px-8 mt-16">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl">
                <Image
                  className="rounded-full"
                  src="/profile.jpg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                />
                <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mt-9 sm:leading-normal">
                  Software designer, founder, and amateur inventor.
                </h1>
                <p className="mt-6 text-base text-zinc-400 ">
                  I’m Musfique, a software designer and entrepreneur based in
                  Dhaka, Bangladesh. I develop technologies that empower regular
                  people to explore internet on their own terms. I focus on
                  crafting innovative technologies that enable ordinary people
                  to navigate and use the internet according to their
                  preferences.
                </p>

                <div className="mt-6 flex gap-6">
                  <div className="mt-2 flex items-center justify-center gap-x-6 lg:justify-start">
                    <Link
                      href="/projects"
                      className="text-sm font-semibold leading-6 text-teal-500"
                    >
                      Projects <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl bg-zinc-800 rotate-2">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="/image1.jpeg"
              width={3744}
              height={5616}
              alt="Picture of the author"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl bg-zinc-800 -rotate-2">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="/image2.jpeg"
              width={3936}
              height={2624}
              alt="Picture of the author"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl bg-zinc-800 rotate-2">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="/image7.jpg"
              width={5760}
              height={3840}
              alt="Picture of the author"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl bg-zinc-800 -rotate-2">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="/image4.jpg"
              width={2400}
              height={3000}
              alt="Picture of the author"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl bg-zinc-800 rotate-2">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="/image5.webp"
              width={3120}
              height={4160}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

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
                        href="/articles"
                        className="transition hover:text-teal-400"
                      >
                        Articles
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
