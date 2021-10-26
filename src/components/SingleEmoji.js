import { useState } from "react";

const SingleEmoji = ({ emoji, onCopy }) => {
  const [isHover, setHover] = useState(false);

  return (
    <div style={{ height: "50px", width: "40px", marginBottom: "16px" }}>
      <button
        class="hover:bg-gray-50 hover:bg-opacity-20 py-3 px-3 rounded hover:shadow text-2xl"
        title={emoji.name}
        style={{
          fontSize: "32px",
          fontFamily: "Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji",
          background: isHover ? "#DDDDDD" : "white",
          borderRadius: "8px",
          border: "transparent",
        }}
        onClick={() => {
          onCopy(emoji.symbol);
        }} //navigator.clipboard.writeText(emoji.symbol);
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
