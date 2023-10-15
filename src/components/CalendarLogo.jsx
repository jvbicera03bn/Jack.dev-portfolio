import { BsCalendar2Fill } from "react-icons/bs";

function CalendarLogo({ date, numDate, adjustSizeNum }) {
    return (
        <div className="bg-neutral-900 px-1 py-1 rounded-lg w-max flex flex-col">
            <p className="text-center text-xs font-semibold">{date}</p>
            <p
                className={`text-center ${
                    adjustSizeNum ? adjustSizeNum : `text-2xl`
                } font-semibold`}
            >
                {numDate}
            </p>
        </div>
    );
}

export default CalendarLogo;
