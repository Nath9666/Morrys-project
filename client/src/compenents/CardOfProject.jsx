import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Text } from "./";

const CardOfProject = ({
  Name,
  NameCreator,
  Type,
  Image,
  TaskDone,
  Tasks,
  Duedate,
  Visibility,
  Description,
  id,
}) => {
  var NameType;
  console.log(Type);
  switch (Type) {
    case false:
      NameType = (
        <Text
          Name="PROGRESS"
          ColorText="text-orange-500"
          ColorBg="bg-orange-200"
        />
      );
      break;
    case true:
      NameType = (
        <Text Name="COMPLETED" ColorText="text-white" ColorBg="bg-green-200" />
      );
      break;
    default:
      NameType = (
        <Text Name="IDEAS" ColorText="text-gray-500" ColorBg="bg-gray-200" />
      );
  }

  return (
    <div class="mb-4">
      <div class="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center">
            <span class="relative p-2">
              <img
                src={Image}
                alt="Project Logo"
                class="w-10 sm:w-20 rounded-xl"
              />
            </span>
            <div class="flex flex-col">
              <span class="ml-2 font-bold text-black text-md dark:text-white">
                {Name}
                <span class="font-extralight"> #{id} </span>
              </span>
              <span class="ml-2 text-sm text-gray-500 dark:text-white">
                {NameCreator}
              </span>
            </div>
          </div>
          <div class="flex items-center">
            <button class="p-1 border border-gray-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                class="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 1792 1792"
              >
                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
              </svg>
            </button>
            <button class="text-gray-200">
              <svg
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex items-center justify-between mb-4 space-x-12">
          <Text
            Name={Visibility}
            ColorText={
              Visibility === "Public"
                ? "text-green-400 bg-white border border-green-400"
                : "text-red-400 bg-white border border-red-400"
            }
            ColorBg={""}
          />
          {NameType}
        </div>
        <div class="block m-auto">
          <div>
            <span class="inline-block text-sm text-gray-500 dark:text-gray-100">
              {Description}
            </span>
          </div>
          <div class="w-full h-3 mt-2 rounded-full">
            <ProgressBar now={(TaskDone / Tasks) * 100} />
          </div>
        </div>
        <div class="flex items-center justify-start my-4 space-x-4">
          <Text
            Name={"DUE DATE : " + Duedate}
            ColorText="text-yellow-500"
            ColorBg="bg-yellow-100 w-36"
          />
        </div>
      </div>
    </div>
  );
};

export default CardOfProject;
