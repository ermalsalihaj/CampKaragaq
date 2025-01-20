import { useEffect, useState } from "react"
import { EventType } from "../../../interfaces"
import { useParams } from "react-router-dom"
import { getEventById } from "../../../api-services/events-service"
import { message } from "antd"
import Spinner from "../../../components/spinner"

function EventInfoPage() {
    const [eventData, setEventData] = useState<EventType | null>(null)
    const [loading, setLoading] = useState(false)
    const params: any = useParams()

    const getData = async () => {
        try {
            setLoading(true);
            const response = await getEventById(params.id)
            setEventData(response.data)
        } catch (error) {
            message.error('Failed to fetch event')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if (loading) {
        return <div className="flex h-screen justify-center items-center">
            <Spinner />
        </div>
    }

    return (
        <div>
            EventInfoPage
        </div>
    )
}

export default EventInfoPage
