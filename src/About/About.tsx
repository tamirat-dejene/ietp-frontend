import styles from "../styles/About.module.css";
import { profile, abigail, tewehbo, tamirat } from "../assets/index";




const About = () => {
  const teamMembers = [
    {
      name: "Noah Seifu",
      department: "Software Engineering",
      image: profile,
    },
    {
      name: "Tewuhbo Mihret",
      department: "Software Engineering",
      image: tewehbo,
    },
    {
      name: "Habtamu Firdiywok",
      department: "Electrical and Computer Engineering",
      image: profile,
    },
    {
      name: "Yididiya Behailu",
      department: "Electrical and Computer Engineering",
      image: profile,
    },
    {
      name: "Yonatan Kefyalew",
      department: "Electromechanical Engineering",
      image: profile,
    },
    {
      name: "Eyoel Eshetu",
      department: "Civil Engineering",
      image: profile,
    },
    {
      name: "Tamirat Dejene",
      department: "Software Engineering",
      image: tamirat,
    },
    {
      name: "Arsema Elias",
      department: "Electrical and Computer Engineering",
      image: profile,
    },
    {
      name: "Abigail Fuad",
      department: "Software Engineering",
      image: abigail,
    },
    {
      name: "Bethlehem Ketema",
      department: "Civil Engineering",
      image: profile,
    },
    {
      name: "Teklu Anbese",
      department: "Electromechanical Engineering",
      image: profile,
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
                loading="lazy"
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
