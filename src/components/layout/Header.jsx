import React from 'react'
import pages from './../../utils/page';
import { Link, useLocation } from 'react-router-dom';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from "./assets/images/my_profile.jpg"

const navLinks = Array.from(pages.values()).filter(page=>page.anchorable);

const Header = () => {

  const {pathname} = useLocation();

  return (
    <header>
      <Navbar expand="lg" className="bg-light fixed-top">
        <Container>
            <Link to="/delicious_tour/" className='navbar-brand d-flex align-items-center text-dark'>
                <Image src={logo} width={50} className='rounded-circle' />
                <h3 className='display-6 ms-3 fw-bold'>Kaung Sat Hein</h3>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                {navLinks.map((navLink) =>
                    <Link key={navLink.name} className={pathname === navLink.path ? 'nav-link text-dark active' : 'nav-link text-dark'} to={navLink.path}>
                        {navLink.name}
                    </Link>
                )}
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header