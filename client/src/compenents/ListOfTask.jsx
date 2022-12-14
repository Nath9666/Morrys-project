import React, { useState } from "react";
import { Text } from "./";
import { useHistory } from "react-router-dom";

const ListOfTask = ({ Name, description, dueDate, id, State }) => {
  let history = useHistory();
  const TickGreen = () => {
    return (
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
    );
  };
  const TickGray = () => {
    return (
      <div onClick={(State = !State)}>
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
      </div>
    );
  };
  const [actualState, setActualState] = useState(State);

  return (
    <div class="mb-4">
      <div class="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center">
            <div class="flex flex-col">
              <span class="ml-2 font-bold text-black text-md dark:text-white">
                {Name}
                <span class="font-extralight"> #{id} </span>
              </span>
              <span class="ml-2 text-sm text-gray-500 dark:text-white">
                {description}
              </span>
              <span class="ml-2 text-sm text-gray-500 dark:text-white">
                {dueDate}
              </span>
              <div>{actualState === true ? <TickGreen /> : <TickGray />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfTask;
