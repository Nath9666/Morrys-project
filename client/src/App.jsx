import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChanelListContainer, ChannelConainer, Auth } from "./compenents";

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
  const [isCreating, setisCreating] = useState(false);
  const [isEditing, setisEditing] = useState(false);

  if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChanelListContainer
          isCreating={isCreating}
          setisCreating={setisCreating}
          setCreateType={setCreateType}
          setisEditing={setisEditing}
        />

        <ChannelConainer
          isCreating={isCreating}
          setisCreating={setisCreating}
          isEditing={isEditing}
          setisEditing={setisEditing}
          createType={createType}
        />
      </Chat>
    </div>
  );
}

export default App;
