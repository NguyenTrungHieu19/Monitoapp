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
const colum = columnsProductPet
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
const ProductPet = (props) => {
    const [listProductPet, setListProductPet] = useState([]);
    const [isDisabled, setDisabled] = useState(true);
    const [pageIndexs, setPageIndex] = useState();
    const [pageSize, setPageSize] = useState(8);
    const [totalRows, setTotalRow] = useState(8)
    const fetchListShop = async (search,sortBy,page,pageSize) => {
        try {
            const response = await ProductPetApis.GetAllFillter(search,sortBy=8,page,pageSize);
            setListProductPet(response.data.items.map(row => (
                { key: row.id, maSanPham: row.maSanPham, tenSanPham: row.tenSanPham, price: row.price,
                     disCountPrice: row.disCountPrice, images: row.images, moTa: row.moTa, size: row.size,
                      gendeer: row.gendeer,status: row.status }   
                 
            )))
            setPageIndex(response.data.pageIndex +1)
            setTotalRow(response.data.totalRow)  
            setPageSize(8)
        } catch (err) {

        }
    };
    useEffect(() => {
        fetchListShop();
    }, [])
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
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
    useEffect(() => {
        setDisabled(!!!selectedRowKeys?.length)
      }, [selectedRowKeys]);
    const [openModalCreateProductPet,setOpenModalCreateProductPet] = useState(false)
    const [openModalUpProductPet,setOpenModalUpProductPet] = useState(false)
    const handleAdd = ()=>{
        setOpenModalCreateProductPet(true);
    }
    const handleUpdate =()=>{
        setOpenModalUpProductPet(true);
    }
    
    const paginations = {
        total:totalRows,
        current:pageIndexs,
        onChange: (page, pageSize) => {setPageIndex(page); setPageSize(pageSize)}
    }
    return (
        <ProductPetModalContext.Provider value={{openModalCreateProductPet,setOpenModalCreateProductPet,openModalUpProductPet,setOpenModalUpProductPet}}>
          <ModalCreateProductPet/>
          <ModalUpdateProductPet/>
            <div className={styles.headerContent}>
                <div className={styles.headerleft}>
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                </div>
                <div className={styles.headerButton}>
                    <Button disabled={isDisabled} type="primary" className={styles.buttonEdit} onClick={handleUpdate} >
                        <BorderColorIcon />
                    </Button>
                    <Button  disabled={isDisabled} type="primary" danger onClick={showDeleteConfirm}>
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