import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import {
    ChanelListContainer,
    ChannelConainer,
    Auth,
    Welcome,
    NewProject,
} from "./compenents";

import "stream-chat-react/dist/css/index.css";
import "./App.css";
import "./index.css";
import "./Project.css";

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

function App() {

    const [createType, setCreateType] = useState("");
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    let Codeur = "Ethan"
    switch(Codeur){
        case "Ethan": {
            return (
                <>
                    <NewProject/>
                </>

            );
        }
        case "Nathan":{
            if (!authToken) return <Welcome />;
            <Auth />;
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

export default App;
