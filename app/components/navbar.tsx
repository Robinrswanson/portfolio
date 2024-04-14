"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavbarBrand,
    NavItem,
    NavLink,
} from 'reactstrap';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="transparent" dark expand="md" container="sm">
            <NavbarBrand className="font-signature text-center py-0">Robin Swanson</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/about'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Contact</NavLink>
                    </NavItem>
                    <NavItem className='flex sm:hidden'>
                        <Link href="https://github.com/robinrswanson" passHref>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <path fill="white" fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2" clipRule="evenodd"></path>
                        </svg>
                        </Link>
                        <Link href="https://www.linkedin.com/in/robinrswanson" passHref>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <path fill="white" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M8.339 18.337H5.667v-8.59h2.672zM7.003 8.574a1.548 1.548 0 1 1 0-3.096a1.548 1.548 0 0 1 0 3.096m11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277c-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387c2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                        </svg>
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;
