import { useEffect, useState } from "react"
import PageTitle from "../../../../components/page-title"
import AdminReportsFilters from "./filters"
import { getEvents } from "../../../../api-services/events-service"
import { message } from "antd"
import { getAdminReports } from "../../../../api-services/reports-route"

function AdminReports() {
    const [reports, setReports] = useState({})
    const [events, setEvents] = useState([])
    const [filters, setFilters] = useState({
        startDate: '',
        endDate: '',
        eventId: '',
    })

    const getReports = async () => {
        try {
            const response = await getAdminReports(filters);
            setReports(response.data)
        } catch (error: any) {
            message.error(error.message)
        }
    }

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

    useEffect(() => {
        if (events.length > 0)
            getReports();
    }, [events])

    return (
        <div>
            <PageTitle title="Raportet" />
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
