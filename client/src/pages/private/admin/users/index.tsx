import { useEffect, useState } from "react";
import { UserType } from "../../../../interfaces";
import { message, Table } from "antd";
import { getAllUsers } from "../../../../api-services/users-service";
import PageTitle from "../../../../components/page-title";
import { getDateTimeFormat } from "../../../../helpers/date-time-formats";


function UsersPage() {
    const [users, setUsers] = useState<UserType[]>([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true)
            const response = await getAllUsers()
            setUsers(response.data);
        } catch (error: any) {
            message.error(error.response.data.message || error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: 'id',

        },
        {
            title: 'Emri',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',

        },
        {
            title: 'Rezervuar më',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt: string) => getDateTimeFormat(createdAt),
        },


    ]

    return (
        <div>
            <PageTitle title="Users" />
            <Table dataSource={users} columns={columns} loading={loading} rowKey='_id' />
        </div>
    )
}

export default UsersPage
