import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

function Search({ products, setProducts }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);

    const searchedProduct = products.filter((product) => {
      return product.title.toLowerCase().includes(searchText);
    });

    setProducts(searchedProduct);
  };

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <div className="search">
      <input type="text" value={searchText} onChange={handleSearch} />
      <button onClick={handleClear}>
        <IoMdCloseCircle className="clear__icon" />
      </button>
    </div>
  );
}

export default Search;
