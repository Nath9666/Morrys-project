import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Project = () => {
  let { id } = useParams();
  const [projectObject, setprojectObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/projects/byId/${id}`).then((response) => {
      setprojectObject(response.data);
    });
  });

  return (
    <div class="text-black dark:text-white">
      <div>{projectObject.name}</div>
      <div>{projectObject.description}</div>
      <div>{projectObject.Visibility}</div>
      <div>{projectObject.dueDate}</div>
      <img src={projectObject.image} alt="" />
    </div>
  );
};

export default Project;
