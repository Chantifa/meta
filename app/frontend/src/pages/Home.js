import { React, useState, useEffect } from "react";
import {
    Link
} from "react-router-dom";

function Home() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div>
            <h1>Coronattack Home</h1>
                <Link to="/login">Login</Link>
            <br />
            {data}
        </div>
    )
}

export default Home;
