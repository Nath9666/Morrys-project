import React from "react";

const Text = ({ Name, ColorText, ColorBg }) => {
  return (
    <span
      class={
        "flex items-center px-2 py-1 text-xs font-semibold " +
        ColorText +
        " " +
        ColorBg +
        " rounded-md"
      }
    >
      {Name}
    </span>
  );
};

export default Text;
