import { React, useState, useEffect } from "react";

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
            <a href="/users/login">Login</a>
            <br />
            {data}
        </div>
    )
}

export default Home;
