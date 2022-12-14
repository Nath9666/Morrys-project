import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Text, CardOfProject, ListOfTask } from "../compenents";

const DashBoard = () => {
  const [listOfProjects, setListOfProjects] = useState([]);
  const [listOfTask, setlistOfTask] = useState([]);

  const cookies = new Cookies();
  useEffect(() => {
    axios.get("http://localhost:3001/projects").then((response) => {
      setListOfProjects(response.data);
    });
    axios.get("http://localhost:3001/tasks").then((response) => {
      setlistOfTask(response.data);
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
                  src={cookies.get("avatarURL")}
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
                  Visibility={value.Visibility}
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
                </p>
                {listOfTask.map((value, key) => {
                  return (
                    <ListOfTask
                      Name={value.name}
                      description={value.description}
                      Image={value.image}
                      id={value.id}
                      dueDate={value.dueDate}
                      State={value.State}
                    />
                  );
                })}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
