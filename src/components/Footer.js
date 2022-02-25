import React from "react";

const Footer = () => {
  return (
    <footer
      class="flex flex-col w-full h-16 bottom-0 items-center align-middle justify-center"
      style={{ backgroundColor: "#5CE1E6" }}
    >
      <h1
        class="text-lg md:text-3xl items-center align-middle text-center h-12"
        style={{
          fontFamily: "Gill Sans, sans-serif",
        }}
      >
        Search, Copy and Paste Emojis - Online Emoji Keyboard
      </h1>
      <a class="text-white" href="/privacypolicy">
        Privacy Policy
      </a>
    </footer>
  );
};

export default Footer;
