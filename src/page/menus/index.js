import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { columns } from '../../config/menus';
import MenuApis from '../../api/menuApi';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import styles from "./index.module.scss"
import { Input } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import MenuModalContext from '../../context/menuModalContext';
import ModalCreateMenu from '../../component/adminComponent/modalMenu/menuCreate';
import ModalUpdateMenu from '../../component/adminComponent/modalMenu/menu.update';

const { confirm } = Modal;
const { Search } = Input;
const column = columns;
const onSearch = (value) => console.log(value);
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

const MenusTable = () => {

  const [listMenu, setListMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openModalUpdate, setOpenModalUpade] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const fetchListMenu = async (config = {}) => {
    try {
      const response = await MenuApis.GetAll(config);
      // console.log(response)
      setListMenu(response.data.map(row => (
        { key: row.id, stt: row.stt, alias: row.alias, name: row.name, thumImages: row.thumImages, status: row.status }
      )));
      setLoading(false);

    } catch (err) {
      console.log(err)
    }
  };
  useEffect(() => {
    fetchListMenu();
    onSelectChange();
  },[])
  const handleAdd =()=>{
    setIsOpenModal(true)
  }
  const handleUpdate =()=>{
    setOpenModalUpade(true)
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
useEffect(() => {
  setDisabled(!!!selectedRowKeys?.length)
}, [selectedRowKeys])
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  };
  return (
    <MenuModalContext.Provider value={{ isOpenModal, setIsOpenModal,openModalUpdate,setOpenModalUpade }}>
     <ModalCreateMenu/>
     <ModalUpdateMenu/>
      <div className={styles.headerContent}>
        <div className={styles.headerleft}>
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </div>
        <div className={styles.headerButton}>
          <Button  disabled={isDisabled} type="primary" className={styles.buttonEdit} onClick={handleUpdate} >
            <BorderColorIcon />
          </Button>
          <Button  disabled={isDisabled}  type="primary" danger onClick={showDeleteConfirm}>
            <DeleteIcon />
          </Button>
          <Button type="primary" onClick={handleAdd} >
            <AddIcon />
          </Button>
        </div>
      </div>
      <Table rowSelection={rowSelection} columns={column} dataSource={listMenu} className={styles.MenuTable} />
    </MenuModalContext.Provider>
  )

};
export default MenusTable;