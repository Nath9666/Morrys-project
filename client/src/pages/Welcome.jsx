/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import { Auth } from "../compenents";

export default function Welcome() {
  return (
    <>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <a
                className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                href="/features"
              >
                <span className="text-gray-600">
                  Announcing our next round of funding.{" "}
                  <span className="font-semibold text-orange-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </span>
                </span>
              </a>
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
}
