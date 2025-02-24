import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import store from "./redux/store";
import { fetchProducts } from "./redux/slice/productSlice";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); 


  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

// Wrap App with Provider
export default function WrappedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
