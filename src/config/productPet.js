import { Button } from 'antd';
const KichHoat = true;
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
        render:(record) =>{
            return(
            <>
               {KichHoat ? <Button type="primary">Kích hoạt</Button>:<Button type="primary" danger>khóa</Button>} 
            </>
            )
        }
    },
]