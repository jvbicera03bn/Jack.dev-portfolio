"use client";
import AboutMe from "@/components/AboutMe";
import Carrousel from "@/components/Carrousel";
import ContentPage from "@/components/ContentPage";
import VerifiedOccupation from "@/components/VerifiedOccupation";
import { useGlobalState } from "@/store/GlobalStates";

export default function Home() {
    const { technology, sortOptionTechnology, project, experiences } =
        useGlobalState();
    return (
        <ContentPage displayName={"Jack Vincent Bicera"}>
            <div
                className="flex flex-col p-5 gap-5 relative
            bg-profile-cover bg-profile-cover-pos h-[45vh] bg-cover bg-fixed snap-start"
            >
                <div className="absolute bottom-10">
                    <VerifiedOccupation />
                    <h1 className="text-8xl font-bold">Jack Vincent Bicera</h1>
                </div>
            </div>
            <div className="flex flex-col gap-5 py-5">
                {/* Technology */}
                <Carrousel
                    tooltipStat={true}
                    seeMoreOption={true}
                    carrouselName={"Technologies"}
                    sortOptions={sortOptionTechnology}
                    isBox={true}
                    seeMoreToggle={true}
                    carrouselContent={technology}
                    CarrouselDesc={
                        "All of the technology I use in developement"
                    }
                />
                <Carrousel
                    tooltipStat={false}
                    seeMoreOption={false}
                    carrouselName={"Experiences"}
                    isBox={false}
                    carrouselContent={experiences}
                    CarrouselDesc={"My Experiences so far"}
                />
                <div className="landingpage-def-div-class h-[430px]">
                    <h1 className="font-bold text-2xl">About</h1>
                    <AboutMe isBig={true} />
                </div>
                <Carrousel
                    carrouselName={"Projects"}
                    tooltipStat={false}
                    seeMoreOption={false}
                    seeMoreToggle={false}
                    isBox={false}
                    carrouselContent={project}
                    CarrouselDesc={"Projects I've created that make me proud"}
                />
            </div>
        </ContentPage>
    );
}
