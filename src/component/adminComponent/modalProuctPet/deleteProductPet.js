import { Modal } from "antd";
import { useContext, useState } from "react";
import ProductPetModalContext from "../../../context/productPetModalContext";
import ProductPetApis from "../../../api/productPetApi";

const ModalDeleteProductPet = () => {
  const {openModalDeleteProductPet,setOpenModalDeleteProductPet,
         fetchListProductPet,selectedRowKeys}= useContext(ProductPetModalContext)
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleClose = () => {
    setOpenModalDeleteProductPet(false)
};
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
    await ProductPetApis.Delete(selectedRowKeys)
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