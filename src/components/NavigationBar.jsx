"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { XyzTransition } from "@animxyz/react";
import "@animxyz/core";

function NavigationBar({ isBgTransparent, displayName }) {
    const buttonStyle =
        "h-8 w-8 rounded-full bg-neutral-900 flex-row flex justify-center items-center z-50";
    return (
        <div
            className={`fixed w-[91.56rem] max-w-[91.56rem] rounded-t-lg px-5 flex gap-2 pb-4 pt-5 z-40`}
        >
            <XyzTransition appear xyz="fade" mode="out-in">
                {!isBgTransparent && (
                    <div
                        id="backdrop"
                        className={`z-0 rounded-t-lg absolute left-0 top-0 w-full h-full bg-neutral-800 `}
                    ></div>
                )}
            </XyzTransition>
            <button className={`${buttonStyle}`}>
                <IoIosArrowBack color="gray" />
            </button>
            <button className={`${buttonStyle}`}>
                <IoIosArrowForward color="gray" />
            </button>
            <XyzTransition appear xyz="fade" mode="out-in">
                {!isBgTransparent && (
                    <a
                        className={`z-10 text-xl font-semibold hover:underline hover:cursor-pointer
                    flex flex-row justify-center items-center`}
                    >
                        {displayName}
                    </a>
                )}
            </XyzTransition>
        </div>
    );
}

export default NavigationBar;
