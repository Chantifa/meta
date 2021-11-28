import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "./MainComponent.css";

const MainComponent = () => {
    const [userValues, setValues] = useState([]);
    const [userValue, setValue] = useState("");

    const getAllUsers = useCallback(async () => {
        // we will use nginx to redirect it to the proper URL
        const userData = await axios.get("/api/users/register");
        setValues(userData.data.rows.map(row => row.users));
    }, []);

    const saveUser = useCallback(
        async event => {
            event.preventDefault();

            await axios.post("/api/users/register", {
                userValue
            });

            setValue("");
            getAllUsers();
        },
        [userValue, getAllUsers]
    );

    useEffect(() => {
        getAllUsers();
        // eslint-disable-next-line
      }, []);
 



    return (
        <div>
            <button onClick={getAllUsers}>Get all Users</button>
            <br />
            <span className="title">User Values</span>
            <div className="userValues">
                {userValues.map(userValue => (
                    <div className="userValue">{userValue}</div>
                ))}
            </div>
            <form className="form" onSubmit={saveUser}>
                <label>Enter your user details: </label>
                <input value={userValue} onChange={event => {
                    setValue(event.target.value);
                }}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};


export default MainComponent;