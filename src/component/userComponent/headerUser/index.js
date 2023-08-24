import { useEffect, useState } from 'react';
import './style.css'
import MenuApis from '../../../api/menuApi';
const HeaderUser = () => {
    const [listMenu, setListMenu] = useState([]);
    const fetchListMenu = async (config={})=>{
       try{
            const response = await MenuApis.GetAll(config)
            setListMenu(response.data)
            console.log(listMenu)
       }
       catch(err){
        console.log(err)
       }
    }
    useEffect(()=>{
        fetchListMenu();
    },[])
   
    return (
        <>
            <div class="header">
                <div class="header-waper">
                    <div class="header_menu">
                        <div class="header--img">
                            <img src="" alt="" />
                        </div>
                        {listMenu.map(item=>
                            
                        <ul class="menu--text" >
                         <li key={item.id}>{item.name}</li>
                          
                        </ul>
                        )}
                    </div>
                    <div class="header_action">
                        <div class="header--input">
                            <button class="search-btn">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                            <input type="text" name="" id="" placeholder="Search something here!" />

                        </div>
                        <div class="header--button">
                            <button>Join the cummunity</button>
                        </div>
                    </div>
                </div>
                <div class="header_content">
                    <div class="header-content-text">
                        <h1>One more friend</h1>
                        <h2>Thousands more fun!</h2>
                        <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to
                            have
                            fun. We have 200+ different pets that can meet your needs!
                        </p>
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
        </>
    )
}
export default HeaderUser;