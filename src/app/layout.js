import ProfileInfo from "@/components/ProfileInfo";
import "react-tooltip/dist/react-tooltip.css";
import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
    title: "Jack.Dev Portfolio",
    description: "Spotify Inspired Portfolio",
};
const workSans = localFont({
    src: "../../node_modules/@fontsource-variable/work-sans/files/work-sans-latin-wght-normal.woff2",
    display: "swap",
});
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${workSans.className} flex gap-2 m-2 bg-neutral-950 text-slate-50`}
            >
                <ProfileInfo />
                <main className="h-[98vh] flex-col flex-auto w-3/4 rounded-lg hidden lg:flex">
                    {children}
                </main>
            </body>
        </html>
    );
}
