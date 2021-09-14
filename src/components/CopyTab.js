const CopyTab = ({ copyText }) => {
  return (
    <text
      style={{
        position: "fixed",
        top: "0",
        right: "0",
        zIndex: "999",
        width: "25%",
        height: "23px",
        fontSize: "30px",
      }}
    >
      {copyText}
    </text>
  );
};

export default CopyTab;
