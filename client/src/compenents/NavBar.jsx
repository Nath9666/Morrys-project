import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MorryIcon } from "../assets";

const navigation = [
  { name: "What is Morrys", onClick: "/" },
  { name: "Features", onClick: "/features" },
  { name: "Search", onClick: "/Search" },
  { name: "About us", onClick: "#" },
];

const NavBar = () => {
  // TODO : center en Y les mot dans la barre de nav
  // TODO : si hover button changement de couleur et pas suivant les balise textes
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="/" className="-m-4 p-4">
                <span className="sr-only">Morrys</span>
                <img className="h-12" src={MorryIcon} alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <a
                className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                href="/login"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12 mt-2">
              {navigation.map((item) => (
                <a
                  href={item.onClick}
                  className="font-semibold text-gray-900 hover:text-gray-900 cursor-pointer ring-2 hover:ring-orange-500 ring-gray-900/10 p-2 rounded-2xl"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end cursor-pointer">
              <a
                href="/login"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-orange-600 hover:ring-gray-900/20  hover:bg-orange-600"
              >
                Log in
              </a>
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
                      <a
                        href={item.onClick}
                        className="font-semibold text-gray-900 hover:text-gray-900 cursor-pointer ring-2 hover:ring-gray-900/20 ring-gray-900/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6 cursor-pointer">
                    <a
                      href="/login"
                      className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-orange-600 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-orange-600"
                    >
                      Log in
                    </a>
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

export default NavBar;
