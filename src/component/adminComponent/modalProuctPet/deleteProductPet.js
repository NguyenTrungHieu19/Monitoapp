import { Modal } from "antd";
import { useContext, useState } from "react";
import ProductPetModalContext from "../../../context/productPetModalContext";
import ProductPetApis from "../../../api/productPetApi";
import { store } from "../../../store";
import { ShowMessgeErorr, ShowMessgeSucsse } from "../../../store/action/NoticationMessge";

const ModalDeleteProductPet = () => {
  const {openModalDeleteProductPet,setOpenModalDeleteProductPet,
         fetchListProductPet,selectedRowKeys}= useContext(ProductPetModalContext)
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleClose = () => {
    setOpenModalDeleteProductPet(false)
};
const handelMessge = () => {
    store.dispatch(ShowMessgeSucsse(" You have successfully created a new one!"))
}
const handelErorr =()=>{
    store.dispatch(ShowMessgeErorr())
}
const handleOk = async () => {
    await ProductPetDelete();
     setConfirmLoading(true);
      setTimeout  ( async () => {
        setOpenModalDeleteProductPet(false);
         setConfirmLoading(false);
         await fetchListProductPet();
     }, 2000);
 };
 const ProductPetDelete = async()=>{
    try{
        await ProductPetApis.Delete(selectedRowKeys);
        handelMessge();
    }
    catch(erorr){
        if(erorr.response && erorr.response.status === 400){
            handelErorr();
        }
    }
 }
    return (
        <>
            <Modal              
                title="Delete Shop"
                open={openModalDeleteProductPet}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleClose}
            >
                <p>Do you want to delete this Product?</p>
            </Modal>
        </>
    )
}
export default ModalDeleteProductPet;