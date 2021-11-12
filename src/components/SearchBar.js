import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search }) => {
  return (
    <div class="flex flex-row w-full lg:pl-10 lg:pr-10 pl-1 pr-1 align-middle items-center">
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
