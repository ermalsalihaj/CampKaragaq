import { useEffect, useState } from "react"
import PageTitle from "../../../../components/page-title"
import { BookingType } from "../../../../interfaces";
import { getAllBookings, getUserBookings } from "../../../../api-services/booking-service";
import { message, Table } from "antd";
import { getDateTimeFormat } from "../../../../helpers/date-time-formats";


function AdminBookingsPage() {
    const [bookings, setBookings] = useState<BookingType[]>([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true)
            const response = await getAllBookings()
            setBookings(response.data);
        } catch (error: any) {
            message.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const columns = [
        {
            title: 'Eventi',
            dataIndex: 'event',
            key: 'event',
            render: (event: any) => event?.name || 'N/A',
        },
        {
            title: 'Perdoruesi',
            dataIndex: 'user',
            key: 'user',
            render: (user: any) => user?.name || 'N/A',
        },
        {
            title: 'Data dhe Ora e Eventit',
            dataIndex: 'event',
            key: 'event',
            render: (event: any) => event?.date && event?.time ? getDateTimeFormat(`${event.date} ${event.time}`) : 'N/A'
        },
        {
            title: 'Lloji i Biletës',
            dataIndex: 'ticketType',
            key: 'ticketType'
        },
        {
            title: 'Numri i Biletave',
            dataIndex: 'ticketsCount',
            key: 'ticketsCount'
        },
        {
            title: 'Shuma e Biletës',
            dataIndex: 'totalAmount',
            key: 'totalAmount'
        },
        {
            title: 'Rezervuar më',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt: string) => createdAt ? getDateTimeFormat(createdAt) : 'N/A',
        },
        {
            title: 'Statusi',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => status ? status.toUpperCase() : 'N/A',
        }
    ]

    return (
        <div>
            <PageTitle title="REZERVIMET" />

            <Table
                dataSource={bookings}
                columns={columns}
                loading={loading}
                rowKey="_id"
                pagination={false}
            />
        </div>
    )
}

export default AdminBookingsPage
