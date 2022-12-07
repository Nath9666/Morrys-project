// TagsInput.jsx
import React from 'react'

class Tag{
    nameTag;
    color;
    constructor(name, color){
        this.nameTag = name;
        this.color = color;
    }
}

function Tag_NameOrColor(Tags, TypeTagDatas){
    let TagsValues = []
    switch(TypeTagDatas){
        case "color": {
            Tags.forEach(tag => (TagsValues.push(tag.color)))
            break
        }
        case "name": {
            Tags.forEach(tag => (TagsValues.push(tag.nameTag)))
            break
        }
        default: console.log("Incorrect type of tag's data")
    }
    return TagsValues;

}

function TagsInput(props) {
    const [tagsColor, setTagsColor] = React.useState(props.tagsColor);
    const [tagsName, setTagsName] = React.useState(props.tagsName);

    function composedTagWithHisProps(){
        let TagsWithProps = [];
        for (let i = 0; i < tagsName.length; i++) {
            TagsWithProps.push(new Tag(tagsName[i], tagsColor[i]))
        }
        return TagsWithProps;
    }
    const [tags, setTags] = React.useState(composedTagWithHisProps());

    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
        props.selectedTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };

    const SubmitNewTag = event => {
        if (!event.target.value.startsWith(" ")){
            const newTag = new Tag(tagsName[tagsName.length-1], tagsColor[tagsColor.length-1])
            setTags([...tags,  newTag]);
            props.selectedTags([...tags, newTag]);
            event.target.value = "";
        }
    };

    return (
        <>
            <label htmlFor="Tag-Print">List of Tags</label>
            <div id="Tag-Print" className="tags-input">
                <ul id="tags">
                    {tags.map((tag, index) => (
                        <li key={index} style={{background: tag.color}} className="tag">
                            <span className='tag-title'>{tag.nameTag}</span>
                            <span className='tag-close-icon'
                                  onClick={() => removeTags(index)}
                            >x</span>
                        </li>

                    ))}
                </ul>

            </div>

            <div id="Tag-inputs">
                <div id="Tags-input-name" className="auth__form-container_fields-content_input">
                    <label htmlFor="NameOfTag">New tag</label>
                    <input
                        name="NameOfTag"
                        id="NameOfTag"
                        onKeyUp={event => event.key === " " ? SubmitNewTag(event) : null}
                        onChange={e => setTagsName([...tagsName, e.target.value])}
                        type="text"
                        placeholder="Press Space to add tag"
                    />
                </div>
                <input
                    id="Tags-input-color"
                    className="NameOfColor"
                    type="color"
                    onChange={e => setTagsColor([...tagsColor, e.target.value])}
                />
            </div>
        </>
    );
}

/*
- - - - Peut-être plus stable selon LL:
    const [tagsObjects, setTagsObjects] = React.useState(tags.map((tag, index) => ({ind: index, tagEl: tag})))

                {tagsObjects.map((tagsObjects) => (
                    <li style={{background: tagsObjects.tagEl.color}} key={tagsObjects.ind} className="tag">
                        <span className='tag-title'>{tagsObjects.tagEl.nameTag}</span>
                        <span className='tag-close-icon'
                              onClick={() => removeTags(tagsObjects.ind)}
                        >x</span>
                    </li>

                ))}
            setTagsObjects([...tagsObjects,  {ind: tagsObjects.length ,tagEl: newTag}])

 */



export default TagsInput;
export {Tag, Tag_NameOrColor};

