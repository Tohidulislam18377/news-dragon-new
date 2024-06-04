import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import './SingUp.css'
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
const SingUp = () => {
    const { createUser } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [accept, setAccept] = useState(false);
    const navigate = useNavigate();

    const handelSingUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                displayName(loggedUser, name)
                form.reset();
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
            })
    };
    const displayName = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
    };
    const handelTerms = (event)=>{
       setAccept(event.target.checked);
    }
    return (
        <Container className="mt-5">
            <p style={{ textAlign: 'center', fontSize: "20px" }}>SingUp your account</p>
            <div className="from-container11">
                <form onSubmit={handelSingUp}>
                    <div className="from-control1">
                        <label style={{ marginLeft: '120px', marginBottom: '10px', fontSize: '25px' }} className="d-block" htmlFor="">Name</label>
                        <input className="input-email" type="text" name="name" id="" placeholder="Enter your name" required />
                    </div>
                    <div className="from-control1">
                        <label style={{ marginLeft: '120px', marginBottom: '10px', fontSize: '25px' }} className="d-block" htmlFor="">Email</label>
                        <input className="input-email" type="email" name="email" id="" placeholder="Enter your email address" required />
                    </div>
                    <div className="from-control2">
                        <label style={{ marginLeft: '120px', fontSize: '25px', marginBottom: '10px' }} htmlFor="">Password</label>
                        <div className="container-hide">
                            <input className="input-password" type={show ? "text" : "password"} name="password" id="" placeholder="Enter your password" required />
                            <p onClick={() => setShow(!show)} className="btn-hide pt-2 p-2">{show ? <FaEye /> : <IoIosEyeOff />}</p>
                        </div>
                        <div className="from-control3">
                            <input onClick={handelTerms} className="mb-3 me-2" style={{ marginLeft: '120px' }} type="checkbox" name="checkBox" id="" />
                            <label htmlFor="">Accept <Link to={'/terms'} className="text-decoration-none">Terms and condition</Link></label>
                        </div>
                    </div>
                    <input disabled={!accept} className="input-login text-center mb-2 mt--2" type="submit" value="SingUp" />
                </form>
                <p className="text-center">Already have and account PLease ? <Link className="text-decoration-none" to={'/login'}>Login</Link></p>
            </div>
        </Container>
    );
};

export default SingUp;