import React from "react";
import SearchBar from "./SearchBar";
import CopyTab from "./CopyTab";

import emoji_header_symbol_pairs from "../db/emoji_header_symbol_pairs.json";

const Header = ({
  scrollToBlock,
  blockHeaders,
  search,
  copyText,
  onWrite,
  onCopyClick,
}) => {
  return (
    <div class="flex flex-col sticky top-0 z-50 w-full">
      <div
        class="flex flex-row justify-between h-16 items-center align-middle"
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
              {emoji_header_symbol_pairs[header]}
            </button>
          ))}
        </div>
      </div>
      <div
        class="flex flex-row justify-between h-12 items-center align-middle bg-gray-100 bg-opacity-80 shadow-sm pl-12 pr-12 text-xl"
        style={{
          fontFamily: "Gill Sans, sans-serif",
        }}
      >
        <SearchBar search={search}></SearchBar>
        <CopyTab
          copyText={copyText}
          onWrite={onWrite}
          onCopyClick={onCopyClick}
        ></CopyTab>
      </div>
    </div>
  );
};

export default Header;
