import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/traffic/traffic.module.css";

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
    { id: 1, name: "Bole", image: "/src/assets/images/bole.jpg" },
    { id: 2, name: "Piassa", image: "/src/assets/images/piassa.jpg" },
    { id: 3, name: "Kazanchis", image: "/src/assets/images/kazanchis.jpg" },
    { id: 4, name: "Megenagna", image: "/src/assets/images/megenagna.jpg" },
    {
      id: 5,
      name: "Addis Ketema",
      image: "/src/assets/images/addis_ketema.jpg",
    },
    { id: 6, name: "Merkato", image: "/src/assets/images/merkato.jpg" },
    { id: 7, name: "Sar Bet", image: "/src/assets/images/sar_bet.jpg" },
    { id: 8, name: "Gotera", image: "/src/assets/images/gotera.jpg" },
    { id: 9, name: "Arat Kilo", image: "/src/assets/images/arat_kilo.jpg" },
    { id: 10, name: "CMC", image: "/src/assets/images/cmc.jpg" },
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
            <button
              className={styles.detailsButton}
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
