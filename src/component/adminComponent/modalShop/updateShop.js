import { useContext, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { UploadOutlined } from '@ant-design/icons';
import { message, Upload, } from 'antd';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ShopModalContext from "../../../context/shopModaleContext";
import styles from "./index.module.scss"
import { Backdrop, Checkbox, CircularProgress, FormControlLabel, TextField } from "@mui/material";
import ShopApi from "../../../api/shopApi";
import { store } from "../../../store";
import { ShowMessgeSucsse } from "../../../store/action/NoticationMessge";
const props = {
    name: 'file',
    action: '',
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
const handelMessge = () => {
    store.dispatch(ShowMessgeSucsse(" You have successfully created a new one!"))
}
const validationSchema = yup.object({
    address: yup
        .string('Enter shop addres')
        .required('Addres is required'),
    name: yup
        .string('Enter your name')
        .required('Name is required'),
    phone: yup
        .number('Enter shop number')
        .min(13, 'enter phone number 09632...')
        .required("Please re-enter your phone number"),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
});

const ModalUpdateShop = () => {
    const { openUpdateShop, setOpenUpdateShop ,fetchListShop,selectedRows } = useContext(ShopModalContext);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpenUpdateShop(false);  
    };
    const handleCloseLoading = () => {
        setOpen(true)
        setOpenUpdateShop(false)
        setTimeout(async () => {
            fetchListShop();
           await setOpen(false);
           handelMessge();
        }, 2000);
    }
    const formik = useFormik({
        enableReinitialize:true,
        initialValues: 
           {
            id:selectedRows[0]?.key?? "",
            name:selectedRows[0]?.name?? "",
            address:selectedRows[0]?.address?? "",
            phone:selectedRows[0]?.phone?? "",
            hotline:selectedRows[0]?.hotline?? "",
            facebook:selectedRows[0]?.facebook?? "",
            email:selectedRows[0]?.email?? "",
            zalo:selectedRows[0]?.zalo?? "",
            logo:selectedRows[0]?.logo?? "",
            status:selectedRows[0]?.status?? "",         
            },
        
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await handleUpdateShop({
                id: values.id,
                addres: values.address,
                name: values.name,
                phone: values.phone,
                hotline: values.hotline,
                facebook: values.facebook,
                email: values.email,
                zalo: values.zalo,
                logo: values.logo,
                status: values.status,
            });  
            handleCloseLoading();
            formik.resetForm();         
        },
    });
    const handleUpdateShop = async ( { id,address, name, phone, hotline, facebook, email, zalo, logo, status }) =>
    {
        try{
            await ShopApi.Update(id,{id,address, name, phone, hotline, facebook, email, zalo, logo, status });       
        }
        catch(error){
            console.log(error)
        }
    };
    return (
        <>
            <Dialog open={openUpdateShop} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Update Shop"}</DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                    <DialogContent>
                        <div className={styles.inputModal}>
                            <div className={styles.inputLeft}>
                                <p>Name</p>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                            </div>
                            <div className={styles.inputRight}>
                                <p>Addres</p>
                                <TextField
                                    fullWidth
                                    id="address"
                                    name="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.address && Boolean(formik.errors.address)}
                                    helperText={formik.touched.address && formik.errors.address}
                                />
                            </div>
                        </div>
                        <div className={styles.inputModal}>
                            <div className={styles.inputLeft}>
                                <p>Phone</p>
                                <TextField
                                    fullWidth
                                    id="phone"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    helperText={formik.touched.phone && formik.errors.phone}
                                />
                            </div>
                            <div className={styles.inputRight}>
                                <p>Hotline</p>
                                <TextField
                                    fullWidth
                                    id="hotline"
                                    name="hotline"
                                    value={formik.values.hotline}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.hotline && Boolean(formik.errors.hotline)}
                                    helperText={formik.touched.hotline && formik.errors.hotline}
                                />
                            </div>
                        </div>
                        <div className={styles.inputModal}>

                            <div className={styles.inputLeft}>
                                <p>FaceBook</p>
                                <TextField
                                    fullWidth
                                    id="faceBook"
                                    name="faceBook"
                                    value={formik.values.facebook}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.facebook && Boolean(formik.errors.facebook)}
                                    helperText={formik.touched.facebook && formik.errors.facebook}
                                />
                            </div>
                            <div className={styles.inputRight}>
                                <p>Email</p>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </div>
                        </div>
                        <div className={styles.inputModal}>
                            <div>
                                <p>Zalo</p>
                                <TextField
                                    fullWidth
                                    id="zalo"
                                    name="zalo"
                                    value={formik.values.zalo}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.zalo && Boolean(formik.errors.zalo)}
                                    helperText={formik.touched.zalo && formik.errors.zalo}
                                />
                            </div>
                        </div>
                        <div className={styles.inputModal}>
                            <div>
                                <p>Logo</p>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </div>

                            <div>
                                <p>Status</p>
                                <FormControlLabel                               
                                    control={<Checkbox checked={formik.values.status}/>}
                                    label="activated"
                                    name="status"
                                    onChange={formik.handleChange}
                                />

                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button  variant="contained" type="submit">Save</Button>
                    </DialogActions>
                </form>
            </Dialog>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}
export default ModalUpdateShop;
