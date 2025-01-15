import { Button, message, Table } from "antd"
import PageTitle from "../../../../components/page-title"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { getEvents } from "../../../../api-services/events-service";
import { getDateTimeFormat } from "../../../../helpers/date-time-formats";
import { Trash2, Pen } from "lucide-react";

function EventsPage() {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    const getData = async () => {
        try {
            setLoading(true);
            const response = await getEvents()
            setEvents(response.data)
        } catch (error) {
            message.error('Failed to fetch events')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const columns = [
        {
            title: 'Emri i Eventit',
            dataIndex: "name"
        },
        {
            title: 'Data dhe Ora',
            dataIndex: "date",
            render: (date: any, row: any) => {
                return getDateTimeFormat(`${date} ${row.time}`);
            },
            key: 'date'
        },
        {
            title: 'Organizatori',
            dataIndex: "organizer",
            key: 'organizer'

        },
        {
            title: 'Krijuar më',
            dataIndex: "createdAt",
            render: (date: any) => getDateTimeFormat(date),
        },
        {
            title: 'Aksionet',
            dataIndex: "actions",
            render: (text: any, record: any) => (
                <div className="flex gap-5">
                    <Trash2
                        className="cursor-pointer text-red-700" size={16}
                    />
                    <Pen
                        className="cursor-pointer text-yellow-700"
                        size={16} onClick={() => navigate(`/admin/events/edit/${record._id}`)}
                    />
                </div>
            ),
        },
    ]

    return (
        <div>
            <div className="flex justify-between items-center">
                <PageTitle title="Events" />
                <Button type="primary" onClick={() => navigate('/admin/events/create')}>
                    Create Event

                </Button>
            </div>

            <Table dataSource={events} columns={columns} loading={loading} />
        </div >
    )
}

export default EventsPage
