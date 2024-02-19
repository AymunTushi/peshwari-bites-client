import React from 'react';
import Header from '../../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer/Footer';
import { Container } from 'react-bootstrap';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-vh-100'>
            <Container className='flex-grow-1'>
            <Outlet></Outlet>
            </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;