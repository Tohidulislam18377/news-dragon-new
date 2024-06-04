import { Button, Card } from "react-bootstrap";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import img1 from '../../../assets/images/editorsInsight1.png'
import img2 from '../../../assets/images/editorsInsight2.png'
import img3 from '../../../assets/images/editorsInsight3.png'
import moment from "moment";
import { MdOutlineDateRange } from "react-icons/md";


const News = () => {
    const news = useLoaderData();
    const { category_id, title, details, image_url, author } = news;
    // console.log(news);
    return (
        <div>
            <Card className="mb-3">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"> <FaArrowCircleLeft className="me-1" />All news in this category</Button></Link>
                </Card.Body>
            </Card>

                {/* different section */}

            <div className="d-flex gap-3">
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        <p><span style={{paddingRight:'8px'}}><MdOutlineDateRange style={{height:'20px'}}/></span>{moment(author?.published_date).format('yyyy-MM-D')}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        <p><span style={{paddingRight:'8px'}}><MdOutlineDateRange style={{height:'20px'}} /></span>{moment(author?.published_date).format('yyyy-MM-D')}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        <p><span style={{paddingRight:'8px'}}><MdOutlineDateRange style={{height:'20px'}} /></span>{moment(author?.published_date).format('yyyy-MM-D')}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default News;