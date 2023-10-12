import VerifiedOccupation from "./VerifiedOccupation";

function AboutMe({ isBig }) {
    return (
        <div
            className={`transition-all duration-300 bg-about-me-img shadow-spot-def bg-cover rounded-lg  
            ${
                isBig
                    ? "w-[75%] min-h-[40vh] hover:scale-about"
                    : "mx-4 hover:scale-about "
            }`}
        >
            <div
                className={`p-4 flex flex-col h-full  ${
                    isBig ? `gap-[25vh]` : `justify-between`
                }`}
            >
                <VerifiedOccupation />
                <p className="font-base bg-opacity-50 bg-neutral-800 p-2 rounded-xl overflow-scroll">
                    {`Hi! I'm Jack Vincent Bicera, a Website/Software Developer. While
                    in College, I developed a keen interest in web and software
                    development. I'm deeply passionate about technology and
                    programming. I find joy in solving problems through code and
                    believe in the transformative power of technology. Let's
                    connect and create together!`}
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
