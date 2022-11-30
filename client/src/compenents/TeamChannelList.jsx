import React from "react";

import { AddChannel } from "../assets";

const TeamChannelList = ({ childern, error = false, loading, type }) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error, please wait a moment and try again
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === "team" ? "Channels" : "Messages"} loading...
        </p>
      </div>
    );
  }
  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header"></div>
      <p className="team-channel-list__header__title">
        {type === "team" ? "Channels" : "Direct Message"}
      </p>
      {/*Button to add a channel to the team*/}
      {childern}
    </div>
  );
};

export default TeamChannelList;
