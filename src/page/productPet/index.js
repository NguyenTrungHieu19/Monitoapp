import * as React from 'react';
import { useState, useEffect } from 'react';
import ProductPetApis from '../../api/productPetApi';
import { columnsProductPet } from '../../config/productPet';
import styles from './index.module.scss'
import { Button, Modal,Input,Table  } from 'antd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { ExclamationCircleFilled } from '@ant-design/icons';
import ProductPetModalContext from '../../context/productPetModalContext';
import ModalCreateProductPet from '../../component/adminComponent/modalProuctPet/create';
import ModalUpdateProductPet from '../../component/adminComponent/modalProuctPet/Update';
import ModalDeleteProductPet from '../../component/adminComponent/modalProuctPet/deleteProductPet';
const colum = columnsProductPet
const { Search } = Input;
const ProductPet = (props) => {
    const [listProductPet, setListProductPet] = useState([]);
    const [isDisabled, setDisabled] = useState(true);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [selectedRows, setSelectedRows] = useState({});
    const [openModalCreateProductPet,setOpenModalCreateProductPet] = useState(false);
    const [openModalUpProductPet,setOpenModalUpProductPet] = useState(false);
    const [openModalDeleteProductPet, setOpenModalDeleteProductPet] = useState(false);
    const [pageIndexs, setPageIndex] = useState(1);
    const [totalRows, setTotalRow] = useState(0);
    const [listSearch, setListSearch] = useState({});
    const pageSizes = 8;
    const handelSearch = () =>{ 
            fetchListProductPet();
    }
    const valueSearch = (value)=>{
        setListSearch(value)
    }
    const fetchListProductPet = async () => {
        try {
            const response = await ProductPetApis.GetAllFillter(listSearch,null,null,pageIndexs,pageSizes);
            setListProductPet(response.data.items.map(row => (
                { key: row.id, maSanPham: row.maSanPham, tenSanPham: row.tenSanPham, price: row.price,
                  disCountPrice: row.disCountPrice, images: row.images, moTa: row.moTa, size: row.size,
                  gendeer: row.gendeer,status: row.status }                  
            )))
            setTotalRow(response.data.totalRow)   
            console.log(response.data.totalRow)    
     
        } catch (err) {

        }
    };
    useEffect(() => {
          fetchListProductPet(); 
    },[pageIndexs])

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          setSelectedRowKeys(selectedRowKeys)
          setSelectedRows(selectedRows)
      
        }};

    useEffect(() => {
        setDisabled(!!!selectedRowKeys?.length)
      }, [selectedRowKeys]);

    const handleAdd = ()=>{
        setOpenModalCreateProductPet(true);
    }
    const handleUpdate =()=>{
        setOpenModalUpProductPet(true);
    }  
    const handleDelete=()=>{
        setOpenModalDeleteProductPet(true);
    }  
    const paginations = {
        total:totalRows,
        current:pageIndexs,
        onChange: (page) => {setPageIndex(page)}  
    }
    return (
        <ProductPetModalContext.Provider value={{openModalCreateProductPet,setOpenModalCreateProductPet,
                                                openModalUpProductPet,setOpenModalUpProductPet,
                                                openModalDeleteProductPet,setOpenModalDeleteProductPet,
                                                fetchListProductPet,selectedRowKeys,selectedRows}}>
          <ModalCreateProductPet/>
          <ModalUpdateProductPet/>
          <ModalDeleteProductPet/>
            <div className={styles.headerContent}>
                <div>
                    <h1>Product Pet</h1>
                </div>
                <div className={styles.headerleft}>
                    <Search placeholder="input search product pet" onChange={e => valueSearch(e.target.value)} onSearch={handelSearch} allowClear enterButton="Search" />
                </div>
                <div className={styles.headerButton}>
                    <Button disabled={isDisabled} type="primary" className={styles.buttonEdit} onClick={handleUpdate} >
                        <BorderColorIcon />
                    </Button>
                    <Button  disabled={isDisabled} type="primary" danger onClick={handleDelete}>
                        <DeleteIcon />
                    </Button>
                    <Button type="primary" onClick={handleAdd} >
                        <AddIcon />
                    </Button>
                </div>
            </div>
            <Table rowSelection={rowSelection} columns={colum} dataSource={listProductPet} pagination={paginations} />
        </ProductPetModalContext.Provider>
    )
};
export default ProductPet;