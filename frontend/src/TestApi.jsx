import { useEffect, useState } from "react";
import axios from "axios";

function TestApi() {
    const [message, setMessage] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3001/api/test")
            .then(response => setMessage(response.data.message))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>API Test</h1>
            <p>{message}</p>
        </div>
    );
}

export default TestApi;