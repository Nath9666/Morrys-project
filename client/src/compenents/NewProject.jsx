import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { ProjectIcon } from "../assets";
import TagsInput, {Tag, Tag_NameOrColor} from "./TagsInput";
import CurrentProject from "./CurrentProject";
import axios from "axios";
import {Link} from "react-router-dom";


const initialState = {
  NomProject: "Project1",
  Visibility: "",
  ProjectType: "",
  DescriptionProject: "",
  tags: [new Tag("Nodejs",  "green"), new Tag("MongoDB",  "#000000")]
};


function NewProject(props) {
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const SubmitNewProject = async (e) => {
    e.preventDefault();
    const { NomProject, Visibility, ProjectType, DescriptionProject, tags } = form;
    const URL = "http://localhost:area5000/auth";
    console.log(form);
    props.ManipDatasNewProject({ NomProject, Visibility, ProjectType, DescriptionProject, tags } )
    /*
    ENREGISTREMENT BDD
     */

    /*
    NAVIGATION CURRENT PROJECT
     */

    //window.location.reload();

  };

  const RecupSelectedTags = (tags) => {
    setForm({ ...form, tags: tags });
    //form.tags = tags;
    console.log(form.tags);
  };

  return (
    <>
      <div className="auth__form-container">
        <div className="auth__form-container_fields">
          <div className="auth__form-container_fields-content">
            <h1 style={{ color: "darkorange" }}>Creation of a new project</h1>
            <form onSubmit={SubmitNewProject}>
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="NomProject">Project name</label>
                <input
                  name="NomProject"
                  type="text"
                  placeholder="Project name"
                  onChange={handleChange}
                  required
                />
              </div>

              <Form.Group className="mb-3  auth__form-container_fields-content_input" controlId="Textarea_NewProject_description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="DescriptionProject"
                    className={"Textarea"}
                    type="textarea"
                    placeholder="Description of project"
                    onChange={handleChange}
                    required
                />
              </Form.Group>

              <Form.Select
                aria-label="Visibility"
                name="Visibility"
                onChange={handleChange}
                required
              >
                <option value="">Choose the visibility</option>
                <option value="private">Private</option>
                <option value="public">Public</option>
              </Form.Select>

              <Form.Select
                aria-label="ProjectType"
                aria-labelledby="ProjectType"
                name="ProjectType"
                onChange={handleChange}
                required
              >
                <option value="">Choose the project's type</option>
                <option value="code">Code</option>
                <option value="research">Research</option>
              </Form.Select>

              <TagsInput selectedTags={RecupSelectedTags}
                         tagsColor={Tag_NameOrColor(form.tags,"color")}
                         tagsName={Tag_NameOrColor(form.tags,"name")} />

              <div className="auth__form-container_fields-content_button">
                <button type="submit"> Create new project </button>
              </div>
            </form>
          </div>
        </div>
        <div className="auth__form-container_image">
          <img src={ProjectIcon} alt="Create a project" />
        </div>
      </div>
      {console.log(form)}
    </>
  );
  /*
                    TextArea a config intéressante:
                        <Form.Label htmlFor="DescriptionProject">Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        id="DescriptionProject"
                        name="DescriptionProject"
                        onChange={handleChange}
                        placeholder="Leave a comment here"
                        style={{height: '100px'}}
                    />
     */
}

export default NewProject;
