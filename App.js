
// import Api from "./compenents2/Api";
import TestUseEffect from './compenents2/TestUseEffect';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
export default function App() {
    return (
        <div>
            <ul>

                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Product">Products</Link>
                </li>
                <li>
                    <Link to="/prices">prices</Link>
                </li>
            </ul>
            <TestUseEffect />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/product" element={<Products />}>
                    <Route path=":id" element={<Product/>}></Route>
                </Route>
                <Route path="/prices" element={<Prices />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}