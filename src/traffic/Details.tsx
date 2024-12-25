import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/traffic/Details.module.css";

const Details = () => {
  const { id } = useParams<{ id: string }>(); // Ensure id is a string

  const areaDetails: Record<
    string,
    {
      name: string;
      locations: Array<{
        name: string;
        morning: number;
        afternoon: number;
        evening: number;
      }>;
    }
  > = {
    1: {
      name: "Bole",
      locations: [
        { name: "Airport Road", morning: 200, afternoon: 350, evening: 500 },
        {
          name: "Bole Michael Intersection",
          morning: 180,
          afternoon: 300,
          evening: 450,
        },
        {
          name: "Bole Medhanialem Road",
          morning: 220,
          afternoon: 400,
          evening: 520,
        },
        {
          name: "Bole Mall Entrance",
          morning: 210,
          afternoon: 380,
          evening: 470,
        },
      ],
    },
    2: {
      name: "Piassa",
      locations: [
        {
          name: "Churchill Avenue",
          morning: 190,
          afternoon: 300,
          evening: 400,
        },
        { name: "Piassa Market", morning: 170, afternoon: 290, evening: 420 },
        {
          name: "St. George Cathedral",
          morning: 150,
          afternoon: 280,
          evening: 410,
        },
        {
          name: "Piassa Shopping Center",
          morning: 160,
          afternoon: 270,
          evening: 390,
        },
      ],
    },
    3: {
      name: "Kazanchis",
      locations: [
        { name: "UNECA Road", morning: 200, afternoon: 340, evening: 500 },
        {
          name: "Hilton Intersection",
          morning: 180,
          afternoon: 320,
          evening: 480,
        },
        {
          name: "Kazanchis Business District",
          morning: 220,
          afternoon: 400,
          evening: 540,
        },
        { name: "Meskel Square", morning: 230, afternoon: 370, evening: 490 },
      ],
    },
    4: {
      name: "Megenagna",
      locations: [
        {
          name: "Megenagna Roundabout",
          morning: 190,
          afternoon: 330,
          evening: 470,
        },
        {
          name: "Zefmesh Mall Road",
          morning: 210,
          afternoon: 360,
          evening: 490,
        },
        { name: "Shola Market", morning: 180, afternoon: 310, evening: 460 },
        { name: "Lem Hotel Road", morning: 200, afternoon: 350, evening: 450 },
      ],
    },
    5: {
      name: "Addis Ketema",
      locations: [
        {
          name: "Teklehaimanot Road",
          morning: 210,
          afternoon: 370,
          evening: 480,
        },
        { name: "Lideta Market", morning: 190, afternoon: 320, evening: 460 },
        {
          name: "Mexico Roundabout",
          morning: 200,
          afternoon: 340,
          evening: 470,
        },
        { name: "Gofa Sefer", morning: 230, afternoon: 380, evening: 500 },
      ],
    },
    6: {
      name: "Merkato",
      locations: [
        {
          name: "Anwar Mosque Area",
          morning: 220,
          afternoon: 380,
          evening: 500,
        },
        {
          name: "Shoa Supermarket Road",
          morning: 200,
          afternoon: 330,
          evening: 470,
        },
        {
          name: "Merkato Main Gate",
          morning: 240,
          afternoon: 360,
          evening: 510,
        },
        {
          name: "Bus Terminal Intersection",
          morning: 230,
          afternoon: 370,
          evening: 520,
        },
      ],
    },
    7: {
      name: "Sar Bet",
      locations: [
        {
          name: "Vatican Embassy Area",
          morning: 210,
          afternoon: 340,
          evening: 450,
        },
        {
          name: "Saris Abo Church",
          morning: 190,
          afternoon: 320,
          evening: 440,
        },
        {
          name: "TK Building Road",
          morning: 200,
          afternoon: 350,
          evening: 470,
        },
        {
          name: "Bisrate Gebriel Intersection",
          morning: 220,
          afternoon: 360,
          evening: 490,
        },
      ],
    },
    8: {
      name: "Gotera",
      locations: [
        {
          name: "Gotera Roundabout",
          morning: 180,
          afternoon: 320,
          evening: 450,
        },
        { name: "Kaliti Road", morning: 200, afternoon: 340, evening: 470 },
        { name: "Lafto Road", morning: 190, afternoon: 330, evening: 460 },
        { name: "Akaki Bridge", morning: 220, afternoon: 350, evening: 480 },
      ],
    },
    9: {
      name: "Arat Kilo",
      locations: [
        {
          name: "Arat Kilo Monument",
          morning: 230,
          afternoon: 370,
          evening: 520,
        },
        {
          name: "Addis Ababa University",
          morning: 220,
          afternoon: 350,
          evening: 500,
        },
        {
          name: "Sidist Kilo Road",
          morning: 240,
          afternoon: 360,
          evening: 530,
        },
        {
          name: "Menelik II Palace",
          morning: 210,
          afternoon: 340,
          evening: 490,
        },
      ],
    },
    10: {
      name: "CMC",
      locations: [
        { name: "Summit Road", morning: 200, afternoon: 330, evening: 480 },
        {
          name: "CMC St. Michael Church",
          morning: 190,
          afternoon: 320,
          evening: 450,
        },
        { name: "Ayat Roundabout", morning: 210, afternoon: 340, evening: 470 },
        {
          name: "Ayat Real Estate Main Road",
          morning: 230,
          afternoon: 360,
          evening: 490,
        },
      ],
    },
  };

  const area = areaDetails[id || ""]; // Safely access areaDetails with a fallback for id

  if (!area) {
    return <div className={styles.error}>Area details not found.</div>;
  }

  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.title}>
        Detailed Traffic Analysis for {area.name}
      </h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Location</th>
            <th>Morning</th>
            <th>Afternoon</th>
            <th>Evening</th>
            <th>Daily Average</th>
          </tr>
        </thead>
        <tbody>
          {area.locations.map((location) => (
            <tr key={location.name}>
              <td>{location.name}</td>
              <td>{location.morning}</td>
              <td>{location.afternoon}</td>
              <td>{location.evening}</td>
              <td>
                {(
                  (location.morning + location.afternoon + location.evening) /
                  3
                ).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
