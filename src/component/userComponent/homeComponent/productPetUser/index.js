import { useEffect, useState } from 'react';
import '../productPetUser/style.css'
import ProductPetApis from '../../../../api/productPetApi';
const ProductPetUser = () => {
    const [listProductPet, setLisProducttPet] = useState([]);
    const fetchProductPet = async (config = {}) => {
        const response = await ProductPetApis.GetAll(config)
        setLisProducttPet(response.data)
    }
    useEffect(() => {
        fetchProductPet();
    }, [])
    const baseUrl = "http://localhost:52379"
    return (
        <>
                <div id="navbar-product">
            {listProductPet.map(item =>
                    <div class="container-product ">
                    <div class="product-img">
                        <a href=''>
                            <img src={baseUrl + item.images} alt='' />
                        </a>
                    </div>
                    <div class="product-content">
                        <div class="product-header">
                            <p>{item.maSanPham }-{item.tenSanPham}</p>
                        </div>
                        <div class="product-title">
                            <p>Genne:{item.gendeer}</p>
                            <p>Age:{item.size} months </p>
                        </div>
                        <div class="product-price">
                            <p>{item.price} VND </p>
                        </div>
                    </div>
                </div>
            )}
         </div >
        </>
    )
}
export default ProductPetUser;