import { Button } from 'antd';
export const columnsProductFood = [

    {
        title:'Name',
        dataIndex:'tenSanPham',
    },
    {
        title: 'ProductToy',
        dataIndex: 'loaiSanPham',
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
    {
        title: 'Images',
        dataIndex: 'images',
    },
    {
        title: 'Weight',
        dataIndex: 'size',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: status=>(
            <span>{status?(<Button type="primary">activated</Button>):(<Button type="primary" danger>lock up</Button>) }</span>
          )        
    },
]