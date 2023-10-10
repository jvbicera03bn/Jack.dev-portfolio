"use client";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Typewriter } from "react-simple-typewriter";

function VerifiedOccupation() {
    const TypeWriterWords = ["Web Developer", "Software Developer"];
    const RNG = Math.floor(Math.random() * 20);
    const RNG2 = Math.floor(Math.random() * 20);
    const RNG3 = Math.floor(Math.random() * 20) * 1000;

    return (
        <div className="text-lg font-medium flex flex-row gap-1 items-center">
            |
            <VscVerifiedFilled color="3D91F4" />
            <Typewriter
                words={TypeWriterWords}
                loop={0}
                cursor={true}
                typeSpeed={80 + RNG}
                deleteSpeed={50 + RNG2}
                delaySpeed={1500 + RNG3}
            />
        </div>
    );
}

export default VerifiedOccupation;
