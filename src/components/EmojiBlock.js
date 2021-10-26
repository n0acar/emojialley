import { useState, useEffect } from "react";

import SingleEmoji from "./SingleEmoji";
import { Container, Row, Col } from "react-bootstrap";

const EmojiBlock = ({ inRef, header, emojis, onCopy }) => {
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
      <div
        class="sticky top-16 bg-white"
        style={{
          fontFamily: "Gill Sans, sans-serif",
          fontSize: "32px",
        }}
      >
        {header}
      </div>
      <Row
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fill, minmax(70px, 1fr))",
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

  return <div ref={inRef}>{buildEmojiBlock()}</div>;
};

export default EmojiBlock;
