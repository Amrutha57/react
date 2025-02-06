import "../css/Navbar.css"

import { Link } from "react-router-dom"

function Navbar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to='/'>Movie App</Link>
        </div>
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/favorites' className="nav-link">Favorite</Link>
    </nav>
}
export default Navbar