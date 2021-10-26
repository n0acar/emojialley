const CopyTab = ({ copyText, onWrite }) => {
  return (
    <div class="flex flex-row relative">
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
    </div>
  );
};

export default CopyTab;
