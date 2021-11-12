import { FaRegCopy } from "react-icons/fa";

const CopyTab = ({ copyText, onWrite, onCopyClick }) => {
  return (
    <div class="flex flex-row w-full pl-10 pr-10 align-middle items-center">
      <input
        class="rounded w-full pl-1"
        placeholder="Click on an Emoji 😃"
        value={copyText}
        type="text"
        onChange={(e) => {
          onWrite(e.target.value);
        }}
      />
      <button
        disabled={copyText.length === 0}
        onClick={() => {
          navigator.clipboard.writeText(copyText);
          onCopyClick(copyText);
        }}
      >
        <FaRegCopy class="ml-2" />
      </button>
    </div>
  );
};

export default CopyTab;
