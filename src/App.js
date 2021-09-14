import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";

import EmojiBlock from "./components/EmojiBlock";
import CopyTab from "./components/CopyTab";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

import emojisJson from "./db/emojis.json";

function App() {
  const [copyTabText, setCopyTabText] = useState("");
  const [searchText, setSearchText] = useState("");

  const copyEmoji = (emojiSymbol) => {
    setCopyTabText(copyTabText + emojiSymbol);
  };

  const searchEmoji = (searchTabText) => {
    setSearchText(searchTabText);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      {copyTabText && <CopyTab copyText={copyTabText}></CopyTab>}
      {/* <SearchBar search={searchEmoji}></SearchBar> */}
      {Object.keys(emojisJson).map((emojiHeader) => (
        <EmojiBlock
          header={emojiHeader}
          emojis={emojisJson[emojiHeader]}
          onCopy={copyEmoji}
        ></EmojiBlock>
      ))}
    </div>
  );
}

export default App;
