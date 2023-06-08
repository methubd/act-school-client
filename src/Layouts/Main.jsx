import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import useAuth from "../Hooks/useAuth";


const Main = () => {
    const location = useLocation()
    const {loading} = useAuth()

    const noHeaderFooter = location.pathname.includes("*") || loading

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;