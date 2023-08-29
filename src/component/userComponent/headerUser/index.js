import { useEffect, useState } from 'react';
import './style.css'
import MenuApis from '../../../api/menuApi';
import { useNavigate } from 'react-router';
const HeaderUser = () => {
    const [listMenu, setListMenu] = useState([]);
    const fetchListMenu = async (config={})=>{
       try{
            const response = await MenuApis.GetAll(config)
            setListMenu(response.data)
       }
       catch(err){
        console.log(err)
       }
    }
    useEffect(()=>{
        fetchListMenu();
    },[]);
    const navigate = useNavigate();
    return (
        <>
           
                <div class="header-waper">
                    <div class="header_menu">
                        <div class="header--img">
                            <img src="" alt="" />
                        </div>
                        {listMenu.map(item=>
                            
                        <ul class="menu--text" >
                           <li  onClick={()=> navigate(item.alias)} >{item.name}  </li>    
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
            
           
        </>
    )
}
export default HeaderUser;