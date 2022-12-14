import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListOfTask } from "../compenents";

const Tasks = () => {
  const [listOfTasks, setListOfTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/tasks").then((response) => {
      setListOfTasks(response.data);
    });
  }, []);
  return (
    <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
      <div class="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
        <div class="w-full">
          {listOfTasks.map((value, key) => {
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
    </div>
  );
};

export default Tasks;
