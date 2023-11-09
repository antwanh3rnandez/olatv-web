// import { AuthContext } from "../auth/context/AuthContext";
// import { useContext } from "react";
// import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";

export const PrivateRouter = () => {
    // const { auth } = useContext(AuthContext);
    // if (!auth) {
    //     return <AuthRoutes />;
    // }else{
        return <DashboardRoutes />
        //  return <AuthRoutes />;
    // }
}