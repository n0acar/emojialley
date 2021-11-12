import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search }) => {
  return (
    <div class="flex flex-row w-full pl-10 pr-10 align-middle items-center">
      <FaSearch class="mr-2"></FaSearch>
      <input
        class="rounded w-full pl-1"
        type="search"
        placeholder="Search Emojis 😍"
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
