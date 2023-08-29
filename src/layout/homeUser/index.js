import { useEffect, useState } from "react";
import '../homeUser/style.css'
import FooterUser from "../../component/userComponent/footerUser"
import HeaderUser from "../../component/userComponent/headerUser";
import ProductPetUser from "../../component/userComponent/homeComponent/productPetUser";
import BannerHeaderApi from "../../api/bannerHeaderApi";
import ProductBrandUser from "../../component/userComponent/homeComponent/productBrandUser";
import ProductToyFood from "../../component/userComponent/homeComponent/productToyFood";
import BannerFooterApi from "../../api/bannerFooterApi";
import PostUser from "../../component/userComponent/homeComponent/postUser";
const HomeUser = () => {
    const [listBannerHeader, setListBannerHeader] = useState([]);
    const [listBannerFooter, setListBannerFooter] = useState([]);
    const fetchBanner = async (config = {}) => {
        try {
            const response = await BannerHeaderApi.GetAll(config);
            setListBannerHeader(response.data)
        }
        catch (er) {
        }
    };
    const fetchBannerFooter = async (config = {}) => {
        try {
            const response = await BannerFooterApi.GetAll(config);
            setListBannerFooter(response.data)
        }
        catch (err) { }
    }
    useEffect(() => {
        fetchBanner();
        fetchBannerFooter();
    }, [])
    const baseUrl = "http://localhost:52379"

    return (
        <>

            {listBannerHeader.map(item =>
                <div class="header" style={{ backgroundImage: `url("${baseUrl}${item.backGround}")` }}>
                    <HeaderUser />
                    <div class="header_content">
                        <div class="header-content-text" >
                            <h1>{item.header}</h1>
                            <h2>{item.headerH2}</h2>
                            <p>{item.content}</p>
                        </div>
                        <div class="header-content-action">
                            <button class="btn--viewtro">
                                View Intro
                                <i class="fa-regular fa-circle-play"></i>
                            </button>
                            <button class="btn--explor">Explore Now</button>
                        </div>

                    </div>
                </div>
            )}
            <div class="container">
                <div class="container_header">
                    <p>whats new?</p>
                </div>
                <div class="container-header-text">
                    <h3>Take a look at some of our pets</h3>
                    <button class="btn--viewtro">
                        View Intro
                        <i class="fa-regular fa-circle-play"></i>
                    </button>
                </div>
            </div>
            <ProductPetUser />

            {listBannerHeader.map(item =>
                <div class="container-banner">
                    <img src={baseUrl + item.banner} alt="" />
                    <div class="content_banner">
                        <div class="header-content-text banner-text">
                            <h1>{item.header}</h1>
                            <h2>{item.headerH2}</h2>
                            <p>{item.content}</p>
                        </div>
                        <div class="header-content-action banner_action">
                            <button class="btn--viewtro btn-banner">
                                View Intro
                                <i class="fa-regular fa-circle-play"></i>
                            </button>
                            <button class="btn--explor">Explore Now</button>
                        </div>
                    </div >
                </div >
            )}
            <div class="container container_child">
                <div class="container_header">
                    <p>Hard to choose right products for your pets?</p>
                </div>
                <div class="container-header-text">
                    <h3>Our Products</h3>
                    <button class="btn--viewtro">
                        View Intro
                        <i class="fa-regular fa-circle-play"></i>
                    </button>
                </div>
            </div>
            <ProductToyFood />
            <div class="container container_child ">
                <div class="container-header-text container-child-footer ">
                    <div class="content-text">
                        <p>Proud to be part of</p>
                        <h3>Pet Sellers</h3>
                    </div>
                    <button class="btn--viewtro">
                        View all our sellers
                        <i class="fa-regular fa-circle-play"></i>
                    </button>
                </div>
            </div>
            <ProductBrandUser />
            {listBannerFooter.map(item =>
                <div class="container-banner" >
                    <img src={baseUrl + item.images} alt="" />
                    <div class="content_banner content_bannerFooter">
                        <div class="header-content-text banner-text">
                            <h1>{item.headerH1}</h1>
                            <h2>{item.headerH2}</h2>
                            <p>{item.content}</p>
                        </div>
                        <div class="header-content-action banner_action banner-action-footer">
                            <button class="btn--viewtro btn-banner">
                                View Intro
                                <i class="fa-regular fa-circle-play"></i>
                            </button>
                            <button class="btn--explor">Explore Now</button>
                        </div>
                    </div >
                </div >
            )}
            <div class="container container_child">
                <div class="container_header">
                    <p>You already know ?</p>
                </div>
                <div class="container-header-text">
                    <h3>Useful pet knowledge</h3>
                    <button class="btn--viewtro">
                        View Intro
                        <i class="fa-regular fa-circle-play"></i>
                    </button>
                </div>
            </div>
            <PostUser />
            <FooterUser />
        </>
    )
}
export default HomeUser;