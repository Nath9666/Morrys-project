import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChanelListContainer, ChannelConainer, Auth } from "./compenents";

import "stream-chat-react/dist/css/index.css";
import "./App.css";

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

  if (!authToken) return <Auth />;
  console.log(isEditing);

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChanelListContainer
          isCreating={isCreating}
          setisCreating={setIsCreating}
          setCreateType={setCreateType}
          setisEditing={setIsEditing}
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

export default App;
