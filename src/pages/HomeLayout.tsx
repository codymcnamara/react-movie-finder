import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';

const HomeLayout = ()=> {
    return(
        <>
            <Navbar/>
            <div className="container-xl px-4">
                <Outlet/>
            </div>
        </>

    )
}
export default HomeLayout;