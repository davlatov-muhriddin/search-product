import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import ProductItem from "./components/ProductItem";
import Search from "./components/Search";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="container">
      <Search products={products} setProducts={setProducts} />
      <div className="product__card__container">
        {products ? (
          products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default App;
