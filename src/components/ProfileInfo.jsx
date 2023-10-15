import AboutMe from "./AboutMe";
import CoverAlbum from "./CoverAlbum";
import ProfileSections from "./ProfileSections";
import { HiMail } from "react-icons/hi";
import {
    AiFillLinkedin,
    AiFillPhone,
    AiOutlineGithub,
    AiOutlineDownload,
} from "react-icons/ai";
import { BsDash } from "react-icons/bs";
import { SiGoogledocs, SiGoogledrive } from "react-icons/si";
import Note from "./Note";
import MobileTechnologies from "./MobileTechnologies";
import CalendarLogo from "./CalendarLogo";

function ProfileInfo() {
    return (
        <div
            className={`h-[98vh] min-w-[20.75rem] w-1/5 max-w-1/5 overflow-y-scroll scroll-smooth flex flex-col gap-5 rounded-lg flex-auto pb-4 pt-5 bg-spot-black-bg`}
        >
            <h6 className="font-medium hover:underline hover:cursor-pointer px-4 text-center lg:text-start">
                My Website Portfolio
            </h6>
            <CoverAlbum />
            <Note />
            <MobileTechnologies />
            {/* <div className="lg:hidden"> */}
                <ProfileSections name="Experiences">
                    <div className="flex flex-row items-center gap-2">
                        <div className="flex flex-row items-center ">
                            <CalendarLogo
                                date="Jan"
                                numDate={2023}
                                adjustSizeNum={"text-lg"}
                            />
                            <span className="text-lg text-white">
                                <BsDash />
                            </span>
                            <CalendarLogo
                                date="May"
                                numDate={2023}
                                adjustSizeNum={"text-lg"}
                            />
                        </div>
                        <div>
                            <h1 className="font-semibold">
                                Web Developer At Retailgate
                            </h1>
                            <p className="font-medium text-neutral-400">
                                Jan - May • Makati City
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 pt-3">
                        <div className="flex flex-row items-center ">
                            <CalendarLogo
                                date="Jan"
                                numDate={2019}
                                adjustSizeNum={"text-lg"}
                            />
                            <span className="text-lg text-white">
                                <BsDash />
                            </span>
                            <CalendarLogo
                                date="Jan"
                                numDate={2022}
                                adjustSizeNum={"text-lg"}
                            />
                        </div>
                        <div className="">
                            <h1 className="font-semibold">
                                Freelance Programmer Tutor
                            </h1>
                            <p className="font-medium text-neutral-400">
                                2019-2022 • Laguna-Cavite
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 pt-3">
                        <div className="flex flex-row items-center ">
                            <CalendarLogo
                                date="Jan"
                                numDate={2017}
                                adjustSizeNum={"text-lg"}
                            />
                            <span className="text-lg text-white">
                                <BsDash />
                            </span>
                            <CalendarLogo
                                date="Jan"
                                numDate={2022}
                                adjustSizeNum={"text-lg"}
                            />
                        </div>
                        <div className="">
                            <h1 className="font-semibold">
                                Freelance IT Technician
                            </h1>
                            <p className="font-medium text-neutral-400">
                                2017-2022 • Laguna-Cavite
                            </p>
                        </div>
                    </div>
                </ProfileSections>
            {/* </div> */}
            <ProfileSections name="Credentials">
                <ul className="porfile-info-sidebar">
                    <li>
                        <h1>Resume</h1>
                        <a
                            className="flex flex-row items-center gap-2"
                            href="https://docs.google.com/document/d/1JjPg2jA0id-F0KrgT8fvwtkYNIW1S92X/edit?usp=sharing&ouid=117820738079861543023&rtpof=true&sd=true"
                            target="_blank"
                        >
                            <SiGoogledocs />
                            Google Doc
                        </a>
                        <a
                            className="flex flex-row items-center gap-2"
                            download="Jack Vincent Bicera Resume/CV"
                            href="/Files/resume.pdf"
                        >
                            <AiOutlineDownload />
                            Direct Download
                        </a>
                    </li>
                    <li>
                        <h1>Certificates</h1>
                        <a
                            className="flex flex-row items-center gap-2"
                            href="https://drive.google.com/drive/folders/1xH0zbfseUZmByVplM0PHYnZF7uP1q8V_?usp=sharing"
                            target="_blank"
                        >
                            <SiGoogledrive />
                            Google Drive
                        </a>
                        {/* <a
                            className="flex flex-row items-center gap-2"
                            download="Jack Vincent Bicera Resume/CV"
                            href="/Files/certificates.zip"
                        >
                            <AiOutlineDownload />
                            Direct Download
                        </a> */}
                    </li>
                </ul>
            </ProfileSections>
            {/* <div className={"lg:hidden"}> */}
            <AboutMe isBig={false} />
            {/* </div> */}
            <ProfileSections name="Contacts & Socials">
                <ul className="porfile-info-sidebar">
                    <li>
                        <h1>Email</h1>
                        <a
                            className="flex flex-row items-center gap-2"
                            href="mailto:Jvbicera03.bn@gmail.com"
                        >
                            <HiMail />
                            Jvbicera03.bn@gmail.com
                        </a>
                    </li>
                    <li>
                        <h1>Telephone</h1>
                        <a
                            className="flex flex-row items-center gap-2"
                            href="tel:+63 909 0867 000"
                        >
                            <AiFillPhone />
                            +63 909 0867 000
                        </a>
                    </li>
                    <li>
                        <h1>Linked In</h1>
                        <a
                            className="flex flex-row items-center gap-2"
                            href="https://www.linkedin.com/in/jack-vincent-bicera-aab717220/"
                            target="_blank"
                        >
                            <AiFillLinkedin />
                            Jack Vincent Bicera
                        </a>
                    </li>
                    <li>
                        <h1>Github</h1>
                        <a
                            className="flex flex-row items-center gap-2"
                            href="https://github.com/jvbicera03bn"
                            target="_blank"
                        >
                            <AiOutlineGithub />
                            Jvbicera03bn
                        </a>
                    </li>
                </ul>
            </ProfileSections>
        </div>
    );
}

export default ProfileInfo;
