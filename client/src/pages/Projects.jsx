import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListOfProject } from "../compenents";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [listOfProjects, setListOfProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/projects").then((response) => {
      setListOfProjects(response.data);
    });
  }, []);
  return (
    <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
      <div class="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
        <div class="w-full">
          {listOfProjects.map((value, key) => {
            return (
              <ListOfProject
                Name={value.name}
                NameCreator=""
                Image={value.image}
                id={value.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
