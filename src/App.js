import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";
import CartProvider from "./context/CartProvider";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <Layout>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
