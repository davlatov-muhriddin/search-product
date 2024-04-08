import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ProductItem from "./components/ProductItem";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Search setSearchText={setSearchText} searchText={searchText} />
      <div className="product__card__container">
        {products
          .filter((item) =>
            searchText.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
}

export default App;
