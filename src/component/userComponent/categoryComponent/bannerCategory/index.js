import { useEffect, useState } from 'react';
import '../bannerCategory/style.css'
import BannerCategoryApi from '../../../../api/bannerCategory';
const BannerCategory = () => {
    const [listBannerCategory, setListBannercategory] = useState([]);
    const fetchBannerCategory = async(config={})=>{
        try{
            const response = await BannerCategoryApi.GetAll(config)
            setListBannercategory(response.data);
        }
        catch(err)
        {
            
        }
    }
    useEffect(()=>{
        fetchBannerCategory();
    },[]);
    const baseUrl = "http://localhost:52379"
    return (
        <>
        {listBannerCategory.map(item=>
            <div class="container-banner"key={item.id} >
                <img src={baseUrl + item.images} alt={baseUrl + item.images} />
                <div class="content_banner">
                    <div class="header-content-text banner-text">
                        <h1>{item.headerH1}</h1>
                        <h2>{item.headerH2}</h2>
                        <p> {item.content}</p>
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
        </>
    )
};
export default BannerCategory;
