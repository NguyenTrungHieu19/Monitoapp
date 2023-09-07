import { useContext, useState } from "react";
import ProductPetModalContext from "../../../context/productPetModalContext";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { UploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { Button, Backdrop, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField, Checkbox } from "@mui/material";
import styles from '../modalProuctPet/index.module.scss'
import ProductPetApis from "../../../api/productPetApi";
const validationSchema = yup.object({
    maSanPham: yup
        .string('Please enter your Product Code')
        .max(6, 'Too long')
        .required('Product code is required'),
    tenSanPham: yup
        .string('Please enter your name')
        .required('Name is required'),
    price: yup
        .number('Please enter your price')
        .min(1, 'Price must be greater than 0')
        .required("Price is required"),
    disCountPrice: yup.number()
        .when('price', (price, schema) => {
            if (price) {
                return schema.lessThan(price, 'Discount Price must be less than Original Price')
                    .notOneOf([price], 'Discount Price cannot be equal to Original Price');
            }
            return schema;
        })
});
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
const ModalUpdateProductPet = () => {
    const { openModalUpProductPet,setOpenModalUpProductPet,fetchListProductPet,selectedRows } = useContext(ProductPetModalContext);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpenModalUpProductPet(false);
    };

    const handleCloseLoading = () => {
        setOpen(true)
        setOpenModalUpProductPet(false);
        setTimeout(async () => {
            fetchListProductPet();
            await setOpen(false);
        }, 2000);

    }
    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            id:selectedRows[0]?.key?? "",
            maSanPham:selectedRows[0]?.maSanPham?? "",
            tenSanPham:selectedRows[0]?.tenSanPham?? "",
            price:selectedRows[0]?.price?? "",
            disCountPrice:selectedRows[0]?.disCountPrice?? "",
            images:selectedRows[0]?.images?? "",
            moTa:selectedRows[0]?.moTa?? "",
            size:selectedRows[0]?.size?? "",
            gendeer:selectedRows[0]?.gendeer?? "",
            status:selectedRows[0]?.status?? "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await handleUpdateProductPet({
                id:values.id,
                maSanPham:values.maSanPham,
                tenSanPham:values.tenSanPham,
                price:values.price,
                disCountPrice:values.disCountPrice,
                images:values.images,
                moTa:values.moTa,
                size:values.size,
                gendeer:values.gendeer,
                status:values.status,
                });
                formik.resetForm();
        },
    });
   const handleUpdateProductPet= async({id, maSanPham, tenSanPham, price, disCountPrice, images, moTa, size, gendeer, status})=>{
    try{

        await ProductPetApis.Update(id,{id, maSanPham, tenSanPham, price, disCountPrice, images, moTa, size, gendeer, status})
    }
    catch(err)
    {

    }
   }
    return (
        <>         
           <Dialog open={openModalUpProductPet} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Create Shop"}</DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                    <DialogContent>
                        <div className={styles.inputModal}>
                            <div className={styles.inputLeft}>
                                <p>Product Code</p>
                                <TextField
                                    fullWidth
                                    id="maSanPham"
                                    name="maSanPham"
                                    value={formik.values.maSanPham}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.maSanPham && Boolean(formik.errors.maSanPham)}
                                    helperText={formik.touched.maSanPham && formik.errors.maSanPham}
                                />
                            </div>
                            <div className={styles.inputRight}>
                                <p>Name</p>
                                <TextField
                                    fullWidth
                                    id="tenSanPham"
                                    name="tenSanPham"
                                    value={formik.values.tenSanPham}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.tenSanPham && Boolean(formik.errors.tenSanPham)}
                                    helperText={formik.touched.tenSanPham && formik.errors.tenSanPham}
                                />
                            </div>
                        </div>
                        <div className={styles.inputModal}>
                            <div className={styles.inputLeft}>
                                <p>Price</p>
                                <TextField
                                    fullWidth
                                    id="price"
                                    type="number"
                                    name="price"
                                    value={formik.values.price}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.price && Boolean(formik.errors.price)}
                                    helperText={formik.touched.price && formik.errors.price}
                                />
                            </div>
                            <div className={styles.inputRight}>
                                <p>DisCount Price</p>
                                <TextField
                                    fullWidth
                                    id="disCountPrice"
                                    name="disCountPrice"
                                    type="number"
                                    value={formik.values.disCountPrice}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.disCountPrice && Boolean(formik.errors.disCountPrice)}
                                    helperText={formik.touched.disCountPrice && formik.errors.disCountPrice}
                                />
                            </div>
                        </div>
                        <div >
                            <p>Discription</p>
                            <TextField
                                id="moTa"
                                name="moTa"
                                value={formik.values.moTa}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.moTa && Boolean(formik.errors.moTa)}
                                helperText={formik.touched.moTa && formik.errors.moTa}
                                multiline
                                rows={4}
                            />
                        </div>
                        <div className={styles.inputModal}>
                            <div className={styles.inputLeft}>
                                <p>Gender</p>
                                <TextField
                                    fullWidth
                                    id="gendeer"
                                    name="gendeer"
                                    value={formik.values.gendeer}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.gendeer && Boolean(formik.errors.gendeer)}
                                    helperText={formik.touched.gendeer && formik.errors.gendeer}
                                />
                            </div>
                            <div className={styles.inputRight}>
                                <p>Age</p>
                                <TextField
                                    fullWidth
                                    id="size"
                                    name="size"
                                    value={formik.values.size}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.size && Boolean(formik.errors.size)}
                                    helperText={formik.touched.size && formik.errors.size}
                                />
                            </div>
                        </div>
                        <div className={styles.inputModal}>
                            <div className={styles.inputRight}>
                                <p>Images</p>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </div>
                            <div>
                                <p>Status</p>
                                <FormControlLabel
                                    control={<Checkbox checked={formik.values.status} />}
                                    id="status"
                                    label="activated"
                                    name="status"
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleCloseLoading} variant="contained" type="submit">Save</Button>
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
export default ModalUpdateProductPet;