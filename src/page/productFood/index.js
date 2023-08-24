import * as React from 'react';
import { useState, useEffect } from 'react';
import ProductFoodApis from '../../api/productFoodApi';
import { columnsProductFood } from '../../config/productFood';
import styles from './index.module.scss'
import { Button, Modal,Input,Table  } from 'antd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { ExclamationCircleFilled } from '@ant-design/icons';
import ProductFoodContext from '../../context/productFoodContext';
import ModalCreateProductFood from '../../component/adminComponent/modalProductFood/createProductFood';
import ModalUpdateProductFood from '../../component/adminComponent/modalProductFood/updateProductFood';
const colum = columnsProductFood
const { Search } = Input;
const onSearch = (value) => console.log(value);
const { confirm } = Modal;
const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
const ProductFood = (props) => {
    const [listProductFood, setListProductFood] = useState([]);
    const [isDisabled, setDisabled] = useState(true);
    const fetchListShop = async (config = {}) => {
        try {
            const response = await ProductFoodApis.GetAll(config);
            setListProductFood(response.data.map(row => (
                { key: row.id, tenSanPham: row.tenSanPham, loaiSanPham: row.loaiSanPham, price: row.price, images: row.images,  size: row.size, status: row.status }
            )))
        } catch (err) {

        }
    };
    useEffect(() => {
        fetchListShop();
    }, []);
  
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [openModalCreateProductFood,setOpenModalCreateProductFood] = useState(false)
    const [openModalUpProductFood,setOpenModalUpProductFood] = useState(false)
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    useEffect(() => {
        setDisabled(!!!selectedRowKeys?.length)
      }, [selectedRowKeys])
    const rowSelection = {
        selectedRowKeys,
        fixed: "left",
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
        ],
    };
    
    const handleAdd = ()=>{
        setOpenModalCreateProductFood(true);
    }
    const handleUpdate =()=>{
        setOpenModalUpProductFood(true);
    }
  
    return (
        <ProductFoodContext.Provider value={{openModalCreateProductFood,setOpenModalCreateProductFood,openModalUpProductFood,setOpenModalUpProductFood}}>
           <ModalCreateProductFood/>
           <ModalUpdateProductFood/>
            <div className={styles.headerContent}>
                <div className={styles.headerleft}>
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                </div>
                <div className={styles.headerButton}>
                    <Button disabled={isDisabled} type="primary" className={styles.buttonEdit} onClick={handleUpdate} >
                        <BorderColorIcon />
                    </Button>
                    <Button disabled={isDisabled} type="primary" danger onClick={showDeleteConfirm}>
                        <DeleteIcon />
                    </Button>
                    <Button type="primary" onClick={handleAdd} >
                        <AddIcon />
                    </Button>
                </div>
            </div>
            <Table rowSelection={rowSelection} columns={colum} dataSource={listProductFood} pagination={false} />
        </ProductFoodContext.Provider>
    )
};
export default ProductFood;