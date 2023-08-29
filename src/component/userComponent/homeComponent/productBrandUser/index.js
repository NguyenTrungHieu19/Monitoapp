import { useEffect, useState } from 'react';
import './style.css'
import ProductBrandApis from '../../../../api/productBrand';
const ProductBrandUser = () => {
    const [listProductBrand, setListProductBrand] = useState([]);
    const fetchProductBrand = async (config = {}) => {
        try {
            const response = await ProductBrandApis.GetAll(config);
            setListProductBrand(response.data)
        }
        catch (err) {

        }
    };
    useEffect(() => {
        fetchProductBrand();
    }, [])
    const baseUrl = "http://localhost:52379"
    return (
        <>
            <div class="product_brand">
                {listProductBrand.map(item =>
                    <div class="img-product_brand" >
                        <img src={baseUrl + item.images} alt='' />
                    </div>
                )}
            </div >
        </>
    )
}
export default ProductBrandUser;