import { Navigate } from "react-router-dom";
import AdminLayOut from "../component/slideBar/sideBar"
const AdminComponent = ({component:Component}) => {
    const isAuthentication = localStorage.getItem("accessToken")
    return isAuthentication? (
        <AdminLayOut>
            <Component/>
        </AdminLayOut>
    ):(<Navigate to="/login"/>)
};
export default AdminComponent;  