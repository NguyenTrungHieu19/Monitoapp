import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { store } from "../../../store";
import { HideMessgeSucsse } from "../../../store/action/NoticationMessge";

const MessgeSucsse = (props) => {
  const [notiStore, setNotiStore] = useState(store.getState().sucsseMessgea);
  const WatchStore = () => {
    store.subscribe(() => setNotiStore(store.getState().sucsseMessgea))
  };
  WatchStore();
  const handleClose =()=>{
    store.dispatch(HideMessgeSucsse());
  }
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={notiStore.isOpen}
        onClose={handleClose}
        autoHideDuration={2000}
      >
        <Alert severity="success" sx={{ width: '100%' }} message={notiStore.content}>
        You have successfully updated!
        </Alert>
      </Snackbar>
    </>
  )
}
export default MessgeSucsse;