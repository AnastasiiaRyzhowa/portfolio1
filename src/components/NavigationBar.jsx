import React from 'react';
import  Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';

function NavigationBar(){
  return(
    <Navbar expand='lg' className='bg-primary w-100 fixed-top z-1' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='#' className='fs-4'>Анастасия <span className='text-dark'>Рыжова.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto w-100 d-flex justi-content-end'>
            <Nav.Link href='#header'>Главная</Nav.Link>
            <Nav.Link href='#about'>Обо мне</Nav.Link>
            <Nav.Link href='#projects'>Проекты</Nav.Link>
            <Nav.Link href='#contact'>Контакты</Nav.Link>

          </Nav>

        </Navbar.Collapse>
        
      </Container>

    </Navbar>
  )
}

export default NavigationBar;