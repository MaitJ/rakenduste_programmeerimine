import { Link } from "react-router-dom"

const NavBar: React.FC = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
            <Link to="/greeting">Greeting</Link>
        </nav>
    );
}

export default NavBar;