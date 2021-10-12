import React, { useState, useEffect } from 'react';
import { Nav, Navbar, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import './nav.scss';

export default function Home() {

    // nav respons
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    // ...

    // nav fixed of scroll
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let x = ['navbar'];
    if (scrolled) {
        x.push('fixed');
    }
    // ...

    return (
        <>  
            <span className="navbar-allPage">
            <Navbar className={x.join(" ")} light expand="lg">
                <Link to="/" className="navbar-brand">
                    WEB<b>LAB</b>UZ
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav>
                        <NavItem>
                            <Link to="/">G'oya</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/labs">Labaratoriyalar</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/news">Yangiliklar</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact">Muloqot</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about">Ma'lumot</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </span>
        </>
    )
}
