import React from "react";
import SearchBar from "./SearchBar";
import CopyTab from "./CopyTab";

import emoji_header_symbol_pairs from "../../content/emoji_header_symbol_pairs.json";

const Header = ({
  scrollToBlock,
  blockHeaders,
  search,
  copyText,
  onWrite,
  onCopyClick,
}) => {
  return (
    <div
      class="flex flex-col sticky top-0 z-50 w-full"
      style={{
        backgroundColor: "#5CE1E6",
      }}
    >
      <div class="flex flex-row justify-between h-16 items-center align-middle">
        <img
          class="ml-6 lg:ml-20"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          src="logo.png"
          alt="emoji alley logo"
        />
        <div class="mr-6 lg:mr-20 lg:text-2xl text-xl hidden md:flex">
          {blockHeaders.map((header, i) => (
            <button
              class="p-3 hover:bg-gray-50 hover:bg-opacity-20 rounded hover:shadow"
              onClick={() => scrollToBlock(i)}
            >
              {emoji_header_symbol_pairs[header]}
            </button>
          ))}
        </div>
      </div>

      <div
        class="flex flex-row justify-between h-12 items-center align-middle bg-gray-100 bg-opacity-80 shadow-sm 
        pl-3 pr-3
        lg:pl-12 lg:pr-12
        text-sm 
        md:text-xl"
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
