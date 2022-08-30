import SHOP_DATA from "../../shop-data.json";
import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {SHOP_DATA.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
