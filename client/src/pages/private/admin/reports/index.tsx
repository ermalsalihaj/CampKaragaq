import { useEffect, useState } from "react"
import PageTitle from "../../../../components/page-title"
import AdminReportsFilters from "./filters"
import { getEvents } from "../../../../api-services/events-service"
import { message, Table } from "antd"
import { getAdminReports } from "../../../../api-services/reports-service"
import ReportCard from "./report-card"

function AdminReports() {
    const [reports, setReports] = useState<any>({})
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

    const ticketTypesColumns = [
        {
            title: 'Lloji i Biletës',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Bileta të Shitura',
            dataIndex: 'ticketsSold',
            key: 'ticketsSold',

        },
        {
            title: 'Të Ardhurat',
            dataIndex: 'revenue',
            key: 'revenue',
        }
    ]

    return (
        <div>
            <PageTitle title="Raportet" />
            <AdminReportsFilters
                events={events}
                filters={filters}
                setFilters={setFilters}
                onFilter={getReports}
            />

            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <ReportCard
                    title='Totali i rezervimeve'
                    description='Numri total i rezervimeve të bëra nga përdoruesit'
                    value={reports.totalBookings}
                    isAmountProperty={false}
                />

                <ReportCard
                    title='Rezervime të anuluara'
                    description='Numri total i rezervimeve të anuluara nga përdoruesit'
                    value={reports.cancelledBookings}
                    isAmountProperty={false}
                />

                <ReportCard
                    title='Të ardhurat totale'
                    description='Të ardhurat totale të gjeneruara nga të gjitha rezervimet'
                    value={reports.totalRevenueCollected}
                    isAmountProperty={true}
                />

                <ReportCard
                    title='Shuma e Rimbursuar'
                    description='Shuma totale e rimbursuar për rezervimet e anuluara'
                    value={reports.totalRevenueRefunded}
                    isAmountProperty={true}
                />

                <ReportCard
                    title='Bileta të shitura'
                    description='Numri total i biletave të shitura për të gjitha eventet'
                    value={reports.totalTickets}
                    isAmountProperty={false}
                />

                <ReportCard
                    title='Biletat e anuluara'
                    description='Numri total i biletave të anuluara për të gjitha eventet'
                    value={reports.cancelledTickets}
                    isAmountProperty={false}
                />
            </div>

            {reports.ticketTypesAndTheirSales &&
                <div className="mt-7 flex flex-col gap-5">
                    <h1 className="text-info text-sm font-bold col-span-4">
                        Shitja e biletave sipas Eventit
                    </h1>

                    <Table
                        columns={ticketTypesColumns}
                        dataSource={reports.ticketTypesAndTheirSales}
                    />
                </div>
            }
        </div>
    )
}

export default AdminReports
