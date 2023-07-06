import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Container } from 'reactstrap';
import './Top.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../../pages/home/Home'

export default function Top(props) {
    return (
        <Router>
            <Navbar color="default" light expand="md" className='menu_top'>
                <Container>
                    <Nav className="ml-auto" navbar>
                        <NavbarBrand href="/">Logo</NavbarBrand>
                        <Nav className='menu_top_right'>
                            <NavItem>
                                <NavLink to="/yeu-thich/"><i className="fa-regular fa-heart"></i> Yêu Thích</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink to="/dang-nhap/"><i className="fa-regular fa-user"></i> Đăng Nhập</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink to="/dang-ky/"><i class="fa-solid fa-right-from-bracket"></i> Đăng Ký</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className='post_news' to="/dang-tin/">Đăng Tin Mới <i class="fa-solid fa-plus"></i></NavLink>
                            </NavItem>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                {/* <Route path="/" exact element={<Home />} /> */}
            </Routes>
        </Router>
    )
}

