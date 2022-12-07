// TagsInput.jsx
import React from 'react'

const CSSForTagInput = `
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
}`

function TagsInput(props) {
    const [tags, setTags] = React.useState(props.tags);
    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    const addTags = event => {
        if (event.target.value !== "") {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    return (
        <>
        <style>{CSSForTagInput}</style>
            <label htmlFor="tag-input">List of tags</label>
            <div id="Tags-input" className="tags-input">
            <ul id="tags">
                {tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <span className='tag-close-icon'
                              onClick={() => removeTags(index)}
                        >x</span>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                onKeyUp={event => event.key === " " ? addTags(event) : null}
                placeholder="Press enter to add tags"
            />
        </div>
        </>
    );
}
/*

const [tag, setTag] = useState(initialState_NewTag)

    const handleChange = (e) => {
        setTag({ ...tag, [e.target.name]: e.target.value });
    };

        const SubmitNewTag = event => {
        if (event.target.value !== "") {
            setTags([...tags,  event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            console.log(tags)
            event.target.value = "";
        }
    };

    const SubmitNewTag2 = () => {
        if (tag.value !== "") {
            setTags([...tags,  tag.value]);
            props.selectedTags([...tags, tag.value]);
            console.log(tags)
            tag.value = "";
        }
    };

 <div className="FormOfNewTag">
                <form onSubmit={SubmitNewTag2}>
                    <input
                        name="NameOfTag"
                        onChange={handleChange}
                        type="text"
                        placeholder="Press enter to add tags"
                    />
                    <input
                        name="NameOfColor"
                        type="color"
                        onChange={handleChange}
                    />
                    <button type="submit">ADD</button>
                </form>
            </div>
 */


export default TagsInput;