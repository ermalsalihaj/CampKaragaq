import { useEffect, useState } from "react"
import PageTitle from "../../../../components/page-title"
import { getUserReports } from "../../../../api-services/reports-service"
import { message } from "antd"
import ReportCard from "../../admin/reports/report-card"

function UserReports() {
    const [reports, setReports] = useState<any>({})

    const getData = async () => {
        try {
            const response = await getUserReports();
            setReports(response.data);
        } catch (error: any) {
            message.error(error.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <PageTitle title="Raportet" />

            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <ReportCard
                    title='Totali i rezervimeve'
                    description='Numri total i rezervimeve të bëra nga përdoruesi aktual'
                    value={reports.totalBookings}
                    isAmountProperty={false}
                />

                <ReportCard
                    title='Rezervime të anuluara'
                    description='Numri total i rezervimeve të anuluara nga përdoruesi aktual'
                    value={reports.cancelledBookings}
                    isAmountProperty={false}
                />

                <ReportCard
                    title='Shuma e shpenzuar'
                    description='Shuma totale e shpenzuar nga përdoruesit aktual'
                    value={reports.totalAmountSpent}
                    isAmountProperty={true}
                />

                <ReportCard
                    title='Shuma e marrë nga rimbursimet'
                    description='Shuma totale e marrë në rimbursime për rezervimet e anuluara'
                    value={reports.totalAmountReceivedAsRefund}
                    isAmountProperty={true}
                />

                <ReportCard
                    title='Bileta të blera'
                    description='Numri total i biletave të blera për të gjitha eventet nga përdoruesi aktual'
                    value={reports.totalTickets}
                    isAmountProperty={false}
                />

                <ReportCard
                    title='Biletat e anuluara'
                    description='Numri total i biletave të anuluara për të gjitha eventet nga përdoruesi aktual'
                    value={reports.cancelledTickets}
                    isAmountProperty={false}
                />
            </div>
        </div>
    )
}

export default UserReports
