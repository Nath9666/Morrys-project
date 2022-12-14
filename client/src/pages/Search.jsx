import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [listOfProjectsPublic, setListOfProjectsPublic] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/projects/public").then((response) => {
      setListOfProjectsPublic(response.data);
    });
  }, []);

  return (
    <div
      role="status"
      class="p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 dark:divide-gray-700 md:p-6 dark:border-gray-700"
    >
      {listOfProjectsPublic.map((value, key) => {
        return (
          <>
            <div class="flex justify-between items-center">
              <div>
                <div class="h-auto bg-gray-300 dark:bg-gray-600 w-24 mb-2.5">
                  <p class="text-black dark:text-white p-2">{value.name}</p>
                </div>
                <div class="w-32 auto bg-gray-200 dark:bg-gray-700">
                  <p class="text-black dark:text-white p-2">{value.dueDate}</p>
                </div>
              </div>
              <div class="h-auto w-auto bg-gray-300 dark:bg-gray-700">
                <p class="text-black dark:text-white p-2">
                  {value.Type === true ? "Completed" : "PROGRESS"}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Search;
