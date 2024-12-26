import { useState } from "react";
import "../styles/help.css";
const AboutSection = ({ title, content, isActive }: { title: string; content: string; isActive: boolean }) => {
    return (
        <div className={`about-section ${isActive ? "active" : ""}`}>
            <div>
                <h2>{title}</h2>
                {isActive && <p>{content}</p>}
            </div>
        </div>
    );
};

const abouts = [
    {
        title: "Dashboard",
        content: "The dashboard page displays a summary of real time traffic data. You can see the number of speeding records of drivers, the number of traffic records, the date and time of the violations. And at the top of the page, you can see the analysis of the data, which shows speeding trends quantitatively."
    },
    {
        title: "Traffic Analysis",
        content: "The traffic page displays a list of traffic records. You can click on a record to view the details."
    },
    {
        title: "Record",
        content: "The record page allows you to add new records to the database. You can enter the driver's name, the date and time of the violation, the location, and the speed of the driver.You can also view the list of records that have been added to the database."
    },
    {
        title: "Login/Out",
        content: "The login page allows you to log in to the application. You can enter your email and password to log in. The account will be confirmed by the admin."
    },
    {
        title: "About",
        content: "The about page displays information about the developers of the application."
    }
];

const HelpPage = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setActiveSection((prev) => (prev === section ? null : section));
    };

    return (
        <div className="help-container">
            <h3>Click on a section to view more information</h3>
            <div className="about-container">
                {abouts.map((about) => (
                    <div key={about.title} onClick={() => toggleSection(about.title)}>
                        <AboutSection
                            title={about.title}
                            content={about.content}
                            isActive={activeSection === about.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HelpPage;