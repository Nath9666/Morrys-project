import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import {Link,
} from "react-router-dom";

import {
    ChanelListContainer,
    ChannelConainer,
    Auth,
    Welcome,
    NewProject,
    CurrentProject, NewTask
} from "./compenents";

import "stream-chat-react/dist/css/index.css";
import "./App.css";
import "./index.css";
import "./Project.css";
import {Tag} from "./compenents/TagsInput";
import newProject from "./compenents/NewProject";

const cookies = new Cookies();

const apiKey = "chebs6ygangm";
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser(
    {
      id: cookies.get("userId"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      image: cookies.get("avatarURL"),
      hashedPassword: cookies.get("hashedPassword"),
      phoneNumber: cookies.get("phoneNumber"),
    },
    authToken
  );
}

const initialProject = {
    NomProject: "",
    Visibility: "",
    ProjectType: "",
    DescriptionProject: "",
    tags: []
};

function App() {

    const [createType, setCreateType] = useState("");
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [ProjectCreating, setIsProjectCreating] = useState(true)
    const [dataCurrentProject, setDataCurrentProject] = useState(initialProject)

    function RecupDatasNewProject(datas){
        setDataCurrentProject(datas);
        setIsProjectCreating(false);
        console.log(dataCurrentProject)
    }

    /*
    <CurrentProject NomProject="Project1"
                                    Visibility="private"
                                    ProjectType="research"
                                    DescriptionProject={"A description of project"}
                                    tags={[new Tag("Nodejs",  "green"), new Tag("MongoDB",  "#000000")]} />
     <NewProject/>

     if(ProjectCreating)
                return <NewProject ManipDatasNewProject={RecupDatasNewProject}/>

            return (
                <>
                    <CurrentProject props={dataCurrentProject} />
                </>
            );

     <NewTask/>
     */

    let Codeur = "Ethan"
    switch(Codeur){
        case "Ethan": {
            return <NewTask/>;

        }
        case "Nathan":{
            if (!authToken) return <Welcome />;
            return(
                <div className="app__wrapper">
                    <Chat client={client} theme="team light">
                        <ChanelListContainer
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType}
                            setIsEditing={setIsEditing}
                        />

                        <ChannelConainer
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            isEditing={isEditing}
                            setIsEditing={setIsEditing}
                            createType={createType}
                        />
                    </Chat>
                </div>
            );
        }
        default: document.write("Incorrect codeur");
    }
}
/*
    <Router>
        <Routes>
            <Route path="/" component={App}/>
            <Route path="/newProject" component={NewProject}/>
            <Route path="/currentProject" component={CurrentProject}/>
        </Routes>
    </Router>
    <App/>

                            <Link to="/newProject">New project</Link>
                        <Link to="/currentProject">Current project</Link>
 */

export default App;
