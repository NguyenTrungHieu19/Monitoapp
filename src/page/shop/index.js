import * as React from 'react';
import { useState, useEffect } from 'react';
import ShopApi from '../../api/shopApi';
import { columnShop } from '../../config/shop';
import { Button, Input, Table } from 'antd';
import ShopModalContext from '../../context/shopModaleContext';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './index.module.scss'
import ModalCreateShop from '../../component/adminComponent/modalShop/createShop';
import ModalUpdateShop from '../../component/adminComponent/modalShop/updateShop';
import ModalDeleteShop from '../../component/adminComponent/modalShop/deleteShop';
import MessgeErorr from '../../component/ToastMessge/MessgeErorr/Erorr';
import MessgeSucsse from '../../component/ToastMessge/MessgeSucsse/Sucsse';
const column = columnShop;
const { Search } = Input;
const onSearch = (value) => console.log(value);

const ShopTable = (props) => {
  const [listShop, setListShop] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState({})
  const [openCreateShop, setOpenCreateShop] = useState(false);
  const [openUpdateShop, setOpenUpdateShop] = useState(false);
  const [openDeleteShop, setOpenDeleteShop] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const handleAdd = () => {
    setOpenCreateShop(true);
  };
  const handleUpdate = () => {
    setOpenUpdateShop(true);
  }
  const handleDelete =()=>{
    setOpenDeleteShop(true)
  }
  const fetchListShop = async (config = {}) => {
    try {
      const response = await ShopApi.GetAll(config);
      setListShop(response.data.map(row => (
        { key: row.id, name: row.name, address: row.address, phone: row.phone, hotline: row.hotline, email: row.email, facebook: row.faceBook, zalo: row.zalo, logo: row.logo, status: row.status }
      )))      
    } catch (err) {

    }
  };

  useEffect(() => {
    fetchListShop();
  }, []);

  useEffect(() => {
    setDisabled(!!!selectedRowKeys?.length)
  },[selectedRowKeys]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys)
      setSelectedRows(selectedRows)
  
    }};
    const handleEdit =()=>{  
      handleUpdate();
    }

  return (
    <ShopModalContext.Provider value={{ openCreateShop, setOpenCreateShop, openUpdateShop, setOpenUpdateShop,openDeleteShop, setOpenDeleteShop,selectedRowKeys, selectedRows,fetchListShop,listShop }}>
     <ModalCreateShop/>
     <ModalUpdateShop/>
     <ModalDeleteShop/>
     <MessgeSucsse/>
     <MessgeErorr/>
      <div className={styles.headerContent}>
        <div className={styles.headerleft}>
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </div>
        <div className={styles.headerButton}>
          <Button disabled={isDisabled} type="primary" className={styles.buttonEdit} onClick={handleEdit} >
            <BorderColorIcon />
          </Button>
          <Button disabled={isDisabled} type="primary" danger onClick={handleDelete}>
            <DeleteIcon />
          </Button>
          <Button  type="primary" onClick={handleAdd} >
            <AddIcon />
          </Button>
        </div>
      </div>
      <Table rowSelection={rowSelection} columns={column} dataSource={listShop} />
    </ShopModalContext.Provider>
  )
};
export default ShopTable;