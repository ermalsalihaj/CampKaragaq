import { useEffect, useState } from "react"
import PageTitle from "../../../../components/page-title"
import AdminReportsFilters from "./filters"
import { getEvents } from "../../../../api-services/events-service"
import { message } from "antd"

function AdminReports() {
    const [events, setEvents] = useState([])
    const [filters, setFilters] = useState({
        startDate: '',
        endDate: '',
        eventId: '',
    })

    const getEventsData = async () => {
        try {
            const response = await getEvents({
                searchText: '', date: ''
            })
            setEvents(response.data)
        } catch (error: any) {
            message.error(error.message)
        }
    }

    useEffect(() => {
        getEventsData();
    }, [])

    return (
        <div>
            <PageTitle title="Reports" />
            <AdminReportsFilters
                events={events}
                filters={filters}
                setFilters={setFilters}
                onFilter={() => { }}
            />
        </div>
    )
}

export default AdminReports
