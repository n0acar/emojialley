import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";

import EmojiBlock from "./components/EmojiBlock";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CopyTab from "./components/CopyTab";

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
      <Header></Header>
      {/* <SearchBar search={searchEmoji}></SearchBar> */}
      {/* copyTabText && (
        <CopyTab copyText={copyTabText} onWrite={setCopyTabText}></CopyTab>
      )*/}
      <div
        style={{
          position: "absolute",
          top: "10%",
          width: "100%",
        }}
      >
        {Object.keys(emojisJson).map((emojiHeader) => (
          <EmojiBlock
            header={emojiHeader}
            emojis={emojisJson[emojiHeader]}
            onCopy={copyEmoji}
          ></EmojiBlock>
        ))}
      </div>
    </div>
  );
}

export default App;
