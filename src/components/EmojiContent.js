import React from "react";
import EmojiBlock from "./EmojiBlock";

import { useState, useEffect, useRef } from "react";

const EmojiContent = (emojisJson, itemsRef, copyEmoji) => {
  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(
      0,
      Object.keys(emojisJson).length
    );
    console.log(itemsRef);
  }, []);
  {
    console.log(emojisJson);
  }
  return (
    <div class="sticky top-0 w-full relative flex flex-col">
      {Object.keys(emojisJson).map((emojiHeader, i) => (
        <EmojiBlock
          key={i}
          inRef={(emojiHeader) => ({ itemsRef }.current[i] = emojiHeader)}
          header={emojiHeader}
          emojis={emojisJson[emojiHeader]}
          onCopy={copyEmoji}
        ></EmojiBlock>
      ))}
    </div>
  );
};

export default EmojiContent;
