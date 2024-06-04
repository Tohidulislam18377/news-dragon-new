import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import img1 from '../../assets/images/editorsInsight1.png'
import img2 from '../../assets/images/editorsInsight2.png'
import img3 from '../../assets/images/editorsInsight3.png'

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    // console.log(categories);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <h4 className="mt-3 mb-3">AllCategory</h4>
            <div className="ps-3">
                {
                    categories.map(category => <>
                    <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className="text-decoration-none text-black">{category?.name}</Link>
                    </p>
                    
                    </>)
                }
            </div>
            <div>
                <Card className="mb-3">
                    <Card.Img variant="top" src={img1}/>
                    <Card.Body>
                        <Card.Title>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</Card.Title>
                        <Card.Text>
                        <p>{moment().format('MMMM-D-YYYY, ')}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mb-3">
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Joe Biden announces $3 billion in Ukraine weapons aid</Card.Title>
                        <Card.Text>
                        <p>{moment().format('MMMM-D-YYYY, ')}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mb-3">
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Tucker Carlson: Putin Winning in Ukraine, Biden Hurting West</Card.Title>
                        <Card.Text>
                        <p>{moment().format('MMMM-D-YYYY, ')}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default LeftNav;