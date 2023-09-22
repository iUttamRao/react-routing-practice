import { Navigate, Outlet } from "react-router-dom";
import { DEFAULT } from "../router/keys";

const Auth =(props) =>{
    const {user} =props;
    if(user){
        return <Outlet />
    }
    else{
        return <Navigate to={DEFAULT} replace />
    }
}

export default Auth;