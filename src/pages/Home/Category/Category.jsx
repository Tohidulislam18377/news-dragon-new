import { useLoaderData } from "react-router-dom";
import NewsCart from "../NewsCart/NewsCart";

const Category = () => {
    // const {id} = useParams();
    // আইডি ক্যা নিয়ে আসঅতে ব্যবহার করা হয়
    const category = useLoaderData();
    return (
        <div>
            <div className="mt-4">
                {
                    category.map(news=><NewsCart
                    key={news._id}
                    news = {news}
                    ></NewsCart>)
                }
            </div>
        </div>
    );
};

export default Category;