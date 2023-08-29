import { Button } from 'antd';
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