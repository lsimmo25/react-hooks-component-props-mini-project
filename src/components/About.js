import React from "react";

function About({ image, about }) {
    const imgSrc = image ? image : "https://via.placeholder.com/215Links to an external site."
    return (
        <aside>
            <img src={imgSrc} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About