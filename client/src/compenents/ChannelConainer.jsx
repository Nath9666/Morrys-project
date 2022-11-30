import React from "react";
import { Channel, useChatContext } from "stream-chat-react";

import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from "./";

function ChannelConainer({
  isCreating,
  setisCreating,
  isEditing,
  setisEditing,
  createType,
}) {
  const { channel } = useChatContext();

  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setisCreating={setisCreating} />
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="channel__container">
        <EditChannel setisEditing={setisEditing} />
      </div>
    );
  }

  return <div>ChannelConainer</div>;
}

export default ChannelConainer;
