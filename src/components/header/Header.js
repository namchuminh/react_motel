import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Container, Row, Col, Input, Button } from 'reactstrap';
import './Header.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../../pages/home/Home'

export default function Header(props) {
    return (
        <Router>
            <Navbar color="primary" light expand="md" >
                <Container>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className='text-white' style={{ fontWeight: 'bold' }} to="/">Trang Chủ</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='text-white' style={{ fontWeight: 'bold' }} to="/about">Cho Thuê Phòng Trọ</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='text-white' style={{ fontWeight: 'bold' }} to="/contact">Nhà Cho Thuê</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='text-white' style={{ fontWeight: 'bold' }} to="/contact">Cho Thuê Căn Hộ</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='text-white' style={{ fontWeight: 'bold' }} to="/contact">Cho Thuê Mặt Bằng</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='text-white' style={{ fontWeight: 'bold' }} to="/contact">Tin Tức</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='text-white' style={{ fontWeight: 'bold' }} to="/contact">Bảng Giá</NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
            <Container className='search'>
                <Row>
                    <Col>
                        <Input type="select">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </Input>
                    </Col>
                    <Col>
                        <Input type="select">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </Input>
                    </Col>
                    <Col>
                        <Input type="select">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </Input>
                    </Col>
                    <Col>
                        <Button color='primary' style={{ width: '100%' }}>TÌM KIẾM</Button>
                    </Col>
                </Row>
            </Container>
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </Router>
    )
}

