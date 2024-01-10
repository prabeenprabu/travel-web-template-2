import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Service from "./components/pages/Service";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUP";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/service" Component={Service} />
                    <Route path="/products" Component={Products} />
                    <Route path="/sign-up" Component={SignUp} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
