import NavBar from './NavBar';

const Header: React.FC = () => {
    return (
        <header id="main-header">
            <h4>Peak web design</h4>
            <img src="ghettokalashop.svg"></img>
            <NavBar/>
        </header>
    );
}

export default Header;