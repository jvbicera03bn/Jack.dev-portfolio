import { create } from "zustand";

export const useGlobalState = create((set) => ({
    technology: [
        {
            name: "React",
            description: "A JavaScript library for building user interfaces.",
            imgSrc: "/Technology/react.png",
            category: ["Front-End"],
        },
        {
            name: "Vue",
            description:
                "A progressive JavaScript framework for building user interfaces.",
            imgSrc: "/Technology/vue.png",
            category: ["Front-End"],
        },
        {
            name: "Javascript",
            description:
                "A high-level, interpreted scripting language for the web.",
            imgSrc: "/Technology/javascript.png",
            category: ["Front-End", "Programming Language"],
        },
        {
            name: "CSS",
            description:
                "A stylesheet language used for describing the presentation of a web document.",
            imgSrc: "/Technology/css.png",
            category: ["Front-End"],
        },
        {
            name: "HTML",
            description:
                "A markup language used for creating the structure of web pages.",
            imgSrc: "/Technology/html.png",
            category: ["Front-End"],
        },
        {
            name: "Node.js",
            description:
                "A JavaScript runtime environment for server-side development.",
            imgSrc: "/Technology/node.png",
            category: ["Back-End"],
        },
        {
            name: "Express.js",
            description: "A web application framework for Node.js.",
            imgSrc: "/Technology/express.png",
            category: ["Back-End"],
        },
        {
            name: "MongoDB",
            description: "A NoSQL database for storing and managing data.",
            imgSrc: "/Technology/mongo.png",
            category: ["Back-End"],
        },
        {
            name: "MySQL",
            description: "A relational database management system.",
            imgSrc: "/Technology/mysql.png",
            category: ["Back-End"],
        },
        {
            name: "Postman",
            description: "A popular API development and testing tool.",
            imgSrc: "/Technology/postman.png",
            category: ["Front-End", "Back-End"],
        },
        {
            name: "PHP",
            description:
                "A server-side scripting language for web development.",
            imgSrc: "/Technology/php.png",
            category: ["Back-End", "Programming Language"],
        },
        {
            name: "CodeIgniter",
            description: "A PHP framework for building web applications.",
            imgSrc: "/Technology/codeigniter.png",
            category: ["Back-End", "Programming Language"],
        },
        {
            name: "Next.js",
            description:
                "A popular React framework for building server-rendered React applications.",
            imgSrc: "/Technology/next.png",
            category: ["Front-End", "Back-End"],
        },
        {
            name: "Tailwind CSS",
            description:
                "A utility-first CSS framework for building modern web applications.",
            imgSrc: "/Technology/tailwind.png",
            category: ["Front-End", "Tool"],
        },
        {
            name: "Python",
            description: "A high-level, general-purpose programming language.",
            imgSrc: "/Technology/python.png",
            category: ["Programming Language"],
        },
        {
            name: "Zustand",
            description: "A React State Management Library",
            imgSrc: "/Technology/zustand.png",
            category: ["Front-End", "Tool"],
        },
        {
            name: "Java",
            description:
                "A widely used object-oriented programming language and software platform that runs on billions of devices",
            imgSrc: "/Technology/java.png",
            category: ["Programming Language"],
        },
    ],
    sortOptionTechnology: [
        "Back-End",
        "Front-End",
        "Database",
        "Programming Language",
        "Tool",
    ],
    project: [
        {
            name: "Human Resource Management System",
            description:
                "Or HRMS That i built for my Capstone project in College",
            seeMoreStatus: "true",
            imgSrc: "/asiatech.png",
        },
        {
            name: "Ad Traffic Analytical Website",
            description: "Confidential. Property of Retailgate",
            seeMoreStatus: "false",
            imgSrc: "/retailgate.png",
        },
        {
            name: "Analytic Dashboard For Motorcycle Company and Content Management System",
            description: "Confidential. Property of Retailgate",
            seeMoreStatus: "false",
            imgSrc: "/retailgate.png",
        },
        {
            name: "QR Attendance System",
            description: "Confidential. Property of Retailgate",
            seeMoreStatus: "false",
            imgSrc: "/retailgate.png",
        },
        {
            name: "Contract Management System",
            description: "Confidential. Property of Retailgate",
            seeMoreStatus: "false",
            imgSrc: "/retailgate.png",
        },
        {
            name: "Promo Management System",
            description: "Confidential. Property of Retailgate",
            seeMoreStatus: "false",
            imgSrc: "/retailgate.png",
        },
        {
            name: "Map Profit Analytical Website",
            description: "Confidential. Property of Retailgate",
            seeMoreStatus: "false",
            imgSrc: "/retailgate.png",
        },
    ],
    experiences: [
        {
            name: "Freelance Programmer Tutor",
            description: "2019-2022",
            seeMoreStatus: "true",
            imgSrc: "/tutor.png",
        },
        {
            name: "Freelance IT Technician",
            description: "2017-2022",
            seeMoreStatus: "true",
            imgSrc: "/tech.png",
        },
        {
            name: "Retailgate",
            description: "Jan 2023 - May 2023",
            seeMoreStatus: "true",
            imgSrc: "/retailgate.png",
        },
    ],
}));
