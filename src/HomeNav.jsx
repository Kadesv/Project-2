import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SignPage from './Pages/SignPage.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export default function HomeNav() {
  const [showSign, setShowSign] = useState(false);
  const [signStatus, setSignStatus] = useState(false);
  const navigate = useNavigate();
  const handleSignStatus = () => setSignStatus(true);

  const handleLogout = async (e) => {
    e.preventDefault();

    const res = await axios.post('/api/logout');
    if (res.data.success) {
      console.log('signed out');
      setSignStatus(false);
      navigate('/');
    }
  };
  const handleClose = () => setShowSign(false);
  const handleShow = () => setShowSign(true);
  return (

    signStatus ?
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">Ask Away Forums</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          <Offcanvas show={showSign} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <SignPage handleClose={handleClose} />
            </Offcanvas.Body>
          </Offcanvas>
          <Nav.Link href="/account">Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  :
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Ask Away Forums</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleShow}>Login</Nav.Link>
            <Offcanvas show={showSign} onHide={handleClose} placement='end'>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <SignPage handleClose={handleClose} handleSignStatus={handleSignStatus}/>
              </Offcanvas.Body>
            </Offcanvas>
            <Nav.Link href="/account">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
