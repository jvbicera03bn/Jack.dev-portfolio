"use client";

import { useState } from "react";

function Note() {
    const [IsNoteShowing, setIsNoteShowing] = useState(false);

    return (
        <div
            className={`${
                IsNoteShowing
                    ? "shadow-notes-visitor"
                    : "bg-spot-profile-pannel shadow-spot-def"
            } mx-4 py-5 px-4 rounded-lg`}
        >
            <div className="flex flex-row justify-between items-center">
                <h1 className=" font-medium text-lg ">Note to Visitors</h1>
                <button
                    onClick={() => {
                        setIsNoteShowing((prev) => {
                            return !prev;
                        });
                    }}
                    className=" font-semibold py-1 px-3 rounded-full border"
                >
                    {IsNoteShowing ? `Hide ` : `Show `}
                    Note
                </button>
            </div>
            {IsNoteShowing && (
                <div className="w-[99%] pt-3 mx-auto">
                    <p className="text-xl">
                        This Portfolio Website is Inspired by Spotify UI, with a
                        little bit of modification here and there so big credits
                        to them.
                    </p>
                    <p className="text-xl pt-3">
                        Built using
                        <span className="font-semibold text-neutral-300">
                             {" Next.js Tailwind CSS"}
                        </span>
                         and 
                        <span className="font-semibold text-neutral-300">
                             {" Zustand"}
                        </span>
                        , Zustand may have been uncessary but i used it to get
                        an experience using it
                    </p>
                    <p className="lg:hidden pt-3 text-xl">
                        PS. Better if viewed in Desktop
                    </p>
                </div>
            )}
        </div>
    );
}

export default Note;
