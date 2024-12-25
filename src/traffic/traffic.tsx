import React, { useState } from "react";
import styles from "../styles/traffic/traffic.module.css";

type TrafficData = {
  morning: number;
  afternoon: number;
  evening: number;
  dailyAverage?: number; // This will be calculated dynamically
};

type Area = {
  id: number;
  name: string;
  image: string;
  trafficData?: TrafficData;
};

const Traffic = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  const areas: Area[] = [
    { id: 1, name: "Bole", image: "/src/assets/images/bole.jpg" },
    { id: 2, name: "Bole", image: "/src/assets/images/bole.jpg" },
    { id: 3, name: "Bole", image: "/src/assets/images/bole.jpg" },
    { id: 4, name: "Bole", image: "/src/assets/images/bole.jpg" },
    { id: 5, name: "Bole", image: "/src/assets/images/bole.jpg" },
    { id: 6, name: "Bole", image: "/src/assets/images/bole.jpg" },
    { id: 7, name: "Bole", image: "/src/assets/images/bole.jpg" },
    { id: 8, name: "Bole", image: "/src/assets/images/bole.jpg" },
    { id: 9, name: "Bole", image: "/src/assets/images/bole.jpg" },
    { id: 10, name: "Bole", image: "/src/assets/images/bole.jpg" },
  ];

  const mockTrafficData: TrafficData = {
    morning: 200,
    afternoon: 400,
    evening: 700,
  };

  const calculateDailyAverage = (trafficData: TrafficData) => {
    return (
      (trafficData.morning + trafficData.afternoon + trafficData.evening) / 3
    );
  };

  const handleCardClick = (area: Area) => {
    const trafficDataWithAverage = {
      ...mockTrafficData,
      dailyAverage: calculateDailyAverage(mockTrafficData),
    };

    setSelectedArea({ ...area, trafficData: trafficDataWithAverage });
  };

  const handleCloseModal = () => {
    setSelectedArea(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Traffic Analysis in Different Parts of Addis Ababa
      </h1>
      <div className={styles.gridContainer}>
        {areas.map((area) => (
          <div
            key={area.id}
            className={styles.card}
            onClick={() => handleCardClick(area)}
          >
            <img
              src={area.image}
              alt={area.name}
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>{area.name}</h3>
          </div>
        ))}
      </div>

      {selectedArea && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>
            <h1 className={styles.modalTitle}>
              Traffic Details for {selectedArea.name}
            </h1>
            <p className={styles.trafficInfo}>
              <strong>Units:</strong> Cars/hour
            </p>
            <div className={styles.trafficGrid}>
              <div className={styles.trafficItem}>
                <span>Morning (6:00 AM - 12:00 PM):</span>
                <strong>{selectedArea.trafficData?.morning}</strong>
              </div>
              <div className={styles.trafficItem}>
                <span>Afternoon (12:00 PM - 5:00 PM):</span>
                <strong>{selectedArea.trafficData?.afternoon}</strong>
              </div>
              <div className={styles.trafficItem}>
                <span>Evening (5:00 PM - 9:00 PM):</span>
                <strong>{selectedArea.trafficData?.evening}</strong>
              </div>
              <div className={styles.trafficItem}>
                <span>Daily Average:</span>
                <strong>
                  {selectedArea.trafficData?.dailyAverage?.toFixed(2)}
                </strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Traffic;
