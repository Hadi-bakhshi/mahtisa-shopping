import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";


const routes = [
  { path: "/profile", component: ProfilePage },
  { path: "/signup", component: SignupPage },
  { path: "/login", component: LoginPage },
  { path: "/checkout", component: Checkout },
  { path: "/cart", component: CartPage },
  { path: "/products", component: ProductsPage },
  { path: "/", exact: true, component: HomePage },
  {component:NotFoundPage}
];

export default routes;
