import { Link, useHistory } from "react-router-dom"

const NavBar: React.FC = () => {
    const history = useHistory();

    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
            <Link to="/additem">Eseme lisamine</Link>
            <Link to="/greeting">Greeting</Link>
            <Link to="/categories">Kategooriad</Link>
            <Link to="/addcategory">Kategooriate lisamine</Link>
            <img src="shopping-cart.svg" onClick={() => history.push('/cart')}></img>
        </nav>
    );
}

export default NavBar;