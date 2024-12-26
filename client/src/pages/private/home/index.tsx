import { message } from "antd";
import { useEffect, useState } from "react"
import { getCurrentUser } from "../../../api-services/users-service";

function HomePage() {
    const [user, setUser] = useState<any>(null);

    const getData = async () => {
        try {
            const response = await getCurrentUser();
            setUser(response.data)
        } catch (error: any) {
            message.error(error.response.data.message || error.message)
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div >
            <h1>Homepage</h1>
            <p>Welcome, {user?.name} !</p>
        </div>
    )
}

export default HomePage
