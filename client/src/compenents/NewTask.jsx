import React, { useState } from "react";
import TagsInput, { Tag, Tag_NameOrColor } from "./TagsInput";
import Form from "react-bootstrap/Form";
import axios from "axios";

const initialState_Task = {
  name: "NewTask1",
  dueDate: "",
  State: "false",
  description: "",
};

function NewTask({ id }) {
  const [Task_form, setTask_form] = useState(initialState_Task);
  const handleChange = (e) => {
    setTask_form({ ...Task_form, [e.target.name]: e.target.value });
  };
  const handleChange_addTab = (e) => {
    setTask_form({
      ...Task_form,
      [e.target.name]: e.target.name.push(e.target.value),
    });
  };

  const SubmitNewProject = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/tasks", { Task_form, ProjectId: id });
    window.location.replace("http://localhost:3000");
  };

  return (
    <>
      <div className="auth__form-container_fields-content">
        <h1 style={{ color: "darkorange" }}>Creation of a new task</h1>
        <form onSubmit={SubmitNewProject}>
          <div className="auth__form-container_fields-content_input">
            <label htmlFor="TaskName">Task name</label>
            <input
              name="name"
              type="text"
              placeholder="Name of new task"
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
              placeholder="Description of Task"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="auth__form-container_fields-content_input">
            <label htmlFor="DueDate">Due date</label>
            <input
              name="dueDate"
              type="date"
              placeholder="Date of delivery"
              onChange={handleChange}
              required
            />
          </div>
        </form>
      </div>

      <div className="auth__form-container_fields-content_button">
        <button
          type="button"
          className="button_CurrProj"
          id={"button_CurrProj_dissolve"}
        >
          Cancel
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="button_CurrProj">
          Confirm
        </button>
      </div>
    </>
  );
}

export default NewTask;
