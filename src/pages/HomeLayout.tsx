import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';

const HomeLayout = ()=> {
    return(
        <div className="container-xl px-4">
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default HomeLayout;