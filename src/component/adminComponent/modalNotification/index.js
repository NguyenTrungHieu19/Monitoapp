import React, { useContext} from 'react';
import { Drawer } from 'antd';
import NotificationModalContext from '../../../context/notificationModalContext';
const Notification = () => {
const {openNotication, setOpenNotifiCation}= useContext(NotificationModalContext)
const handleClose =()=>{
  setOpenNotifiCation(false)
}
  return (

    <>
      <Drawer title="Notification" placement="right" onClose={handleClose} open={openNotication}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default Notification;
