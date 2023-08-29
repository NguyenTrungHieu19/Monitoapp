import { useEffect, useState } from 'react'
import '../productToyFood/style.css'
import ProductFoodApis from '../../../../api/productFoodApi'
const ProductToyFood = () => {
    
    const[listProductToyFood, setListProductToyFood] = useState([])
    const fetchProductToyFood = async(config={})=>{
        try{
            const response = await ProductFoodApis.GetAll(config);
            setListProductToyFood(response.data)
        }
        catch(err)
        {

        }
    };
    useEffect(()=>{
        fetchProductToyFood();
    })
    const baseUrl = "http://localhost:52379"
    return (
        <>
            <div id="navbar-product">
              {listProductToyFood.map(item=>
                <div class="container-product " >
                <div class="product-img">
                    <img src={baseUrl+item.images} alt=''/>
                </div>
                <div class="product-content">
                    <div class="product-header">
                        <p>{ item.tenSanPham }</p>
                    </div>
                    <div class="product-title">
                        <p>Product:{item.loaiSanPham }</p>
                        <p>{  item.size} </p>
                    </div>
                    <div class="product-price">
                        <p>{item.price } VND </p>
                    </div>
                </div>
            </div>
            )}
        </div >
        </>
    )
}
export default ProductToyFood