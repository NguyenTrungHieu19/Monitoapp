import { Checkbox } from 'antd';
import '../fillterProductCategory/style.css'
import { useState } from 'react';


const FillterProductCategory =()=>{
    const [checkGender,setCheckGender] = useState({});
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