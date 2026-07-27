/**
 * Tech stack (Layer 10). A grouped keyword grid of the tools and platforms used
 * across projects. Plain data — the TechStack component renders it.
 */
export const techStack = {
  heading: "Tech stack",
  subheading: "The tools, platforms, and frameworks behind the work.",
  groups: [
    {
      category: "Languages",
      items: [
        "C",
        "C++",
        "Python",
        "C#",
        "Structured Text (IEC 61131-3)",
        "VHDL",
        "JavaScript",
        "SQL",
      ],
    },
    {
      category: "Embedded & RTOS",
      items: [
        "FreeRTOS",
        "MicroC/OS-II",
        "Rubus RTOS",
        "Bare-metal",
        "BSP / Drivers",
        "Embedded Linux",
        "PLCs",
      ],
    },
    {
      category: "Hardware",
      items: [
        "STM32",
        "ESP32",
        "Texas Instruments",
        "Arduino",
        "Raspberry Pi",
        "Raspberry Pico",
        "Odroid",
      ],
    },
    {
      category: "Protocols & Networking",
      items: [
        "CAN / CAN FD",
        "SPI / I2C / UART",
        "TSN",
        "BLE 5.2",
        "4G",
        "EtherCAT",
        "Modbus",
        "Ethernet / TCP/IP",
      ],
    },
    {
      category: "IoT & Connectivity",
      items: [
        "MQTT",
        "AWS IoT",
        "GCP IoT Core",
        "LoRaWAN",
        "OTA Updates",
        "Device Telemetry",
      ],
    },
    {
      category: "Security",
      items: [
        "Embedded Security",
        "Secure Boot",
        "ML/AI Security",
        "Cybersecurity",
        "TLS / Encryption",
        "Threat Modeling",
        "Penetration Testing",
      ],
    },
    {
      category: "Test & Tooling",
      items: [
        "HIL / SIL",
        "NI VeriStand",
        "TwinCAT",
        "Aliaro SIL",
        "Test Automation",
        "CI/CD",
        "Git",
      ],
    },
    {
      category: "AI / ML",
      items: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "OpenCV",
        "TFLite Micro",
        "YOLO",
        "Edge AI / TinyML",
      ],
    },
    {
      category: "Cloud & Web",
      items: [
        "Google Cloud",
        "React / Next.js",
        "REST APIs",
        "HTML / CSS / JS",
      ],
    },
  ],
} as const;
