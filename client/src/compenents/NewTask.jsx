import React, {useState} from "react";
import TagsInput, {Tag, Tag_NameOrColor} from "./TagsInput";
import Checklist, {CheckedSubTask, CheckedItems_name} from "./Checklist";
import Form from "react-bootstrap/Form";


const initialState_Task = {
    TaskName: "NewTask1",
    DueDate: "",
    TaskDescription: "",
    files: [],
    tags: [new Tag("Nodejs",  "green"), new Tag("MongoDB",  "#000000")]
};


function NewTask() {
    const [Task_form, setTask_form] = useState(initialState_Task);
    const handleChange = (e) => {
        setTask_form({ ...Task_form, [e.target.name]: e.target.value });
    };
    const handleChange_addTab = (e) => {
        Task_form.files.push(e.target.value)
        //setTask_form({...Task_form,  [e.target.name]: [e.target.name].push(e.target.value)});
    }

    const RecupSelectedTags = (tags) => {
        setTask_form({ ...Task_form, tags: tags });
    };

    function SubmitNewProject(e) {
        e.preventDefault()
    }

    function CancelNewProject(e){

    }

    return <>
        <div className="auth__form-container_fields-content">
            <h1 className="h1_big">Creation of a new task</h1>
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

                <Form.Group className="mb-3  auth__form-container_fields-content_input" controlId="Textarea_NewProject_description">
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

                <Form.Group controlId="formFileMultiple" className="mb-3  auth__form-container_fields-content_input">
                    <Form.Label>Files of new task</Form.Label>
                    <Form.Control
                        name="files"
                        type="file"
                        onChange={handleChange_addTab}
                        multiple />
                </Form.Group>


                <TagsInput selectedTags={RecupSelectedTags}
                       tagsColor={Tag_NameOrColor(Task_form.tags,"color")}
                       tagsName={Tag_NameOrColor(Task_form.tags,"name")} />
                {console.log(Task_form)}
                <div className="auth__form-container_fields-content_button">
                    <button type="button"
                            className="button_CurrProj"
                            id={"button_CurrProj_dissolve"}
                            onClick={CancelNewProject}
                    >Cancel</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="submit" className="button_CurrProj">Confirm</button>
                </div>

            </form>

        </div>


    </>;
}

export default NewTask;

/*
    checklist: [new CheckedSubTask("Subtask1", false)],

    const RecupCheckList = (checklist) => {
        setTask_form({ ...Task_form, checklist: checklist });
    }

<div className={"Checklist_with_add&Remove"}>
                <Checklist checklist={CheckedItems_name(Task_form.checklist)} recupCheckList={RecupCheckList} />
                    <div id="Tags-input-name" className="auth__form-container_fields-content_input">
                        <label htmlFor="NameOfTag">New subtask</label>
                        <input
                            name="NameOfTag"
                            id="NameOfTag"
                            onKeyUp={event => event.key === " " ? Task_form.checklist.push(event) : null}
                            onChange={e => setTask_form([...Task_form, e.target.value])}
                            type="text"
                            placeholder="Press Space to add tag"
                        />
                    </div>
                    <div className="auth__form-container_fields-content_button">
                        <button type="button"
                                className="button_CurrProj"
                                id={"button_CurrProj_dissolve"}
                        >Remove</button>
                    </div>
                </div>
 */



