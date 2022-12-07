import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Auth from "../compenents/Auth";
import NewProject from "../compenents/NewProject";
import {SearchIcon} from "../assets";
import TagsInput from "../compenents/TagsInput";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Auth">
                <Auth/>
            </ComponentPreview>
            <ComponentPreview
                path="/NewProject">
                <NewProject/>
            </ComponentPreview>
            <ComponentPreview path="/SearchIcon">
                <SearchIcon/>
            </ComponentPreview>
            <ComponentPreview path="/TagsInput">
                <TagsInput/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;