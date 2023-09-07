import { Button } from 'antd';
const baseUrl = "http://localhost:52379"
export const columnsProductPet = [
    {
        title: 'ProductCode',
        dataIndex: 'maSanPham',
    },
    {
        title:'Name',
        dataIndex:'tenSanPham',
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
    {
        title: 'DisCountPrice',
        dataIndex: 'disCountPrice',
    },
    {
        title: 'Images',
        dataIndex: 'images',
        render:(images)=><img src={baseUrl +images} alt="" width="100px" height="100px"/>
    },
    {
        title: 'Discriptions',
        dataIndex: 'moTa',
    },
    {
        title: 'Age',
        dataIndex: 'size',
    },
    {
        title: 'Gender',
        dataIndex: 'gendeer',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: status=>(
            <span>{status?(<Button type="primary">activated</Button>):(<Button type="primary" danger>lock up</Button>) }</span>
          )        
    },
]