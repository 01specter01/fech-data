import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../images/nyc.jpg";

function DataFetching() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });
    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {" "}
                        {post.title}{" "}
                        <img
                            src={img}
                            alt="img"
                            style={{
                                width: "200px",
                            }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DataFetching;
