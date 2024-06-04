import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import inCon from '../../assets/images/user.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch((error) => {
        console.log(error.message);
      })
  }
  return (
    <Container>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link className='me-3 text-decoration-none text-black' to={'/'}>Home</Link>
                <Link className='me-3 text-decoration-none text-black' to={'/about'}>About</Link>
                <Link className='text-decoration-none text-black' to={'/contact'}>Contact</Link>

              </Nav>
              <Form className="d-flex align-items-center ">
                { user && <img style={{ width: '31px', height: '31px' }} className='img-fluid me-3' src={inCon} alt="" />}
                {user ? <><button onClick={handelLogOut}>SingOut</button></>:<><Link to='/login' style={{ fontSize: '25px', color: 'white', backgroundColor: 'black', textDecoration: 'none', padding: '3px', borderRadius: '5px' }}>Login</Link></>}
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default NavigationBar;
