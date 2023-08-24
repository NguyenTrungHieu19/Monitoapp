import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from "./index.module.scss"
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Notification from '../adminComponent/modalNotification';
import { useState } from 'react';
import NotificationModalContext from '../../context/notificationModalContext';
import { Dropdown } from 'antd';
import AccountItem from '../../config/accountConfig';

const items = AccountItem
const Topbar = () => {
  const [openNotication, setOpenNotifiCation] = useState(false);

  const handleAdd = () => {
    setOpenNotifiCation(true)
  }
  return (
    <NotificationModalContext.Provider value={{ openNotication, setOpenNotifiCation }}>
      <div className={styles.HeaderSideBar}>
        <div>
          <Typography variant="h6" noWrap component="div">
            Monito
          </Typography>
        </div>
        <div className={styles.IconNotification} >
          <NotificationsIcon onClick={handleAdd} />
          <Dropdown menu={{ items }} trigger={['click']}>          
              <AccountCircleIcon onClick={(e) => e.preventDefault()} />         
          </Dropdown>
        </div>
      </div>
      <Notification />
    </NotificationModalContext.Provider>
  );
};

export default Topbar;