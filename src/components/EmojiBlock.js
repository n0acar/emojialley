import React, { useState, useEffect } from "react";

import SingleEmoji from "./SingleEmoji";

const EmojiBlock = ({ inRef, header, emojis, onCopy }) => {
  const [emojiList, setEmojiList] = useState(emojis);

  useEffect(() => {
    var dummyEmojiList = [];
    const createEmojiList = () => {
      emojis.forEach((emoji) => {
        dummyEmojiList.push(emoji);
      });
    };

    createEmojiList();
    setEmojiList(dummyEmojiList);
  }, [emojis]);

  const buildEmojiBlock = () => (
    <div class="md:mx-16 my-2">
      {header && (
        <h1
          class="sticky bg-white"
          style={{
            fontFamily: "Gill Sans, sans-serif",
            fontSize: "32px",
          }}
        >
          {header}
        </h1>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fill, minmax(70px, 1fr))",
        }}
      >
        {emojiList.map((singleEmoji) => (
          <SingleEmoji emoji={singleEmoji} onCopy={onCopy}></SingleEmoji>
        ))}
      </div>
    </div>
  );

  return <div ref={inRef}>{buildEmojiBlock()}</div>;
};

export default EmojiBlock;
