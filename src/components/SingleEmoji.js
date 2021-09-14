import { useState } from "react";

const SingleEmoji = ({ emoji, onCopy }) => {
  const [isHover, setHover] = useState(false);

  return (
    <div style={{ height: "50px", width: "50px" }}>
      <button
        title={emoji.name}
        style={{
          fontSize: "30px",
          fontFamily: "Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji",
          background: isHover ? "#DDDDDD" : "white",
          borderRadius: "8px",
          border: "transparent",
        }}
        onClick={() => onCopy(emoji.symbol)}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {emoji.symbol}
      </button>
      {/* {isHover && (
        <p title="regular tooltip" style={{ position: "absolute" }}>
          {emoji.name}
        </p>
      )} */}
    </div>
  );
};

export default SingleEmoji;
