import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from "./index.module.scss"
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Notification from '../adminComponent/modalNotification';
import { useState } from 'react';
import NotificationModalContext from '../../context/notificationModalContext';
import { Dropdown, Menu } from 'antd';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { useNavigate } from 'react-router';
const Topbar = () => {
  const [openNotication, setOpenNotifiCation] = useState(false);
  const navigate = useNavigate()
  const handleAdd = () => {
    setOpenNotifiCation(true)
  }
  const handleLogout =()=>{
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    navigate("/login")
  }
  const menus =(
  <Menu>
    <Menu.Item>
      <div className={styles.menuItem}>  
         <PersonOutlineIcon />
         <p>Account information</p>
      </div>
      <div className={styles.menuItem}>  
        <ChangeCircleIcon/>
         <p>Change Password</p>
      </div>
      <div onClick={handleLogout} className={styles.menuItem}>  
         <LoginIcon />
         <p>LogOut</p>
      </div>
    </Menu.Item>
    </Menu>
  )

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
          <Dropdown overlay={menus} trigger={['click']}>          
              <AccountCircleIcon onClick={(e) => e.preventDefault()} />         
          </Dropdown>
        </div>
      </div>
      <Notification />
    </NotificationModalContext.Provider>
  );
};

export default Topbar;