import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  const teamMembers = [
    {
      name: "Noah Seifu",
      department: "Software Engineering",
      image: "/src/assets/images/profile.png",
    },
    {
      name: "Tewuhbo Mihret",
      department: "Software Engineering",
      image: "/src/assets/images/tewehbo.jpg",
    },
    {
      name: "Habtamu Firdiywok",
      department: "Electrical and Computer Engineering",
      image: "/src/assets/images/profile.png",
    },
    {
      name: "Yididiya Behailu",
      department: "Electrical and Computer Engineering",
      image: "/src/assets/images/profile.png",
    },
    {
      name: "Yonatan Kefyalew",
      department: "Electromechanical Engineering",
      image: "/src/assets/images/profile.png",
    },
    {
      name: "Eyoel Eshetu",
      department: "Civil Engineering",
      image: "/src/assets/images/profile.png",
    },
    {
      name: "Tamirat Dejene",
      department: "Software Engineering",
      image: "/src/assets/images/profile.png",
    },
    {
      name: "Arsema Elias",
      department: "Electrical and Computer Engineering",
      image: "/src/assets/images/profile.png",
    },
    {
      name: "Abigail Fuad",
      department: "Software Engineering",
      image: "/src/assets/images/abigail.jpg",
    },
    {
      name: "Bethlehem Ketema",
      department: "Civil Engineering",
      image: "/src/assets/images/profile.png",
    },
    {
      name: "Teklu Anbese",
      department: "Electromechanical Engineering",
      image: "/src/assets/images/profile.png",
    },
  ];

  return (
    <div className={styles.aboutPage_container}>
      <section className={styles.aboutPage_aboutSection}>
        <h1 className={styles.aboutPage_title}>About Us</h1>
        <p className={styles.aboutPage_description}>
          We are Group 98 from IETP, dedicated to developing an IoT-Enabled
          Vehicle Speed Detection and Monitoring System. Our mission is to
          enhance road safety and create smarter, sustainable urban
          environments.
        </p>
      </section>

      <section className={styles.aboutPage_teamSection}>
        <h2 className={styles.aboutPage_subtitle}>Meet Our Team</h2>
        <div className={styles.aboutPage_teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.aboutPage_card}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.aboutPage_aboutUsImage}
              />
              <h3 className={styles.aboutPage_name}>{member.name}</h3>
              <p className={styles.aboutPage_department}>{member.department}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
