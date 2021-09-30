import { React, useState, useEffect } from "react";

function Home() {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div>
            <h1>Coronattack Home</h1>
            <a href="/users/login">Login</a>
            <p>{!data ? "Loading..." : data}</p>
        </div>
    )
}

export default Home;
