/**
 * Services section content (Layer 7). Each entry renders as a ServiceCard.
 * `icon` is a key mapped to a lucide icon inside the Services component, so this
 * data stays plain (no React imports here).
 */
export const services = [
  {
    icon: "cpu",
    title: "Embedded & Firmware",
    benefit: "Board bring-up to production firmware on constrained hardware.",
    tags: ["C/C++", "Python", "Embedded Linux", "BSP / Drivers", "FreeRTOS", "Bare-metal", "STM32", "ESP32", "Texas Instruments", "Arduino", "Raspberry Pi", "Raspberry Pico", "Odroid"],
  },
  {
    icon: "gauge",
    title: "Automotive Test",
    benefit: "HIL/SIL rigs that validate ECUs before they ship.",
    tags: ["HIL/SIL", "NI VeriStand", "TwinCAT", "Aliaro SIL", "CANoe", "Structured Text", "Python"],
  },
  {
    icon: "brain",
    title: "Edge AI / TinyML",
    benefit: "Quantized computer vision that runs on-device, not in the cloud.",
    tags: ["PyTorch", "TFLite Micro", "YOLOv8", "Quantization", "On-device CV"],
  },
  {
    icon: "network",
    title: "Vehicle Networking",
    benefit: "Reliable, real-time communication between ECUs and sensors.",
    tags: ["CAN / CAN FD", "LIN", "SPI / I2C / UART", "TSN", "EtherCAT / Modbus", "Automotive Ethernet", "TCP/IP"],
  },
  {
    icon: "iot",
    title: "IoT & Connectivity",
    benefit: "Fleet-scale connected devices with secure, resilient telemetry from edge to cloud.",
    tags: ["MQTT", "BLE 5.2 / Wi-Fi", "LoRaWAN", "4G / LTE", "AWS IoT", "GCP IoT", "OTA Updates", "TLS Security"],
  },
  {
    icon: "eye",
    title: "AI/ML & Computer Vision",
    benefit: "Deep-learning models and computer vision, from research to deployment.",
    tags: ["Python", "Deep Learning", "YOLO", "PyTorch", "TensorFlow", "OpenCV"],
  },
  {
    icon: "code",
    title: "Web & Full-Stack Development",
    benefit: "Responsive web apps and APIs — the full front-to-back software layer.",
    tags: ["React / Next.js", "C# / GUIs", "Python", "REST APIs", "HTML / CSS / JS", "SQL", "GCP"],
  },
  {
    icon: "cicd",
    title: "CI/CD & Test Automation",
    benefit: "Automated pipelines and regression testing that keep releases reliable.",
    tags: ["CI/CD Pipelines", "Git", "Regression Testing", "Test Automation"],
  },
  {
    icon: "annotate",
    title: "Data Annotation & Labeling",
    benefit: "High-quality labeled datasets for training and validating ML models.",
    tags: ["Image Labeling", "Bounding Boxes", "Segmentation", "Datasets", "QA"],
  },
  {
    icon: "consult",
    title: "Technical Consultancy",
    benefit: "Architecture, feasibility, and hands-on guidance across the hardware-to-cloud stack.",
    tags: ["Architecture", "Feasibility", "Code Review", "Mentoring", "Security"],
  },
] as const;
