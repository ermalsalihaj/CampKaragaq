import axios from "axios"

export const createEvent = async (data:any)=> {
    const response: any = axios.post("/api/events/create-event", data)
    return response.data
}