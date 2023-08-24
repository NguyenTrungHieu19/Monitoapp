import { Button } from 'antd';
const KichHoat = true;
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
    // {
    //     title: 'Discriptions',
    //     dataIndex: 'moTa',
    // },
    {
        title: 'Weight',
        dataIndex: 'size',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render:(record) =>{
            return(
            <>
               {KichHoat ? <Button type="primary">Kích hoạt</Button>:<Button type="primary" danger>khóa</Button>} 
            </>
            )
        }
    },
]