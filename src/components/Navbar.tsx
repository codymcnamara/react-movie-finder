import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = ()=> {
    const [isOpen, setOpen] = useState(false);

    const handleClick = () : void => {
        setOpen(!isOpen);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/' className='navbar-brand'>
                    Movie Finder
                </NavLink>
                <button 
                    onClick={ handleClick }
                    className="navbar-toggler" 
                    type="button" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded={ isOpen ? 'false' : 'true' }
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div 
                    className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} 
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <NavLink to='/' className='nav-link'  >
                            Home
                        </NavLink>
                        <NavLink to='/about' className='nav-link'>
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;