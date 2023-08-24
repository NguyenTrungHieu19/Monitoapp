import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
export const Menus = [
    {
        name: "Menu",
        path: "/admin",
        icon: <AutoStoriesIcon/>
    },
    {
        name: "Shop",
        path: "/admin/shop",
        icon: <StorefrontIcon/>
    },
    {
        name: "Product",
        path: "/admin/productpet",
        icon:<ProductionQuantityLimitsIcon/>
    },
    {
        name: "ProductFood",
        path: "/admin/productfood",
        icon: <KebabDiningIcon/>
    },
    {
        name: "BannerFooter",
        path: "/admin/bannerfooter",
        icon: <ViewCarouselIcon/>
    },

]
