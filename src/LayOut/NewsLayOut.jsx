import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shered/Footer/Footer";
import Header from "../Shered/Header/Header";
import RightNav from "../Shered/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayOut = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}> 
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

export default NewsLayOut;