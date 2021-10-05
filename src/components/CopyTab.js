const CopyTab = ({ copyText, onWrite }) => {
  return (
    <>
      <input
        value={copyText}
        type="text"
        onChange={(e) => {
          onWrite(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          navigator.clipboard.writeText(copyText);
        }}
      >
        COPY
      </button>
    </>
  );
};

export default CopyTab;
