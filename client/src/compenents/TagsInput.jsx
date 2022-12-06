// TagsInput.jsx
import React from "react";

const CSSForTagInput = `Pug SCSS BabelResult Skip Results Iframe
EDIT ON
@import url("https://fonts.googleapis.com/css?family=Overpass");

* {
  box-sizing: border-box;
  font-family: "Overpass", sans-serif;
}

body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Overpass", sans-serif;
}

.tags-input {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;
  &:focus-within {
    border: 1px solid #0052cc;
  }
  input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    &:focus {
      outline: transparent;
    }
  }
}

#tags {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
}

.tag {
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  border-radius: 6px;
  margin: 0 8px 8px 0;
  background: #0052cc;
  }
  .tag .tag-title {
    margin-top: 3px;
  }
  
  .tag .tag-close-icon {
    display: block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 14px;
    margin-left: 8px;
    color: #0052cc;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }

@media screen and (max-width: 567px) {
  .tags-input {
    width: calc(100vw - 32px);
  }
}`;
const selectedTags = (tags) => {
  console.log(tags);
};

function TagsInput(props) {
  const [tags, setTags] = React.useState(props.tags);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <>
      <style>{CSSForTagInput}</style>
      <div className="tags-input">
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onKeyDown={(event) => (event.key === " " ? addTags(event) : null)}
          placeholder="Press enter to add tags"
        />
      </div>
    </>
  );
}

export default TagsInput;
