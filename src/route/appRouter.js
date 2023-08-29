import { createBrowserRouter } from "react-router-dom"
import ShopTable from "../page/shop"
import MenusTable from "../page/menus"
import ProductPet from "../page/productPet"
import ProductFood from "../page/productFood"
import BannerFooter from "../page/bannerFooter"
import AdminComponent from "../context/AdminComponent"
import HomeUser from "../layout/homeUser"
import CategoryUser from "../layout/categoryUser"
const appRoutes = createBrowserRouter
    ([  
         {          
            path: "/admin",          
            children:[
                {
                    path: "",
                    element: <AdminComponent component={MenusTable}/>,
                },
                {
                    path: "shop",
                    element:<AdminComponent component={ShopTable}/>,
                },
                {
                    path: "productpet",
                    element:<AdminComponent component={ProductPet}/>,
                },
                {
                    path: "productfood",
                    element:<AdminComponent component={ProductFood}/>,
                },
                {
                    path: "bannerfooter",
                    element:<BannerFooter/>,
                },
            ],
        },
        {
            path :"/",
            element:<HomeUser/>,           
        },
        {
            path :"/main/home",
            element:<HomeUser/>,           
        },
        {
            path:"/main/category",
            element:<CategoryUser/>
        }
        

        
    ])

    export default appRoutes;