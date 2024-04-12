"use client";
import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="transparent" dark expand="md" container="sm">
                <NavbarBrand className="font-signature" href="/">Robin Swanson</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
    );
};

export default NavBar;
