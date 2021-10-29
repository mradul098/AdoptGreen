import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { subheading_size } from './color_constants';
import { ImUserPlus } from 'react-icons/im';
import { FaSignInAlt } from 'react-icons/fa';
import { IoHelpCircle } from 'react-icons/io5';
import {
  AiFillGift,
  AiFillSafetyCertificate,
  AiFillSave,
  AiOutlineComment,
  ImBlogger2
} from 'react-icons/all';
function NavHome(props) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        fixed='top'
        style={{
          background: 'linear-gradient(to right,#00cdac, #00aced)',
          boxShadow: '0px 8px 8px -6px rgb(0 0 0 / 50%)',
        }}
      >
        <img
          className='nav_logo'
          src='/static/images/GULLAK WHITE.png'
          alt=''
          onClick={() => window.location.href = '/home'}
          style={{ cursor: 'pointer' }}
        />
        <Navbar.Brand
          as={Link}
          to="/home"
          style={{
            fontSize: subheading_size,
            color: 'white',
            fontFamily: 'sans-serif',
          }}
        >
          GULLAK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav>
            <Nav.Link
              style={{ fontWeight: 'bold', color: 'white', fontSize: 'large' }}
              as={Link}
              to='/register'
            >
              <ImUserPlus style={{ marginRight: '3px' }} />
              Register
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              style={{ fontWeight: 'bold', color: 'white', fontSize: 'large' }}
              as={Link}
              to='/login'
            >
              <FaSignInAlt style={{ marginRight: '3px' }} />
              Login
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              style={{ fontWeight: 'bold', color: 'white', fontSize: 'large' }}
              as={Link}
              to='/testimonials'
            >
              <AiOutlineComment style={{ marginRight: '3px' }} />
              Testimonials
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              style={{ fontWeight: 'bold', color: 'white', fontSize: 'large' }}
              as={Link}
              to='/recognition'
            >
              <AiFillSafetyCertificate style={{ marginRight: '3px' }} />
              Recognition
            </Nav.Link>
          </Nav>
          <Nav.Link as={Link} to="/blog" style={{ fontWeight: 'bold', color: 'white', fontSize: 'large' }}>
            <ImBlogger2 style={{ marginRight: '5px' }} />
            Blogs
          </Nav.Link>
          <Nav>
            <Nav.Link
              style={{ fontWeight: 'bold', color: 'white', fontSize: 'large' }}
              as={Link}
              to='/help'
            >
              <IoHelpCircle style={{ marginRight: '3px' }} />
              Help
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavHome;
