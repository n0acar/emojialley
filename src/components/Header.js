import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "999",
        height: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "middle",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1>Emoji Alley 🎳</h1>
    </div>
  );
};

export default Header;
