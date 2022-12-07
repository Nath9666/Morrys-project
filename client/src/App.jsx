import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import {ChanelListContainer, ChannelConainer, Auth, NewProject} from "./compenents";

import "./App.css";
import "./Project.css"

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
  console.log(authToken);
  //if (!authToken) return <Auth />;

    /*
              <div className="app__wrapper">
              <Chat client={client} theme="team light">
                  <ChanelListContainer />

                  <ChannelConainer />
              </Chat>
              <button>Button</button>
          </div>

          <NewProject/>
     */

  return (
      <>
          <NewProject/>
      </>


  );
}

export default App;
