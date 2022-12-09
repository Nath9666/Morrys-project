/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MorryIcon } from "../assets";
import { Auth, Background } from "./";

const MainPage = ({ setMenu }) => {
  return (
    <>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div
                className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                onClick={() => setMenu("features")}
              >
                <span className="text-gray-600">
                  Announcing our next round of funding.{" "}
                  <span className="font-semibold text-orange-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </span>
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Morrys the best office service to manage a team and a project
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                impedit!
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <input
                    type="text"
                    placeholder="Search a project"
                    className="relative overflow-hidden rounded-full py-1.5 px-4 text-1.5xl leading-6 ring-1 ring-gray-900/10
                       hover:ring-gray-900/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FeaturesMain = () => {
  return (
    <main>
      <div class="py-24 sm:py-32 lg:py-40">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="sm:text-center">
            <h2 class="text-lg font-semibold leading-8 text-orange-600">
              Management project
            </h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A better way to spend your time
            </p>
            <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white sm:shrink-0">
                  {/* <!-- Heroicon name: outline/globe-alt --> */}
                  <svg
                    class="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
                <div class="sm:min-w-0 sm:flex-1">
                  <p class="text-lg font-semibold leading-8 text-gray-900">
                    Work together in a same file
                  </p>
                  <p class="mt-2 text-base leading-7 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>

              <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white sm:shrink-0">
                  {/* <!-- Heroicon name: outline/scale --> */}
                  <svg
                    class="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                    />
                  </svg>
                </div>
                <div class="sm:min-w-0 sm:flex-1">
                  <p class="text-lg font-semibold leading-8 text-gray-900">
                    Protect your ideas with certificate
                  </p>
                  <p class="mt-2 text-base leading-7 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>

              <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white sm:shrink-0">
                  {/* <!-- Heroicon name: outline/bolt --> */}
                  <svg
                    class="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <div class="sm:min-w-0 sm:flex-1">
                  <p class="text-lg font-semibold leading-8 text-gray-900">
                    Add metting to work together
                  </p>
                  <p class="mt-2 text-base leading-7 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>

              <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white sm:shrink-0">
                  {/* <!-- Heroicon name: outline/device-phone-mobile --> */}
                  <svg
                    class="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <div class="sm:min-w-0 sm:flex-1">
                  <p class="text-lg font-semibold leading-8 text-gray-900">
                    Mobile notifications
                  </p>
                  <p class="mt-2 text-base leading-7 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const ChooseComponent = ({ menu, setMenu }) => {
  switch (menu) {
    case "features":
      return <FeaturesMain />;
    case "login":
      return <Auth />;
    default:
      return <MainPage setMenu={setMenu} />;
  }
};

const NavBar = ({ setMobileMenuOpen, setMenu, mobileMenuOpen }) => {
  return (
    <main>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-4 p-4">
                <span className="sr-only">Morrys</span>
                <img className="h-12" src={MorryIcon} alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMenu("login")}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12 mt-2">
              {navigation.map((item) => (
                <p
                  key={item.name}
                  onClick={() => setMenu(item.onClick)}
                  className="font-semibold text-gray-900 hover:text-gray-900 cursor-pointer ring-2 hover:ring-orange-500 ring-gray-900/10 p-2 rounded-2xl"
                >
                  {item.name}
                </p>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end cursor-pointer">
              <p
                href="#"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-orange-600 hover:ring-gray-900/20  hover:bg-orange-600"
                onClick={() => {
                  setMenu("login");
                }}
              >
                Log in
              </p>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus="true"
              className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
            >
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-12" src={MorryIcon} alt="" />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <p
                        key={item.name}
                        onClick={() => {
                          setMenu(item.onClick);
                          setMobileMenuOpen(false);
                        }}
                        className="font-semibold text-gray-900 hover:text-gray-900 cursor-pointer ring-2 hover:ring-gray-900/20 ring-gray-900/10"
                      >
                        {item.name}
                      </p>
                    ))}
                  </div>
                  <div className="py-6 cursor-pointer">
                    <p
                      href="#"
                      className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-orange-600 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-orange-600"
                      onClick={() => setMenu("login")}
                    >
                      Log in
                    </p>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </main>
  );
};

const navigation = [
  { name: "What is Morrys", onClick: "Home" },
  { name: "Features", onClick: "features" },
  { name: "Search", onClick: "Search" },
  { name: "About us", onClick: "AboutUs" },
];

export default function Welcome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [log, setLog] = useState(false);
  const [menu, setMenu] = useState("main");

  return (
    <div className="isolate bg-white">
      <Background color1={"#ffae00"} color2={"#00FFF6"} />
      <NavBar
        setLog={setLog}
        setMenu={setMenu}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />

      <ChooseComponent menu={menu} setMenu={setMenu} />
    </div>
  );
}
