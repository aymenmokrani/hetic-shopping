import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import LandingPage from "./components/pages/LandingPage";
import { Route, Switch } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";
import CartPage from "./components/pages/CartPage";

function App() {
  const wishList = useSelector((state) => state.shoppingReducer.wishList);
  const cartList = useSelector((state) => state.shoppingReducer.cart);
  const products = useSelector((state) => state.shoppingReducer.products);

  return (
    <div className="App">
      <Navbar {...{ wishList, cartList, products }} />
      <Switch>
        <Route path="/" exact>
          <LandingPage {...{ products }} />
        </Route>
        <Route path="/product/:id">
          <ProductPage {...{ products }} />
        </Route>
        <Route path="/cart">
          <CartPage {...{ cartList }} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
