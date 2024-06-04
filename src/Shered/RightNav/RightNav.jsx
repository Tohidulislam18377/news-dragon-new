import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import './RightNav.css';
import img1 from '../../assets/images/qZone1.png';
import img2 from '../../assets/images/qZone2.png';
import img3 from '../../assets/images/qZone3.png';
import img4 from '../../assets/images/bg.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const RightNav = () => {
    const { singInGoogle, singInGithub } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelGoogle = () => {
        singInGoogle()
            .then((result) => {
                const loggedUser = result.user;
                navigate('/')
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error.message);
            })
    };
    const handelGithub = () => {
        singInGithub()
            .then((result) => {
                const loggedUser = result.user;
                navigate('/')
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error.message);
            })
    };
    return (
        <div>
            <p className="text-center mt-2 mb-2">Login with</p>
            <div>
                <Button onClick={handelGoogle} className="mb-2 ms-4" variant="outline-secondary"><FaGoogle className="me-2" />Login with google</Button>
                <Button onClick={handelGithub} className="ms-4" variant="outline-secondary"><FaGithub className="me-2" />Login with github</Button>
            </div>
            <div className="mb-3">
                <p className="ms-4 mt-2 mb-2">Find Us On</p>
                <ListGroup>
                    <Link to={'https://www.facebook.com/'} className="text-decoration-none btn-facebook text-black"> <FaFacebook className="me-2" />FaceBook</Link>
                    <Link className="text-decoration-none btn-facebook text-black"><FaTwitter className="me-2" /> Twitter</Link>
                    <Link to={'https://www.instagram.com/touhidul_islam1837/'} className="text-decoration-none text-black btn-facebook"><FaInstagramSquare className="me-2" /> InsTagram</Link>
                </ListGroup>
            </div>
            <div className="img-section mb-3">
                <img className="img-fluid" src={img1} alt="" />
                <img className="img-fluid" src={img2} alt="" />
                <img className="img-fluid" src={img3} alt="" />
            </div>
            <div className="banner-section">
                <img className="img-fluid main-img" src={img4} alt="" />
                <div className="description-section">
                    <p className="title-section">Create an <br /> Amazing <br /> Newspaper</p>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className="btn btn-primary">Lorem More</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;