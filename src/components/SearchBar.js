const SearchBar = ({ search }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Emojis"
        onChange={(e) => search(e.target.value)}
      />
      <span>Search</span>
    </div>
  );
};

export default SearchBar;
