/**
 * Case studies (Layer 8). Anonymized proof, each structured as
 * Problem → Approach → Result. `category` powers the section's filter; `domain`
 * is the badge and drives the card's cover art. Plain data — the CaseStudyCard
 * renders it.
 */
export const caseStudies = [
  {
    domain: "Edge AI",
    category: "AI",
    title: "On-device detection with instant alerting",
    problem:
      "A client needed real-time object detection on a low-cost, battery-friendly camera — without streaming video to the cloud.",
    approach:
      "Deployed a quantized YOLOv8n model on an ESP32-CAM, publishing detections over MQTT for immediate alerting.",
    result:
      "Sub-second on-device alerts with no cloud video costs and a fraction of the bandwidth.",
  },
  {
    domain: "Computer Vision",
    category: "AI",
    title: "Detection tuned for Nordic winter conditions",
    problem:
      "Vehicles had to be detected reliably in heavy snow and low light, where off-the-shelf models degrade sharply.",
    approach:
      "Benchmarked and tuned detection models against a Nordic winter dataset, measuring the accuracy-vs-latency trade-off.",
    result:
      "Identified the best accuracy/latency configuration for deployment on constrained hardware.",
  },
  {
    domain: "Vehicle Networking",
    category: "Automotive",
    title: "Deterministic real-time pipeline over TSN + 4G",
    problem:
      "A system needed low-latency, deterministic data transport across in-vehicle and remote links.",
    approach:
      "Integrated Time-Sensitive Networking (TSN) with a 4G uplink for synchronized, real-time telemetry.",
    result:
      "Deterministic in-vehicle timing with reliable remote streaming to the cloud.",
  },
  {
    domain: "IoT",
    category: "IoT",
    title: "Secure device-to-cloud telemetry for a distributed fleet",
    problem:
      "A fleet of field devices needed reliable, secure telemetry to the cloud over intermittent, low-bandwidth networks.",
    approach:
      "Built an MQTT-over-TLS pipeline with on-device store-and-forward buffering, provisioning, and OTA updates, streaming to a cloud IoT backend with Wi-Fi/BLE and 4G fallback.",
    result:
      "Encrypted telemetry that survives network dropouts and scales cleanly across the fleet.",
  },
  {
    domain: "Predictive AI",
    category: "AI",
    title: "Predictive maintenance for HIL test systems",
    problem:
      "Unexpected hardware degradation in HIL test rigs caused unplanned downtime during ADAS validation.",
    approach:
      "Built predictive-maintenance models on test-system telemetry to flag early degradation, integrated into existing HIL workflows.",
    result:
      "Earlier fault detection and reduced unplanned downtime for the test infrastructure.",
  },
  {
    domain: "Sensor Fusion",
    category: "AI",
    title: "Indoor localization with BLE and sensor fusion",
    problem:
      "Indoor positioning needed higher accuracy than signal-strength (RSSI) alone could deliver.",
    approach:
      "Fused BLE 5.2 RSSI fingerprinting with Angle-of-Arrival data through an ANN model.",
    result:
      "Improved localization accuracy across varying network and environmental conditions.",
  },
  {
    domain: "Automotive Test",
    category: "Automotive",
    title: "End-to-end HIL rig for safety-critical bus systems",
    problem:
      "Safety-critical vehicle systems needed automated, repeatable verification before deployment.",
    approach:
      "Designed and commissioned HIL rigs end-to-end — from physical build to NI VeriStand test environments and custom control GUIs.",
    result:
      "Automated validation aligned with automotive safety and quality standards.",
  },
  {
    domain: "TinyML",
    category: "AI",
    title: "Always-on TinyML sensing on a microcontroller",
    problem:
      "A product needed always-on recognition on a battery-powered microcontroller, with no cloud connection.",
    approach:
      "Trained and quantized a compact neural network, deploying it with TensorFlow Lite Micro on an ESP32 / STM32-class device.",
    result:
      "Real-time, offline inference within tight memory and power budgets.",
  },
  {
    domain: "GUI & Tooling",
    category: "Tooling",
    title: "Desktop GUIs for hardware control and test",
    problem:
      "Engineers needed a simple desktop interface to configure, control, and monitor test hardware — without touching low-level scripts.",
    approach:
      "Built control GUIs in C# and Python that drive the hardware over serial/CAN and visualize live data in real time.",
    result:
      "Faster, repeatable test setup with live control and monitoring from a single interface.",
  },
  {
    domain: "Firmware",
    category: "Firmware",
    title: "Portable bare-metal firmware across MCU families",
    problem:
      "A product line needed consistent low-level drivers across several microcontroller families.",
    approach:
      "Wrote portable C/C++ bare-metal firmware and BSP/drivers (SPI, I2C, UART, CAN) targeting STM32, ESP32, Texas Instruments, Arduino, Raspberry Pi/Pico and Odroid.",
    result:
      "A reusable driver layer that brings new boards up quickly with minimal rework.",
  },
  {
    domain: "RTOS Firmware",
    category: "Firmware",
    title: "Real-time firmware on FreeRTOS across microcontrollers",
    problem:
      "Time-critical tasks needed deterministic scheduling on constrained hardware.",
    approach:
      "Developed C/C++ real-time applications on FreeRTOS, deployed across STM32, ESP32, Raspberry Pico and Arduino-class devices.",
    result:
      "Deterministic task timing and stable long-run operation on low-power hardware.",
  },
  {
    domain: "Consultancy",
    category: "Consultancy",
    title: "Architecture & code-quality advisory for an embedded team",
    problem:
      "A team needed independent review of their embedded software architecture and delivery process.",
    approach:
      "Provided architecture guidance, code reviews, and test-automation practices within their agile workflow.",
    result:
      "Clearer architecture, higher code quality, and a more reliable release process.",
  },
] as const;
