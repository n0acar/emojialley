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
      <Row>
        {emojiList.map((singleEmoji) => (
          <Col>
            <SingleEmoji emoji={singleEmoji} onCopy={onCopy}></SingleEmoji>
          </Col>
        ))}
      </Row>
    </Container>
  );

  return (
    <div>
      <h1>{header}</h1>
      {buildEmojiBlock()}
    </div>
  );
};

export default EmojiBlock;
