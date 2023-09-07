import { Button } from 'antd';
const baseUrl = "http://localhost:52379"
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
        render:(images)=><img src={baseUrl + images} alt='' width="100px" height="100px"/>
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