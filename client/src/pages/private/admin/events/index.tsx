import { Button, message } from "antd"
import PageTitle from "../../../../components/page-title"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { getEvents } from "../../../../api-services/events-service";

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
            title: 'Event Name',
            dataIndex: "name"
        }
    ]

    return (
        <div>
            <div className="flex justify-between items-center">
                <PageTitle title="Events" />
                <Button type="primary" onClick={() => navigate('/admin/events/create')}>
                    Create Event

                </Button>
            </div>
        </div >
    )
}

export default EventsPage
