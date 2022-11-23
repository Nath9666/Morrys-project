import React from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChanelListContainer, ChannelConainer } from "./compenents";

import "./App.css";

const apiKey = "gh79697km7mu";

const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChanelListContainer />

        <ChannelConainer />
      </Chat>
    </div>
  );
}

export default App;
