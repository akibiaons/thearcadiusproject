import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriterText = () => {
  return (
    <Typewriter
      options={{
        strings: ["Hello, my name is..", "const arthur = (name, passion)"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriterText;
