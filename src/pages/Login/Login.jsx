import { Container } from "react-bootstrap";
import './Login.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
    const { singInLogin, forgetPassword } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const useEmail = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0';

    const handelLogin = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        singInLogin(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
                setError('Please Provide your right password')
            })
    };
    const passwordReset = () => {
        const email = useEmail.current.value;
        if (!email) {
            alert('Please Provide Your email')
        }
        forgetPassword(email)
            .then(() => {
                alert('Please check your email')
            })
            .catch((error) => {
                console.log(error.message);
            })
    };
    return (
        <Container className="mt-5">
            <p style={{ textAlign: 'center', fontSize: "20px" }}>Login your account</p>
            <div className="from-container">
                <form onSubmit={handelLogin}>
                    <div className="from-control1">
                        <label style={{ marginLeft: '120px', marginBottom: '10px', fontSize: '25px' }} className="d-block" htmlFor="">Email</label>
                        <input className="input-email" type="email" ref={useEmail} name="email" id="" placeholder="Enter your email address" required />
                    </div>
                    <div className="from-control2">
                        <label style={{ marginLeft: '120px', fontSize: '25px', marginBottom: '10px' }} htmlFor="">Password</label>
                        <div className="container-hide">
                            <input className="input-password" type={show ? "text" : "password"} name="password" id="" placeholder="Enter your password" required />
                            <p onClick={() => setShow(!show)} className="btn-hide pt-2 p-2">{show ? <FaEye /> : <IoIosEyeOff />}</p>
                        </div>
                        <button onClick={passwordReset} className="forget-password">Forget Password</button>
                    </div>
                    <input className="input-login text-center mb-2" type="submit" value="Login" />
                </form>
                <p className="text-danger">{error}</p>
                <p className="text-center">New To Dragon-News Please ? <Link className="text-decoration-none" to={'/singUp'}>SingUp</Link></p>
            </div>
        </Container>
    );
};

export default Login;