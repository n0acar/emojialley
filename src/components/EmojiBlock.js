import { useState, useEffect } from "react";

import SingleEmoji from "./SingleEmoji";
import { Container, Row, Col } from "react-bootstrap";

const EmojiBlock = ({ header, emojis, onCopy }) => {
  const [emojiList, setEmojiList] = useState([]);

  useEffect(() => {
    var dummyEmojiList = [];
    const createEmojiList = () => {
      Object.keys(emojis).forEach((emojiSubgroup) =>
        Object.keys(emojis[emojiSubgroup]).forEach((emojiName) => {
          const emoji = {
            name: emojiName,
            symbol: emojis[emojiSubgroup][emojiName],
          };
          dummyEmojiList.push(emoji);
        })
      );
    };

    createEmojiList();
    setEmojiList(dummyEmojiList);
  }, [emojis]);

  const buildEmojiBlock = () => (
    <Container>
      <h1
        style={{
          fontFamily: "Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji",
          fontSize: "32px",
          fontFamily: "Arial",
        }}
      >
        {header}
      </h1>
      <Row
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fill, minmax(80px, 1fr))",
        }}
      >
        {emojiList.map((singleEmoji) => (
          <Col>
            <SingleEmoji emoji={singleEmoji} onCopy={onCopy}></SingleEmoji>
          </Col>
        ))}
      </Row>
    </Container>
  );

  return <div>{buildEmojiBlock()}</div>;
};

export default EmojiBlock;
