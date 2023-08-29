import ProductPetCategory from "../../component/userComponent/categoryComponent/ProductPetCategory";
import BannerCategory from "../../component/userComponent/categoryComponent/bannerCategory";
import FillterProductCategory from "../../component/userComponent/categoryComponent/fillterProductCategory";
import FooterUser from "../../component/userComponent/footerUser";
import HeaderUser from "../../component/userComponent/headerUser";
import '../categoryUser/category.css'
const CategoryUser = () => {
  return (
    <>
      <HeaderUser />
      <BannerCategory />
      <div>
        <div class="navbar-header-product">
          <div class="navbar-content-left">
            <p>Filter</p>
          </div>
          <div class="navbar-content-center">
            <p>SmallDog</p>
            <span> 52 puppies</span>
          </div>
          <div class="navbar-content-right">
            <select>
              <option>SortBy</option>
            </select>
          </div>
        </div>
      </div>
      <div class="container-product-category-wapper">
        <FillterProductCategory/>
        <ProductPetCategory/>
      </div>
      <FooterUser />
    </>
  )
};
export default CategoryUser;