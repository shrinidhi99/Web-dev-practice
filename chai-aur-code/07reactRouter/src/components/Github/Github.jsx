import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    /*
        * Without async `loader`
        const [data, setData] = useState([]);
        useEffect(() => {
            fetch('https://api.github.com/users/shrinidhi99')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setData(data);
                })
        }, []);
    */
    return (
        <>
            <div className="bg-gray-600 text-center text-white text-3xl p-4">
                GitHub followers: {data.followers}
                <img src={data.avatar_url} alt="GitHub picture" width={300} />
            </div>
        </>
    )
}

export default Github;

export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shrinidhi99');
    return response.json();
}