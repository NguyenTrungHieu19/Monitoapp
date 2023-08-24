import { useContext } from "react";
import ProductPetModalContext from "../../../context/productPetModalContext";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, Select, InputNumber, Input, Modal } from 'antd';
const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});
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
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
const ModalCreateProductPet = () => {
    const { openModalCreateProductPet, setOpenModalCreateProductPet } = useContext(ProductPetModalContext);
    const handleClose = () => {
        setOpenModalCreateProductPet(false);
    };
    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const onChange = (value) => {
        console.log('changed', value);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <>
            <Modal title="Create Menu" open={openModalCreateProductPet} onOk={handleClose} onCancel={handleClose}>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <p>STT</p>
                        <InputNumber min={0} max={20} defaultValue={0} onChange={onChange} />
                    </div>
                    <div>
                        <p>Alias</p>
                        <Input placeholder="please enter alias menu" />
                    </div>
                    <div>
                        <p>Name</p>
                        <Input placeholder="please enter your name menu  " />
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

                </form>
            </Modal>
        </>
    )
}
export default ModalCreateProductPet;