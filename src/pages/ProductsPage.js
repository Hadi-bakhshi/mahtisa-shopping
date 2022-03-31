import { useCart, useCartActions } from "../context/CartProvider";
import { checkInCart } from "../utils/checkInCart";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { getProducts } from "../services/getProductsService";
import "./productsPage.css";

const ProductsPage = () => {
  const [data, setData] = useState(null);
  const { cart } = useCart();
  const dispatch = useCartActions();

  const addToCartHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart`, { duration: 2000 });
    addToLocalStorage(product);
  };

  // add to local storage
  const addToLocalStorage = (product) => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    const newData = [...data, product];
    localStorage.setItem("cart", JSON.stringify(newData));
  };

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await getProducts();
        setData(data);
      } catch (error) {
        toast.error("Opps, something went wrong");
      }
    };
    getAllProducts();
  }, []);

  if (!data)
    return (
      <main className="productList--main">
        <p>Loading...</p>
      </main>
    );

  return (
    <main className="productList--main">
      <section className="productsList--section">
        {data &&
          data.map((product) => {
            return (
              <section className="product--section" key={product.id}>
                <div className="productImage--container">
                  <img
                    className="productImg"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="desc-btn">
                  <div className="productDescription">
                    <p className="p-desc">{product.name}</p>
                    <p className="p-price">$ {product.price}</p>
                  </div>
                  <div className="addBtn-container">
                    <button
                      style={{ width: "90%" }}
                      className="btn primary"
                      onClick={() => addToCartHandler(product)}
                    >
                      {checkInCart(cart, product) ? "In cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
      </section>
    </main>
  );
};

export default ProductsPage;
