"use client";
import NavigationBar from "@/components/NavigationBar";
import { useRef, useState, useEffect } from "react";

function ContentPage({ children, displayName }) {
    const divRef = useRef();
    const [isBgTransparent, setIsTransparent] = useState(true);
    function scrollTracker() {
        if (divRef.current.scrollTop <= 1) {
            setIsTransparent(true);
        } else {
            setIsTransparent(false);
        }
    } 
    useEffect(() => {
        divRef.current.addEventListener("scroll", scrollTracker);
        return () => {
            divRef.current.removeEventListener("scroll", scrollTracker);
        };
    }, []);
    return (
        <div>
            <NavigationBar
                isBgTransparent={isBgTransparent}
                displayName={displayName}
            />
            <div ref={divRef} className="content-page-bg">
                {children}
            </div>
        </div>
    );
}

export default ContentPage;
