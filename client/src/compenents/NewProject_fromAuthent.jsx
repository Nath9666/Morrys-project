import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import {ProjectIcon} from "../assets";
import TagsInput from "./TagsInput";

const CSSNewProject = `
            .form-select {
            display: block;
            width: 50%;
            padding: 0.2rem 3rem 0.3rem 0.5rem;
            margin: 1rem 0;
            -moz-padding-start: calc(.75rem - 3px);
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            background-color: #fff;
            background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            background-size: 16px 12px;
            border: 1px solid #ced4da;
            border-radius: 0.375rem;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            -webkit-appearance: none;
            appearance: none;
        }`

const initialState = {
    NomProject: "Project1",
    Visibility: "",
    ProjectType: "",
    DescriptionProject: ""
};

function NewProject_fromAuthent() {
    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        const { NomProject, Description, password, phoneNumber, avatarURL } = form;
        const URL = "http://localhost:area5000/auth";
        window.location.reload();
    };

    const PrintSelectTags = (tags) => {
        console.log(tags);
    };

    return (
        <>
        <style>{CSSNewProject }</style>
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <h1 style={{color:"darkorange"}}>Creation of a new project</h1>
                    <form onSubmit={handleSubmit}>
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
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="Description">Description</label>
                            <input
                                name="Description"
                                type="textarea"
                                placeholder="Description"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Form.Select aria-label="Visibility"
                                     name="Visibility"
                                     onChange={handleChange}
                                     required>
                            <option>Choose the visibility</option>
                            <option value="private">Private</option>
                            <option value="public">Public</option>
                        </Form.Select>

                        <Form.Select aria-label="ProjectType"
                                     name="ProjectType"
                                     onChange={handleChange}
                                     required>
                            <option>Choose the type of project</option>
                            <option value="code">Code</option>
                            <option value="research">Research</option>
                        </Form.Select>

                        <TagsInput selectedTags={PrintSelectTags}  tags={['Nodejs', 'MongoDB']}/>

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
        </>
    );
    /*
                            <select className="newProj__form-container_fields-content_select"
                            name="Visibility"
                            aria-label="Visibility"
                            onChange={handleChange}
                            required
                        />
                        <option value="private">Private</option>
                        <option value="public">Public</option>

                        <select className="newProj__form-container_fields-content_select"
                            name="ProjectType"
                            aria-label="ProjectType"
                            onChange={handleChange}
                            required
                        />
                        <option value="code">Code</option>
                        <option value="research">Research</option>
     */
}

export default NewProject_fromAuthent;
