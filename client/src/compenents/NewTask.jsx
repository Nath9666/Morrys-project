import React, { useState } from "react";
import TagsInput, { Tag, Tag_NameOrColor } from "./TagsInput";
import Form from "react-bootstrap/Form";

const initialState_Task = {
  TaskName: "NewTask1",
  DueDate: "",
  state: "false",
  TaskDescription: "",
};

function NewTask() {
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

  const RecupSelectedTags = (tags) => {
    setTask_form({ ...Task_form, tags: tags });
    console.log(Task_form.tags);
  };

  function SubmitNewProject() {}

  return (
    <>
      <div className="auth__form-container_fields-content">
        <h1 style={{ color: "darkorange" }}>Creation of a new task</h1>
        <form onSubmit={SubmitNewProject}>
          <div className="auth__form-container_fields-content_input">
            <label htmlFor="TaskName">Task name</label>
            <input
              name="TaskName"
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
              name="TaskDescription"
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
              name="DueDate"
              type="date"
              placeholder="Date of delivery"
              onChange={handleChange}
              required
            />
          </div>

          <Form.Group
            controlId="formFileMultiple"
            className="mb-3 auth__form-container_fields-content_input"
          >
            <Form.Label>Files of new task</Form.Label>
            <Form.Control
              name="files"
              type="file"
              onChange={handleChange_addTab}
              multiple
            />
          </Form.Group>

          <TagsInput
            selectedTags={RecupSelectedTags}
            tagsColor={Tag_NameOrColor(Task_form.tags, "color")}
            tagsName={Tag_NameOrColor(Task_form.tags, "name")}
          />
        </form>
        {console.log(Task_form)}
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
