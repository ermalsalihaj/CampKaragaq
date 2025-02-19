import { useEffect, useState } from "react"
import PageTitle from "../../../../components/page-title"
import { BookingType } from "../../../../interfaces";
import { cancelBooking, getUserBookings } from "../../../../api-services/booking-service";
import { message, Popconfirm, Table } from "antd";
import { getDateTimeFormat } from "../../../../helpers/date-time-formats";


function UserBookingPage() {
    const [bookings, setBookings] = useState<BookingType[]>([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true)
            const response = await getUserBookings()
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

    const onCancelBooking = async (booking: BookingType) => {
        try {
            setLoading(true);
            const payload = {
                eventId: booking.event._id,
                ticketTypeName: booking.ticketType,
                ticketsCount: booking.ticketsCount,
                bookingId: booking._id,
                paymentId: booking.paymentId,
            }

            await cancelBooking(payload);
            message.success('Booking cancelled successfully')
            getData()
        } catch (error: any) {
            message.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    const columns = [
        {
            title: 'Emri i Eventit',
            dataIndex: 'event',
            key: 'event',
            render: (event: any) => event.name,
        },
        {
            title: 'Data dhe Ora e Eventit',
            dataIndex: 'event',
            key: 'event',
            render: (event: any) => getDateTimeFormat(`${event.date} ${event.time}`)

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
            title: 'Statusi',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => status.toUpperCase(),
        }
        ,
        {
            title: 'Rezervuar më',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt: string) => getDateTimeFormat(createdAt),
        },

        ,
        {
            title: 'Vepro',
            key: 'action',
            render: (record: BookingType) => {
                if (record.status === 'booked') {
                    return (
                        <Popconfirm
                            title='A jeni i sigurt që dëshironi të anuloni këtë rezervim?'
                            onConfirm={() => onCancelBooking(record)}
                            okText='Po'
                            cancelText='Jo'
                        >
                            <span
                                className="text-gray-600 cursor-pointer text-sm underline"
                            >
                                Anulo
                            </span>
                        </Popconfirm>
                    )
                }
                return '';
            },
        }
    ]

    return (
        <div>
            <PageTitle title="Bookings" />

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

export default UserBookingPage
