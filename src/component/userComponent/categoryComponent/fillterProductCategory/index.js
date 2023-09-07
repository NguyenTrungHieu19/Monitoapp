import { Checkbox } from 'antd';
import '../fillterProductCategory/style.css'
import { useState } from 'react';
import { store } from '../../../../store';


const FillterProductCategory =()=>{
    const [checkGender,setCheckGender] = useState(store.getState().fillterProduct);
    console.log(checkGender)
    const WatchStore = () => {
      store.subscribe(() => setCheckGender(store.getState().fillterProduct))
    };
    WatchStore();
    const handleCheckGender =(values)=>{
         setCheckGender(values);
         // fetchProductPet();
    }  
 
    return(
        <  >
           <div class="navbar-product-filter">
             <div>
                <label>Gender</label>
                <Checkbox.Group onChange={handleCheckGender} className="navbar-checkBox">
                   <Checkbox value="Male">Male</Checkbox>
                   <Checkbox value="Female">Female</Checkbox>
                </Checkbox.Group>
             </div>
           </div>
        </>
    )
};
export default FillterProductCategory;