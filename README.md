# 🚦 TrafficMate

*A Real-Time Traffic Monitoring System Prototype*

## 📌 Overview

TrafficMate is a proof-of-concept system for **real-time vehicle speed monitoring**. It integrates **hardware sensors** with **image processing** to capture and analyze live traffic data, demonstrating potential applications in **smart transportation systems**.

The project delivers a fully functional prototype featuring:

* 🚗 Real-time speed detection of vehicles
* 📡 Live communication pipeline between hardware and server
* 📊 A monitoring dashboard for visualization and analysis
* 🔄 End-to-end system validation for **stability** and **responsiveness**

## 🛠️ Tools & Technologies

* **Frontend:** React, CSS
* **Backend:** Node.js, TypeScript
* **Real-time Communication:** WebSockets
* **Hardware:** Arduino, ESP32-CAM
* **Other:** Image Processing, Sensor Data Handling

## ⚙️ System Architecture

**Hardware Layer**

* Arduino → Collects sensor readings
* ESP32-CAM → Captures images & streams traffic visuals

**Backend Layer**

* Node.js + TypeScript server → Processes incoming data, manages state
* WebSockets → Real-time communication channel between backend & frontend

**Frontend Layer**

* React dashboard → Displays live traffic data, vehicle speed, and system status

```
[Arduino Sensors] → [ESP32-CAM] → [Backend (Node.js + TS)] ⇆ [React Dashboard]
                                  ↳ [Logs / Database]
```

## 🚀 Features

* **Real-Time Speed Detection**: Captures vehicle motion using sensors and ESP32-CAM
* **Data Pipeline**: WebSocket-based pipeline ensures low-latency updates
* **Monitoring Dashboard**: Visualizes live traffic conditions in a clean UI
* **Scalable Design**: Prototype structured for extension into a full-scale smart traffic system

## 🖼️ Demo & Screenshots

### Dashboard – Live Traffic Monitoring

![Dashboard Placeholder](docs/screenshots/dashboard_live.png)

### Dashboard – Vehicle Speed Detection

![Dashboard Placeholder](docs/screenshots/dashboard_speed.png)

### Hardware Setup (Arduino + ESP32-CAM)

![Hardware Placeholder](docs/screenshots/hardware_setup.png)

## 📈 Results

* Successfully built a **stable, real-time monitoring prototype**
* Validated **low-latency communication** between hardware and dashboard
* Demonstrated **practical feasibility** of using low-cost IoT hardware for smart traffic systems


## 🔮 Future Work

* Integration with **cloud platforms** for scalability
* Advanced **machine learning models** for traffic pattern prediction
* Support for **multi-camera networks** and large-scale deployments

## 🤝 Contributing

This project was developed as a **team prototype**. Contributions and suggestions for improvement are welcome!

## 📜 License

MIT License
