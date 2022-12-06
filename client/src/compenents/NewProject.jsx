import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Button} from "react-bootstrap";
import {useState} from "react";

//             width: 100%;
const CSSNewProject = `
            .form-select {
            display: block;
            padding: 0.2rem 3rem 0.3rem 0.5rem;
            margin: 1rem 1rem;
            -moz-padding-start: calc(.75rem - 3px);
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            background-color: #fff;
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            background-size: 16px 12px;
            border: 1px solid #ced4da;
            border-radius: 0.375rem;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            -webkit-appearance: none;
            appearance: none;
        }
.form-control {
    display: block;
    padding: 0.2rem 3rem 0.3rem 0.5rem;
    margin: 0.2rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.form-label {
    margin-left: 1rem;
}
`;

    const initialState = {
        NomProject: "Project1",
        Visibility: "",
        ProjectType: "",
        DescriptionProject: ""
    };

    function NewProject() {
        const [form, setForm] = useState(initialState);
        const handleChange = (e) => {
            setForm({...form, [e.target.name]: e.target.value});
        };
        const CreationNewProject = async (event) => {
            // Make creation of project here after submission of forms
            event.preventDefault();
            console.log(form);
        };
        /*
                            aria-describedby="passwordHelpBlock"
                    <Form.Text id="passwordHelpBlock" muted>
                    choisissez le nom du projet.
                </Form.Text>
         */

        /*
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Project's name"
                    className="mb-3" >
                    <Form.Control
                        type="text"
                        defaultValue="Project1"
                        placeholder="nameExample"
                    />
                    </FloatingLabel>
         */
        return (
            <>
                <style> {CSSNewProject} </style>
                <h1>Creation of new project</h1>

                <Form onSubmit={CreationNewProject}>
                    <Form.Label htmlFor="NomProject">Nom </Form.Label>
                    <Form.Control
                        type="text"
                        name="NomProject"
                        id="NomProject"
                        onChange={handleChange}
                        defaultValue="Project1"
                    />

                    <Form.Select aria-label="Visibility"
                                 name="Visibility"
                                 onChange={handleChange}
                                 required>
                        <option>Choose the visibility ↓</option>
                        <option value="private">Private</option>
                        <option value="public">Public</option>
                    </Form.Select>

                    <Form.Select aria-label="ProjectType"
                                 name="ProjectType"
                                 onChange={handleChange}
                                 required>
                        <option>Choose the type of project ↓</option>
                        <option value="code">Code</option>
                        <option value="research">Research</option>
                    </Form.Select>

                    <Form.Label htmlFor="DescriptionProject">Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        id="DescriptionProject"
                        name="DescriptionProject"
                        onChange={handleChange}
                        placeholder="Leave a comment here"
                        style={{height: '100px'}}
                    />

                    <Button type="submit">Submit form</Button>
                </Form>

            </>

        );
    }

export default NewProject;