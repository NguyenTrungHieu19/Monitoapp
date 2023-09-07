import { Modal } from 'antd';
import { useContext, useState } from 'react';
import ShopModalContext from "../../../context/shopModaleContext";
import ShopApi from "../../../api/shopApi";
import { store } from '../../../store';
import { ShowMessgeSucsse } from '../../../store/action/NoticationMessge';
const ModalDeleteShop = () => {
    const { openDeleteShop, setOpenDeleteShop, selectedRowKeys, fetchListShop } = useContext(ShopModalContext);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const handleClose = () => {
        setOpenDeleteShop(false)
    };
    const handleOk = async () => {
       await ShopDelete();
        setConfirmLoading(true);
         setTimeout  ( async () => {
            setOpenDeleteShop(false);
            setConfirmLoading(false);
            await fetchListShop();
            handelMessge();
        }, 2000);
    };
    const ShopDelete = async () => {
        await ShopApi.Delete(selectedRowKeys)
    }
    const handelMessge = () => {
        store.dispatch(ShowMessgeSucsse(" You have successfully created a new one!"))
    }
    return (
        <>
            <Modal
                
                title="Delete Shop"
                open={openDeleteShop}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleClose}
            >
                <p>Do you want to delete this store?</p>
            </Modal>
        </>
    )
}
export default ModalDeleteShop;