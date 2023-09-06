
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function Header()
{
  return (
    <div>
    <Navbar className="bg-primary" bg="secondary">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://react-bootstrap.netlify.app/img/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
       React Context API
      </Navbar.Brand>
   
    </Container>
  </Navbar>
   
      </div>
  
  );
}

export default Header;