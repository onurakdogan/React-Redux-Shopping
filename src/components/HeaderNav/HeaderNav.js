
import { Link } from 'react-router-dom' 
import {Button,Container,Navbar,Nav} from 'react-bootstrap';

function HeaderNav() {
 
  return (
    <>
      <Navbar className="d-flex col-md-12 h-100vh" bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link><Link to="/Products"><Button > Products </Button></Link></Nav.Link>
            <Nav.Link><Link to="/Basket"><Button > Basket </Button></Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
 
export default  (HeaderNav);
 