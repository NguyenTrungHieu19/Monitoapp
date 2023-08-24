import { Button } from 'antd';

const activated = false;


export const columnShop = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title:'Address',
        dataIndex:'address',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
    },
    {
        title: 'Hotline',
        dataIndex: 'hotline',
    },
    {
        title: 'FaceBook',
        dataIndex: 'facebook',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Zalo',
        dataIndex: 'zalo',
    },
    {
        title: 'Logo',
        dataIndex: 'logo',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render:(record) =>{
            return(
            <>
               { activated? <Button type="primary">activated</Button>:<Button type="primary" danger>lock up</Button>} 
            </>
            )
        }
       
    },
]