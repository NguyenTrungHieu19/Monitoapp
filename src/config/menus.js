import { Button } from 'antd';
const activated = true;
export const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
    },
    {
        title:'Alias',
        dataIndex:'alias',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'ThumImage',
        dataIndex: 'thumImage',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render:(record) =>{
            return(
            <>
               {activated ? <Button type="primary">activated</Button>:<Button type="primary" danger>lock up</Button>} 
            </>
            )
        }
    },
]