import { Route, Routes } from "react-router-dom";
import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Details from "./components/details/Details";
import CreateGame from "./components/create/Create";

function App() {
    // const requester = async () => {
    //     const BASE_URL = "http://localhost:3000/register";

    //     const response = await fetch(BASE_URL);
    //     const result = await response.json();
    //     console.log(result);
    // };
    // requester();

    return (
        <>
            <Preloader />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/details" element={<Details />} />
                <Route path="/create" element={<CreateGame />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
