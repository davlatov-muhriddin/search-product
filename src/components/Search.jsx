import { IoMdCloseCircle } from "react-icons/io";

function Search({ searchText, setSearchText }) {
  return (
    <div className="search">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchText ? (
        <button onClick={() => setSearchText("")}>
          <IoMdCloseCircle className="clear__icon" />
        </button>
      ) : null}
    </div>
  );
}

export default Search;
