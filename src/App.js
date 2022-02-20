import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect, useRef } from "react";

import EmojiBlock from "./components/EmojiBlock";

import Header from "./components/Header";
import Footer from "./components/Footer";

import ReactGATracker from "./third-party/ReactGATracker";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emojisJson from "./db/emojis.json";

function App() {
  ReactGATracker();

  const [copyTabText, setCopyTabText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentEmojiDict, setCurrentEmojiDict] = useState(emojisJson);

  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(
      0,
      Object.keys(currentEmojiDict).length
    );
  }, [Object.keys(currentEmojiDict)]);

  useEffect(() => {
    if (searchText.length >= 2) {
      var searchEmojiDict = {};
      searchEmojiDict[searchText] = searchAllEmojis();
      setCurrentEmojiDict(searchEmojiDict);
    } else {
      setCurrentEmojiDict(emojisJson);
    }
  }, [searchText]);

  const searchAllEmojis = () => {
    var filteredEmojis = [];
    Object.values(emojisJson).forEach((emojis) => {
      const batchFilteredEmojis = emojis.filter(
        (emoji) =>
          emoji.name.toLowerCase().includes(searchText) ||
          emoji.keywords.toLowerCase().includes(searchText)
      );
      filteredEmojis = filteredEmojis.concat(batchFilteredEmojis);
    });
    const cmp = (a, b) => (a > b) - (a < b);
    const nameEqualsSearchText = (e) => e.name.toLowerCase() === searchText;
    const nameIncludesSearchText = (e) =>
      e.name.toLowerCase().includes(searchText);
    const keywordsIncludesSearchText = (e) =>
      e.keywords.toLowerCase().includes(searchText);
    const indexKeywordSearchText = (e) =>
      e.keywords.toLowerCase().search(searchText);
    const sortedEmojis = filteredEmojis.sort((emoji1, emoji2) => {
      {
        return (
          cmp(nameEqualsSearchText(emoji2), nameEqualsSearchText(emoji1)) ||
          cmp(nameIncludesSearchText(emoji2), nameIncludesSearchText(emoji1)) ||
          cmp(
            keywordsIncludesSearchText(emoji2),
            keywordsIncludesSearchText(emoji1)
          ) ||
          cmp(indexKeywordSearchText(emoji1), indexKeywordSearchText(emoji2))
        );
      }
    });
    return sortedEmojis;
  };

  const notify = (emojiSymbol) => toast(`${emojiSymbol} is copied!`);

  const copyEmoji = (emojiSymbol) => {
    setCopyTabText(copyTabText + emojiSymbol);
  };

  const searchEmoji = (searchTabText) => {
    setSearchText(searchTabText.toLowerCase());
  };

  const scrollToBlock = (i) => {
    if (typeof window !== `undefined`) {
      window.scrollTo(0, itemsRef.current[i].offsetTop);
    }
  };

  return (
    <div class="flex flex-col min-h-screen h-full">
      <ToastContainer
        autoClose={2000}
        closeButton={false}
        hideProgressBar={true}
        transition={Flip}
      />
      <Header
        scrollToBlock={scrollToBlock}
        blockHeaders={Object.keys(currentEmojiDict)}
        search={searchEmoji}
        copyText={copyTabText}
        onWrite={setCopyTabText}
        onCopyClick={notify}
      ></Header>
      {/* <SearchBar search={searchEmoji}></SearchBar> */}
      {/*<CopyTab copyText={copyTabText} onWrite={setCopyTabText}></CopyTab>*/}
      <div class="w-full relative flex flex-col mb-auto">
        {Object.keys(currentEmojiDict).map((emojiHeader, i) => (
          <EmojiBlock
            key={i}
            inRef={(emojiHeader) => (itemsRef.current[i] = emojiHeader)}
            header={emojiHeader}
            emojis={currentEmojiDict[emojiHeader]}
            onCopy={copyEmoji}
          ></EmojiBlock>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
