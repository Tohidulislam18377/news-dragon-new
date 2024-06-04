import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const NewsCart = ({ news }) => {
    // console.log(news);
    const { _id, details, author, image_url, title, rating, total_view } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <Image style={{ width: '50px', height: '50px' }} className="img-fluid" src={author?.img} roundedCircle />
                            <div className="ms-2">
                                <p className="mb-0">{author?.name}</p>
                                <p className="mb-0">{moment(author?.published_date).format('yyyy-MM-D')}</p>
                            </div>
                        </div>
                        <div>
                            <button className="border-0 me-2 " ><span><FaRegBookmark /></span></button>
                            <button className="border-0 bg-secondary.bg-gradient"><span><IoMdShare /></span></button>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : <>
                            {details.slice(0, 250)}...
                            <Link to={`/news/${_id}`}>Read More</Link>
                        </>}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="d-flex">
                        <Rating
                            placeholderRating={rating?.number}
                            readonly
                            emptySymbol={<FaRegStarHalfStroke/>}
                            placeholderSymbol={<FaStar/>}
                            fullSymbol={<FaStar/>}
                        />
                        <p className="ms-2"><span>{rating.number}</span></p>
                        </div>
                        <p><FaEye /> <span>{total_view}</span></p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;