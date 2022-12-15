import React from "react";
import {UserAuth} from "../context/AuthContext";



const Home = () => {

    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <div>
            <div>Home</div>
            <p>Welcome, {user?.displayName}</p>
            <button onClick={handleSignOut} className="material-symbols-outlined">logout</button>
        </div>
    )
};

export default Home;