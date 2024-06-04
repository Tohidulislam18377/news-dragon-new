import { Outlet } from "react-router-dom";
import NavigationBar from "../Shered/NavigationBar/NavigationBar";

const LoginLayOut = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet/>
        </div>
    );
};

export default LoginLayOut;