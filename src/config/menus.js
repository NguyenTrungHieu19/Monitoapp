import { Button } from 'antd';
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
        render: status=>(
            <span>{status?(<Button type="primary">activated</Button>):(<Button type="primary" danger>lock up</Button>) }</span>
          ) 
    },
]