"use client"
import { useState } from "react";

function page() {
    const [isTrue, setIsTrue] = useState(true);

    return (
        <div className="flex flex-col w-3/4 m-10">
            <div className="content rounded-lg h-min p-2 ">
                <h1 className="front">Website</h1>
                <h1 className="back">Software</h1>
            </div>
        </div>
    );
}

export default page;
