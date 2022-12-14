import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NewTask, ListOfTask } from "../compenents";

const Project = () => {
  let { id } = useParams();
  const [projectObject, setprojectObject] = useState({});
  const [TasksProject, settasksProject] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/projects/byId/${id}`).then((response) => {
      setprojectObject(response.data);
    });

    axios.get(`http://localhost:3001/tasks/${id}`).then((response) => {
      settasksProject(response.data);
    });
  });

  return (
    <div class="text-black dark:text-white w-full flex">
      <div>{projectObject.name}</div>
      <div>{projectObject.description}</div>
      <div>{projectObject.Visibility}</div>
      <div>{projectObject.dueDate}</div>
      <img src={projectObject.image} alt="" />
      <NewTask id={id} />
      {TasksProject.map((task, key) => {
        return (
          <ListOfTask
            Name={task.name}
            description={task.description}
            Image={task.image}
            id={task.id}
            dueDate={task.dueDate}
            State={task.State}
          />
        );
      })}
    </div>
  );
};

export default Project;
