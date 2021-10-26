import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect, useRef } from "react";

import EmojiBlock from "./components/EmojiBlock";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CopyTab from "./components/CopyTab";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emojisJson from "./db/emojis.json";

function App() {
  const refBlock = useRef(null);

  const [copyTabText, setCopyTabText] = useState("");
  const [searchText, setSearchText] = useState("");

  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(
      0,
      Object.keys(emojisJson).length
    );
    console.log(itemsRef);
  }, [Object.keys(emojisJson)]);

  const notify = (emojiSymbol) => toast(`${emojiSymbol} is copied!`);

  const copyEmoji = (emojiSymbol) => {
    setCopyTabText(copyTabText + emojiSymbol);
    console.log(copyTabText);
    //notify(emojiSymbol);
  };

  const searchEmoji = (searchTabText) => {
    setSearchText(searchTabText);
  };

  const scrollToBlock = (i) => {
    window.scrollTo(0, itemsRef.current[i].offsetTop);
  };

  return (
    <div>
      <ToastContainer />
      <Header
        scrollToBlock={scrollToBlock}
        blockHeaders={Object.keys(emojisJson)}
      ></Header>
      {/* <SearchBar search={searchEmoji}></SearchBar> */}
      <CopyTab copyText={copyTabText} onWrite={setCopyTabText}></CopyTab>
      <div
        class="absolute w-full"
        style={{
          top: "10%",
        }}
      >
        {Object.keys(emojisJson).map((emojiHeader, i) => (
          <EmojiBlock
            key={i}
            inRef={(emojiHeader) => (itemsRef.current[i] = emojiHeader)}
            header={emojiHeader}
            emojis={emojisJson[emojiHeader]}
            onCopy={copyEmoji}
          ></EmojiBlock>
        ))}
      </div>
      {/*<Footer></Footer>*/}
    </div>
  );
}

export default App;
