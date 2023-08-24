import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
const AccountItem = [
   
        {
          icon: <PersonOutlineIcon />,
          label: 'Account information',
          key: '0',
        },
        {
          icon:<ChangeCircleIcon/>,
          label:'Change Password',
          key: '1',
        },
        
        {
          icon:<LoginIcon/>,
          label: 'Logout',
          key: '2',
        },
  
];
export default AccountItem;