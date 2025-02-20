import { useEffect, useState } from "react";
import { UserType } from "../../../../interfaces";
import { message, Table } from "antd";
import { getAllUsers, updateUserData } from "../../../../api-services/users-service";
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

    const updateUser = (data: any) => {
        try {
            setLoading(true)
            updateUserData(data)
            message.success('Përdoruesi u përditësua me sukses')
            getData()
        } catch (error: any) {
            message.error(error.response.data.message || error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const columns: any = [
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
        {
            title: 'Roli',
            dataIndex: 'isAdmin',
            key: 'isAdmin',
            render: (isAdmin: boolean, row: UserType) => {
                return <select value={isAdmin ? 'admin' : 'user'}
                    className="border border-solid border-gray-600"
                    onChange={(e) => {
                        const isAdminUpdated = e.target.value === 'admin';
                        updateUser({ userId: row._id, isAdmin: isAdminUpdated })
                    }}
                >
                    <option value="user">Përdoruesi</option>
                    <option value="admin">Admin</option>
                </select>
            },

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
