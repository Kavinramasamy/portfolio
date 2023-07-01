import Nav  from 'react-bootstrap/Nav';
import  Navbar from 'react-bootstrap/Navbar';
import  Container from 'react-bootstrap/Container';



function NavigationBar() {
  return (
    <Navbar className="rightnav text-light"expand="lg">
      <Container>
        <Navbar.Brand className='text-light pl-5 pr-5' href="#home"><h2 className='head'>Kavin R</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"><i class="fa-solid fa-bars text-light"></i></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-end">
            <Nav.Link className='active text-light mx-3' href="#about">About</Nav.Link>
            <Nav.Link className='active text-light mx-3' href="#skills">Skills</Nav.Link>
            <Nav.Link className='active text-light mx-3' href="#project">Projects</Nav.Link>
            <Nav.Link className='active text-light mx-3' href="#contact">Contact</Nav.Link>
            <Nav.Link className='active text-light mx-3' href="https://github.com/kavinramasamy" target="blank"><i class="fa-brands fa-github"></i>Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
export default NavigationBar;



