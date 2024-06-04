import { Link } from "react-router-dom";


const Terms = () => {
    return (
        <div>
            <h1>Our terms and condition</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates commodi illum, ipsa animi consequuntur veniam adipisci qui fugiat eaque quisquam atque natus, asperiores omnis, blanditiis mollitia iste vero quam eveniet? Ex accusantium omnis ratione aliquam id pariatur impedit reprehenderit, nostrum quo qui! Iure cum error quas magni. Corporis, placeat voluptatem.</p>
            <Link to={'/singUp'}>SingUp</Link>
        </div>
    );
};

export default Terms;