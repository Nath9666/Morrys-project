import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, CardOfProject } from "../compenents";

const DashBoard = () => {
  const [listOfProjects, setListOfProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/projects").then((response) => {
      setListOfProjects(response.data);
    });
  }, []);

  return (
    <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
      <header class="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
        <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div class="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
            <div class="container relative left-0 z-50 flex w-3/4 h-full">
              <div class="relative flex items-center w-full h-full lg:w-64 group">
                <div class="absolute z-50 flex items-center justify-center w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                  <svg
                    fill="none"
                    class="relative w-5 h-5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <svg
                  class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
                <input
                  type="text"
                  class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                  placeholder="Search"
                />
                <a
                  class="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block"
                  href="/createproject"
                >
                  +
                </a>
              </div>
            </div>
            <div class="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
              <a href="/profile" class="relative block">
                <img
                  alt="profil"
                  src="/images/person/1.jpg"
                  class="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div class="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
        <div class="flex flex-col flex-wrap sm:flex-row ">
          <div class="w-full sm:w-1/2 xl:w-1/3">
            {listOfProjects.map((value, key) => {
              return (
                <CardOfProject
                  Name={value.name}
                  NameCreator=""
                  Image={value.image}
                  Type={value.Type}
                  Visibility={value.private}
                  Duedate={value.dueDate}
                  Description={value.description}
                  id={value.id}
                />
              );
            })}
          </div>
          <div class="w-full sm:w-1/2 xl:w-1/3">
            <div class="mx-0 mb-4 sm:ml-4 xl:mr-4">
              <div class="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                <p class="p-4 font-bold text-black text-md dark:text-white">
                  My Tasks
                  <span class="ml-2 text-sm text-gray-500 dark:text-gray-300">
                    (05)
                  </span>
                </p>
                <ul>
                  <li class="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                    <div class="flex items-center justify-start text-sm">
                      <span class="mx-4">01</span>
                      <span>Create wireframe</span>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="mx-4 text-gray-400 dark:text-gray-300"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </li>
                  <li class="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                    <div class="flex items-center justify-start text-sm">
                      <span class="mx-4">02</span>
                      <span>Dashboard design</span>
                      <span class="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                        3
                        <svg
                          width="15"
                          height="15"
                          fill="currentColor"
                          class="ml-1"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span class="flex items-center mx-4 text-gray-400 dark:text-gray-300">
                        3
                        <svg
                          width="15"
                          height="15"
                          class="ml-1"
                          fill="currentColor"
                          viewBox="0 0 384 512"
                        >
                          <path
                            d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="mx-4 text-gray-400 dark:text-gray-300"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </li>
                  <li class="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                    <div class="flex items-center justify-start text-sm">
                      <span class="mx-4">03</span>
                      <span>Components card</span>
                      <span class="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                        3
                        <svg
                          width="15"
                          height="15"
                          fill="currentColor"
                          class="ml-1"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="mx-4 text-gray-400 dark:text-gray-300"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </li>
                  <li class="flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 dark:border-gray-800">
                    <div class="flex items-center justify-start text-sm">
                      <span class="mx-4">04</span>
                      <span class="line-through">Google logo design</span>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 1024 1024"
                      class="mx-4 text-green-500"
                    >
                      <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </li>
                  <li class="flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 dark:border-gray-800">
                    <div class="flex items-center justify-start text-sm">
                      <span class="mx-4">05</span>
                      <span class="line-through">Header navigation</span>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 1024 1024"
                      class="mx-4 text-green-500"
                    >
                      <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </li>
                  <li class="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                    <div class="flex items-center justify-start text-sm">
                      <span class="mx-4">06</span>
                      <span>International</span>
                      <span class="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                        3
                        <svg
                          width="15"
                          height="15"
                          fill="currentColor"
                          class="ml-1"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span class="flex items-center mx-4 text-gray-400 dark:text-gray-300">
                        3
                        <svg
                          width="15"
                          height="15"
                          class="ml-1"
                          fill="currentColor"
                          viewBox="0 0 384 512"
                        >
                          <path
                            d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="mx-4 text-gray-400 dark:text-gray-300"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </li>
                  <li class="flex items-center justify-between py-3 text-gray-600 dark:text-gray-200">
                    <div class="flex items-center justify-start text-sm">
                      <span class="mx-4">07</span>
                      <span>Production data</span>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="mx-4 text-gray-400 dark:text-gray-300"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mx-0 mb-4 sm:ml-4 xl:mr-4">
              <div class="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                <div class="flex flex-wrap overflow-hidden">
                  <div class="w-full rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div class="text-xl font-bold text-left text-black dark:text-white">
                        Dec 2021
                      </div>
                      <div class="flex space-x-4">
                        <button class="p-2 text-white bg-blue-500 rounded-full">
                          <svg
                            width="15"
                            height="15"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                            ></path>
                          </svg>
                        </button>
                        <button class="p-2 text-white bg-blue-500 rounded-full">
                          <svg
                            width="15"
                            height="15"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="-mx-2">
                      <table class="w-full dark:text-white">
                        <tr>
                          <th class="px-2 py-3 md:px-3 ">S</th>
                          <th class="px-2 py-3 md:px-3 ">M</th>
                          <th class="px-2 py-3 md:px-3 ">T</th>
                          <th class="px-2 py-3 md:px-3 ">W</th>
                          <th class="px-2 py-3 md:px-3 ">T</th>
                          <th class="px-2 py-3 md:px-3 ">F</th>
                          <th class="px-2 py-3 md:px-3 ">S</th>
                        </tr>
                        <tr class="text-gray-400 dark:text-gray-500">
                          <td class="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                            25
                          </td>
                          <td class="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                            26
                          </td>
                          <td class="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                            27
                          </td>
                          <td class="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                            28
                          </td>
                          <td class="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                            29
                          </td>
                          <td class="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                            30
                          </td>
                          <td class="px-2 py-3 text-center text-gray-800 cursor-pointer md:px-3 hover:text-blue-500">
                            1
                          </td>
                        </tr>
                        <tr>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            2
                          </td>
                          <td class="relative px-1 py-3 text-center cursor-pointer hover:text-blue-500">
                            3
                            <span class="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-blue-500 rounded-full left-1/2"></span>
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            4
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            5
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            6
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            7
                          </td>
                          <td class="relative px-2 py-3 text-center cursor-pointer md:px-3 lg:px-3 hover:text-blue-500">
                            8
                            <span class="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-yellow-500 rounded-full left-1/2"></span>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            9
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            10
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            11
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            12
                          </td>
                          <td class="px-2 py-3 text-center text-white cursor-pointer md:px-3">
                            <span class="p-2 bg-blue-500 rounded-full">13</span>
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            14
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            15
                          </td>
                        </tr>
                        <tr>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            16
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            17
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            18
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            19
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            20
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            21
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            22
                          </td>
                        </tr>
                        <tr>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            23
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            24
                          </td>
                          <td class="relative px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            25
                            <span class="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-red-500 rounded-full left-1/2"></span>
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            26
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            27
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            28
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            29
                          </td>
                        </tr>
                        <tr>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            30
                          </td>
                          <td class="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            31
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mx-0 mb-4 sm:ml-4 xl:mr-4">
              <div class="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                <p class="font-bold text-black text-md dark:text-white">
                  Messages
                </p>
                <ul>
                  <li class="flex items-center my-6 space-x-2">
                    <a href="#" class="relative block">
                      <img
                        alt="profil"
                        src="/images/person/1.jpg"
                        class="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                    <div class="flex flex-col">
                      <span class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                        Charlie Rabiller
                      </span>
                      <span class="ml-2 text-sm text-gray-400 dark:text-gray-300">
                        Hey John ! Do you read the NextJS doc ?
                      </span>
                    </div>
                  </li>
                  <li class="flex items-center my-6 space-x-2">
                    <a href="#" class="relative block">
                      <img
                        alt="profil"
                        src="/images/person/5.jpg"
                        class="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                    <div class="flex flex-col">
                      <span class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                        Marie Lou
                      </span>
                      <span class="ml-2 text-sm text-gray-400 dark:text-gray-300">
                        No I think the dog is better...
                      </span>
                    </div>
                  </li>
                  <li class="flex items-center my-6 space-x-2">
                    <a href="#" class="relative block">
                      <img
                        alt="profil"
                        src="/images/person/6.jpg"
                        class="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                    <div class="flex flex-col">
                      <span class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                        Ivan Buck
                      </span>
                      <span class="ml-2 text-sm text-gray-400 dark:text-gray-300">
                        Seriously ? haha Bob is not a child !
                      </span>
                    </div>
                  </li>
                  <li class="flex items-center my-6 space-x-2">
                    <a href="#" class="relative block">
                      <img
                        alt="profil"
                        src="/images/person/7.jpg"
                        class="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                    <div class="flex flex-col">
                      <span class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                        Marina Farga
                      </span>
                      <span class="ml-2 text-sm text-gray-400 dark:text-gray-300">
                        Do you need that design ?
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
