import { Button } from 'antd';
const baseUrl = "http://localhost:52379"
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
        render:(logo)=><img src={baseUrl + logo} alt=''width="150px" height="50px" />
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: status=>(
            <span>{status?(<Button type="primary">activated</Button>):(<Button type="primary" danger>lock up</Button>) }</span>
          )        
    },
]