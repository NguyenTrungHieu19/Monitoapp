import FooterUser from "../../component/userComponent/footerUser"
import HeaderUser from "../../component/userComponent/headerUser";
import ProductPetUser from "../../component/userComponent/homeComponent/productPetUser";

import '../homeUser/style.css'
const HomeUser = () => {
    return (
        <>
            <HeaderUser />
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
            <div class="container container_child ">
                {/* <div class="container_header">
                    <p>Hard to choose right products for your pets?</p>
                </div>   */}
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
            <FooterUser />
        </>
    )
}
export default HomeUser;