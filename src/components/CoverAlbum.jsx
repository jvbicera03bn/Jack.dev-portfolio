"use client"
/* Animate on click */
import { BsFillSuitHeartFill, BsThreeDots, BsSuitHeart } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
function CoverAlbum() {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="mx-4">
            <Image
                className="rounded-lg shadow-spot-def my-0 mx-auto"
                src="/album-cover.jpg"
                width={400}
                height={400}
                alt="Cover-Picture"
            />
            <div className="flex flex-row pt-5">
                <div className="">
                    <h1 className="hover:underline hover:cursor-pointer font-bold text-2xl">
                        Jack Vincent Bicera
                    </h1>
                    <p className="hover:underline hover:cursor-pointer font-normal text-stone-500">
                        Web/Software Developer
                    </p>
                </div>
                <div className="flex gap-3 flex-auto justify-end items-center">
                    <span
                        className="hover:cursor-pointer"
                        onClick={() => {
                            setIsLiked((prev) => !prev);
                        }}
                    >
                        {isLiked ? (
                            <BsFillSuitHeartFill color="#16a34a" size="20" />
                        ) : (
                            <BsSuitHeart size="20" />
                        )}
                    </span>
                    <BsThreeDots className="hover:cursor-pointer" size="20" />
                </div>
            </div>
        </div>
    );
}

export default CoverAlbum;
