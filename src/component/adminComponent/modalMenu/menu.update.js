import { useContext } from 'react';
import MenuModalContext from '../../../context/menuModalContext';
import { InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Select, Upload, Input, Modal, Button, message } from 'antd';
import styles from "./index.module.scss"
const item = [
    {
        value: 'true',
        label: 'True',
    },
    {
        value: 'false',
        label: 'False',
    },
];
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            // console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
const onChange = (value) => {
    
};
const handleChange = (value) => {
    
};
const ModalUpdateMenu = () => {
    const { openModalUpdate, setOpenModalUpade } = useContext(MenuModalContext);
    const handleClose = () => {
        setOpenModalUpade(false)
    }
    return (
        <Modal title="Update Menu" open={openModalUpdate} onOk={handleClose} onCancel={handleClose} className={styles.modalUpadate}>
            <div>
                <p>STT</p>
                <InputNumber min={0} max={20} defaultValue={0} onChange={onChange} />
            </div>
            <div>
                <p>Alias</p>
                <Input placeholder="please enter alias menu" />
            </div>
            <div>
                <p>ThumImages</p>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </div>
            <div>
            </div>
            <div>
                <p>Status</p>
                <Select defaultValue="True" style={{ width: 120, }} onChange={handleChange} options={item} />
            </div>
        </Modal>
    )
}
export default ModalUpdateMenu;