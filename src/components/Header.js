import React from "react";

const Header = ({ scrollToBlock, blockHeaders }) => {
  return (
    <div
      class="flex justify-between fixed w-full z-50 h-16 items-center align-middle"
      style={{
        backgroundColor: "#5CE1E6",
      }}
    >
      <img
        style={{
          marginLeft: "6%",
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
        src="logo.png"
      />
      <div
        style={{
          marginRight: "6%",
        }}
      >
        {blockHeaders.map((header, i) => (
          <button
            class="hover:bg-gray-50 hover:bg-opacity-20 py-3 px-3 rounded hover:shadow text-2xl"
            onClick={() => scrollToBlock(i)}
          >
            {header.split(" ")[0]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
