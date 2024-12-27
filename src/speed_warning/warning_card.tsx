import { CgClose } from 'react-icons/cg';
import '../styles/warning.css';
import { useState, useEffect, useRef } from 'react';
import { WebSocketData } from '../lib/defn';

const WarningCard = () => {
    const [showWarningCard, setShowWarningCard] = useState(false);
    const [warningCardMessage, setWarningCardMessage] = useState('');
    const [warningCardLicencePlate, setWarningCardLicencePlate] = useState('');
    const [warningCardSpeed, setWarningCardSpeed] = useState(0);

    const websocket = useRef<WebSocket | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        let API_URL = process.env.API_URL || 'http://localhost:5000';
        // trim http:// or https:// from API_URL
        API_URL = API_URL.replace(/^https?:\/\//, 'ws://');
        websocket.current = new WebSocket(`${API_URL}/arduino/upload`);
        const ws = websocket.current;
        ws.onopen = () => console.log('Connected to WebSocket');
        ws.onmessage = (event) => {
            try {
                const data: WebSocketData = JSON.parse(event.data);
                setWarningCardMessage(data.message);
                setWarningCardLicencePlate(data.licence_plate);
                setWarningCardSpeed(data.speed);
                setShowWarningCard(true);

                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(() => {
                    setShowWarningCard(false);
                    setWarningCardLicencePlate('');
                    setWarningCardMessage('');
                    setWarningCardSpeed(0);
                }, data.display_duration || 10000);
            } catch (error) {
                console.error("Error parsing WebSocket message:", error);
            }
        };

        ws.onerror = (error) => console.error("WebSocket error:", error);
        ws.onclose = (event) => console.log(`WebSocket closed: ${event.reason}`);

        // Cleanup function to close WebSocket and clear timeout
        return () => {
            if (ws.readyState === WebSocket.OPEN) ws.close();
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setShowWarningCard(false);
            setWarningCardLicencePlate('');
            setWarningCardMessage('');
            setWarningCardSpeed(0);
        };
    }, []);

    return (
        showWarningCard ? (
            <div className="warning-card">
                <div className="warning_card-close-btn">
                    <CgClose onClick={() => {
                        setShowWarningCard(false);
                        setWarningCardLicencePlate('');
                        setWarningCardMessage('');
                        setWarningCardSpeed(0);
                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    }} />
                </div>
                <div className="warn-text-container">
                    <div className="warning-card-message">{warningCardMessage}</div>
                    <div className="warning-card-licence-plate">Plate: {warningCardLicencePlate}</div>
                    <div className="warning-card-speed">Speed: {warningCardSpeed} Km/hr</div>
                </div>
            </div>
        ) : null
    );
};

export default WarningCard;