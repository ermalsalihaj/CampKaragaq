import { useEffect, useState } from "react"
import usersGlobalStore, { UsersStoreType } from "../../../store/users-store"
import { getEvents } from "../../../api-services/events-service"
import { message } from "antd"
import EventCard from "./common/event-card"
import { EventType } from "../../../interfaces"


function HomePage() {
    const [events, setEvents] = useState<EventType[]>([])
    const [loading, setLoading] = useState(false)
    const { currentUser } = usersGlobalStore() as UsersStoreType

    const getData = async () => {
        try {
            setLoading(true);
            const response = await getEvents();
            setEvents(response.data);
        } catch (error) {
            message.error('Failed to fetch data')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div >
            <p>Welcome, {currentUser?.name} !</p>
            <div className="flex flex-col gap-7">
                {events.map((event: any) => (
                    <EventCard key={event._id} event={event} />
                ))}
            </div>

        </div>
    )
}

export default HomePage
