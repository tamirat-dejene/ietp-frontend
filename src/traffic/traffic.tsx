import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/traffic/traffic.module.css";
import { addis_ketema,arat_kilo, bole, cmc, gotera, kazanchis, megenagna, merkato, piyassa, sar_bet } from "../assets/index";

type TrafficData = {
  morning: number;
  afternoon: number;
  evening: number;
  dailyAverage?: number;
};

type Area = {
  id: number;
  name: string;
  image: string;
  trafficData?: TrafficData;
};

const Traffic = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const navigate = useNavigate();

  const areas: Area[] = [
    { id: 1, name: "Bole", image: bole },
    { id: 2, name: "Piassa", image: piyassa },
    { id: 3, name: "Kazanchis", image: kazanchis },
    { id: 4, name: "Megenagna", image: megenagna },
    { id: 5, name: "Addis Ketema", image: addis_ketema, },
    { id: 6, name: "Merkato", image: merkato },
    { id: 7, name: "Sar Bet", image: sar_bet },
    { id: 8, name: "Gotera", image: gotera },
    { id: 9, name: "Arat Kilo", image: arat_kilo },
    { id: 10, name: "CMC", image: cmc },
  ];

  const calculateDailyAverage = (trafficData: TrafficData) => {
    return (
      (trafficData.morning + trafficData.afternoon + trafficData.evening) / 3
    );
  };

  const handleCardClick = (area: Area) => {
    const mockTrafficData: TrafficData = {
      morning: Math.floor(Math.random() * 500 + 100),
      afternoon: Math.floor(Math.random() * 500 + 100),
      evening: Math.floor(Math.random() * 500 + 100),
    };

    const trafficDataWithAverage = {
      ...mockTrafficData,
      dailyAverage: calculateDailyAverage(mockTrafficData),
    };

    setSelectedArea({ ...area, trafficData: trafficDataWithAverage });
  };

  const handleCloseModal = () => {
    setSelectedArea(null);
  };

  const navigateToDetails = () => {
    if (selectedArea) {
      navigate(`/details/${selectedArea.id}`);
    }
  };

  return (
    <div className={styles.trafficContainer}>
      <h1 className={styles.trafficTitle}>
        Traffic Analysis in Different Parts of Addis Ababa
      </h1>
      <div className={styles.trafficGridContainer}>
        {areas.map((area) => (
          <div
            key={area.id}
            className={styles.trafficCard}
            onClick={() => handleCardClick(area)}
          >
            <img
              src={area.image}
              alt={area.name}
              className={styles.trafficCardImage}
              loading="lazy"
            />
            <h3 className={styles.trafficCardTitle}>{area.name}</h3>
          </div>
        ))}
      </div>

      {selectedArea && (
        <div className={styles.trafficModalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.trafficModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.trafficCloseButton}
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
            <button
              className={styles.trafficDetailsButton}
              onClick={navigateToDetails}
            >
              View Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Traffic;
