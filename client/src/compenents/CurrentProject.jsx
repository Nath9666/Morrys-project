import React, { useState } from "react";
import TagsInput, { Tag, Tag_NameOrColor } from "./TagsInput";
import { EditElementIcon, ValidationIcon } from "../assets";
import Form from "react-bootstrap/Form";

const CurrentProject = (props) => {
  const initialStateEditing = {
    edit_NomProject: false,
    edit_Visibility: false,
    edit_ProjectType: false,
    edit_DescriptionProject: false,
    edit_tags: false,
  };
  const [edit, setEdit] = useState(initialStateEditing);
  const [infosProjet, setInfosProjet] = useState(props);
  const handleChange = (e) => {
    setInfosProjet({ ...infosProjet, [e.target.name]: e.target.value });
  };

  const modifIcon = (nameEdit, valueEdit, idIcon, idElToFocus) => {
    return (
      <img
        src={valueEdit ? ValidationIcon : EditElementIcon}
        className="icon_edit"
        id={idIcon}
        alt={"Modify Item"}
        onClick={() => {
          setEdit({ ...edit, [nameEdit]: !valueEdit });
          document.getElementById(idElToFocus).focus();
        }}
      ></img>
    );
  };

  function ConfigEdition(VerifEditEl, elIfEdit, elIfNoEdit) {
    return VerifEditEl ? elIfEdit : elIfNoEdit;
  }

  const RecupSelectedTags = (tags) => {
    setInfosProjet({ ...infosProjet, tags: tags });
    console.log(infosProjet.tags);
  };

  return (
    <>
      <div
        className="Element_and_ModifIcon"
        id="Element_and_ModifIcon_NomProject"
      >
        {ConfigEdition(
          edit.edit_NomProject,
          <div className="auth__form-container_fields-content_input" id={""}>
            <input
              name="NomProject"
              id="CurrProj_Nom"
              type="text"
              placeholder="Project name"
              defaultValue={infosProjet.NomProject}
              onChange={handleChange}
              onKeyUp={(event) =>
                event.key === "Enter"
                  ? setEdit({ ...edit, edit_NomProject: !edit.edit_NomProject })
                  : null
              }
              required
            />
          </div>,
          <h1 className="h1_big">
            <strong>Project:</strong> {infosProjet.NomProject}
          </h1>
        )}
        {modifIcon(
          "edit_NomProject",
          edit.edit_NomProject,
          "icon_edit_NomProject",
          "CurrProj_Nom"
        )}
      </div>

      <div className="drop-downMenus">
        <div className="Element_and_ModifIcon">
          <Form.Select
            aria-label="ProjectType"
            name="ProjectType"
            id="CurrProj_Type"
            defaultValue={infosProjet.ProjectType}
            onChange={handleChange}
            disabled={!edit.edit_ProjectType}
            required
          >
            <option hidden value=""></option>
            <option value="code">Code</option>
            <option value="research">Research</option>
          </Form.Select>

          {modifIcon(
            "edit_ProjectType",
            edit.edit_ProjectType,
            "",
            "CurrProj_Type"
          )}
        </div>

        <div className="Element_and_ModifIcon">
          <Form.Select
            aria-label="Visibility"
            name="Visibility"
            id="CurrProj_Visibility"
            defaultValue={infosProjet.Visibility}
            onChange={handleChange}
            disabled={!edit.edit_Visibility}
            required
          >
            <option hidden value=""></option>
            <option value="private">Private</option>
            <option value="public">Public</option>
          </Form.Select>

          <img
            src={edit.edit_Visibility ? ValidationIcon : EditElementIcon}
            alt={"Modify Item"}
            className="icon_edit"
            onClick={() => {
              setEdit({ ...edit, edit_Visibility: !edit.edit_Visibility });
              document.getElementById("Project_Type").focus();
            }}
          ></img>
        </div>
      </div>

      <div className="Element_and_ModifIcon">
        <Form.Group
          className="mb-3  auth__form-container_fields-content_input"
          id="container_Textarea_CurrProject_description"
          controlId="Textarea_CurrProject_description"
        >
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="DescriptionProject"
            className="Textarea"
            type="textarea"
            placeholder="Description of project"
            defaultValue={infosProjet.DescriptionProject}
            disabled={!edit.edit_DescriptionProject}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {modifIcon(
          "edit_DescriptionProject",
          edit.edit_DescriptionProject,
          "icon_edit_DescriptionProject",
          "Description_projet"
        )}
      </div>
      <br />
      <TagsInput
        selectedTags={RecupSelectedTags}
        tagsColor={Tag_NameOrColor(infosProjet.tags, "color")}
        tagsName={Tag_NameOrColor(infosProjet.tags, "name")}
      />

      <div className="auth__form-container_fields-content_button">
        <button
          type="button"
          className="button_CurrProj"
          id={"button_CurrProj_dissolve"}
        >
          Dissolve
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="button_CurrProj">
          Join
        </button>
      </div>
    </>
  );
};

export default CurrentProject;
