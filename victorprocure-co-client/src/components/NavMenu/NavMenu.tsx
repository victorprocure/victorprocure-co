import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

import Logo from '../Logo';

export interface NavMenuState {
    isOpen: boolean;
}

const menuItems = [
    {
        displayName: 'Home',
        icon: 'home',
        link: '/'
    },
    {
        displayName: 'Services',
        icon: 'cloud',
        link: '/services'
    },
    {
        displayName: 'Projects',
        icon: 'dashboard',
        link: '/projects'
    },
    {
        displayName: 'Contact',
        icon: 'email',
        link: '/contact'
    }
];

export class NavMenu extends React.Component<{}, NavMenuState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    public render() {
        const items = menuItems
            .map(i => (
                <NavItem key={i.link}>
                    <NavLink
                        className="nav-link"
                        to={i.link}
                        exact={true}
                        activeClassName="active"
                        style={{ display: 'inline-flex' }}
                    ><i className="material-icons" style={{ paddingRight: 5 }}>{i.icon}</i> {i.displayName}
                    </NavLink>
                </NavItem>
            ));

        return (
            <Navbar color="dark" dark={true} expand="md" fixed="top">
                <NavbarBrand href="/">
                    <Logo large={false} />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar={true}>
                    <Nav className="mr-auto" navbar={true}>
                        {items}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }

    private toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
}