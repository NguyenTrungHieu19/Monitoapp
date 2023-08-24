import AdminLayOut from "../component/slideBar/sideBar"
const AdminComponent = ({component:Component}) => {
    return (
        <AdminLayOut>
            <Component/>
        </AdminLayOut>
    )
};
export default AdminComponent;  