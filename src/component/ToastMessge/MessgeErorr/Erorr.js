import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { store } from "../../../store";
import { HideMessgeErorr } from "../../../store/action/NoticationMessge";


const MessgeErorr = () => {
    const [erorrStore, setErorrStore] = useState(store.getState().erorrMessgea);
    const WatchStore = () => {
      store.subscribe(() => setErorrStore(store.getState().erorrMessgea))
    };
    WatchStore();
    const handleClose =()=>{
      store.dispatch(HideMessgeErorr());
    }
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={erorrStore.isOpen}
                onClose={handleClose}
                autoHideDuration={2000}
            >
                <Alert severity="error">This is an error message!</Alert>
            </Snackbar>
        </>

    )
};
export default MessgeErorr;
