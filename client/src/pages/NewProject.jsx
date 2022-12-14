import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

const initialState = {
  name: "Project1",
  Visibility: "",
  Type: "2",
  description: "",
};

function NewProject(props) {
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const SubmitNewProject = async (e) => {
    e.preventDefault();
    const { name, Visibility, description, Type } = form;
    axios.post("http://localhost:3001/projects", form);
    window.location.replace("http://localhost:3000");
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
                  name="name"
                  type="text"
                  placeholder="Project name"
                  onChange={handleChange}
                  required
                />
              </div>

              <Form.Group
                className="mb-3  auth__form-container_fields-content_input"
                controlId="Textarea_NewProject_description"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
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

              <div className="auth__form-container_fields-content_button">
                <button type="submit"> Create new project </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProject;
