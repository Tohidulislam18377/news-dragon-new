
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shered/Footer/Footer";
import Header from "../Shered/Header/Header";
import LeftNav from "../Shered/LeftNav/LeftNav";
import RightNav from "../Shered/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Shered/NavigationBar/NavigationBar";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}> 
                    <Outlet/>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;