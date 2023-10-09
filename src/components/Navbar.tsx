import { NavLink } from "react-router-dom";

const NavBar = ()=> {
    return (
        <nav>
            <h1>Movie Finder</h1>
            <NavLink to='/' className='nav-link'>
                Home
            </NavLink>
            <NavLink to='/about' className='nav-link'>
                About
            </NavLink>
        </nav>
    )
}

export default NavBar;