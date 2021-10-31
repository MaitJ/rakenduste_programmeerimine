import { Menu } from 'antd';
import {Link, useHistory} from 'react-router-dom';
import { Header } from 'antd/lib/layout/layout';
import {useContext, useState} from 'react';
import {Context} from '../store';
import {logoutUser} from '../store/actions';

interface NavbarLink {
    id: number,
    to: string,
    name: string
}

export const defLinks: NavbarLink[] = [
    {
        id: 1,
        to: "/",
        name: "Home"
    },
    {
        id: 2,
        to: "/posts",
        name: "Postitused"
    },
];

export const loggedInLinks: NavbarLink[] = [
    {
        id: 3,
        to: "/addpost",
        name: "Postituste lisamine"
    },
]

export const loggedOutLinks: NavbarLink[] = [
    {
        id: 3,
        to: '/login',
        name: 'Logi sisse'
    },
    {
        id: 4,
        to: '/register',
        name: 'Registreeri'
    }
]


const MyHeader: React.FC = () => {
    const [links] = useState<NavbarLink[]>(defLinks);
    const [state, dispatch] = useContext(Context);
    const history = useHistory();
    
    const handleLogout = () => {
        dispatch(logoutUser());
        history.push('/');
    }

    return (
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                {links.map((link) => {
                    return <Menu.Item key={link.id}><Link to={link.to}>{link.name}</Link></Menu.Item>
                })}
            {state.auth.token ? 
            loggedInLinks.map((link) => {
                return <Menu.Item key={link.id}><Link to={link.to}>{link.name}</Link></Menu.Item>
            })
             : 
            loggedOutLinks.map((link) => {
                return <Menu.Item key={link.id}><Link to={link.to}>{link.name}</Link></Menu.Item>
            })
            }
            {state.auth.token && <Menu.Item key={4} onClick={handleLogout}>Logi valja</Menu.Item>}
            </Menu>
        </Header>
    );
}

export default MyHeader;