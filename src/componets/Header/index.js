import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../assets/image/logo.png'

export const Header = ()=>{

  return (
      <>
        {['sm'].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="ps-5 pe-5 pt-4 pb-4 sticky-top mobile">
            <Container fluid className=''>
              <Navbar.Brand href="#"><img src={Logo} alt="Pets Mellon" title='Pets Mellon' /></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="flex-grow-1 pe-3 justify-content-center gap-3 fs-5">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/conheca">Conheça</Nav.Link>
                    <Nav.Link href="/produtos">Produtos</Nav.Link>
                    <Nav.Link href="/servicos">Serviços</Nav.Link>
                    <Nav.Link href="/customizacoes">Customizações</Nav.Link>
                    <Nav.Link href="/parceria">Parceria</Nav.Link>
                    <Nav.Link href="https://patense.com.br/pt/views/">A Patense</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/contato" className='btn text-white' style={{backgroundColor:'#FF9200'}}>Contato</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
  );
}