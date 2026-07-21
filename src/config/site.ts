/**
 * Central site configuration — the single source of truth for company details
 * and navigation. Keeping this data here (separate from the UI components) means
 * you edit the org number, email, or menu links in ONE place and every part of
 * the site updates automatically.
 */

export type NavLink = {
  label: string;
  /** In-page anchor (single-page scroll) or route path. */
  href: string;
};

export const siteConfig = {
  name: "zaramTech AB",
  /** Canonical site URL (used for SEO metadata, sitemap, robots, JSON-LD). */
  url: "https://zaramtech.com",
  /** Site-wide meta description (SEO + social share previews). */
  description:
    "zaramTech AB builds embedded firmware, HIL/SIL automotive test rigs, and on-device edge AI — from bare-metal to cloud.",
  /** Short tagline used in the header/brand area. */
  tagline: "Embedded systems, edge AI & automotive test engineering, from bare-metal to cloud.",

  /**
   * Hero section copy (Layer 6). Kept here so the wording is edited in one
   * place, separate from the Hero component's markup.
   */
  hero: {
    /** The sharp, specific one-liner (design + positioning docs). */
    headline: "AI, Machine learning, Robotics, Embedded systems, edge AI, Full Stack Web Development & automotive test engineering.",
    /** Supporting line that states the full-stack-of-hardware differentiator. */
    subheadline:
      "From bare-metal firmware and HIL/SIL rigs to on-device ML,one partner across the whole path, from silicon to cloud.",
    /** The silicon → cloud chain, shown as a subtle row of steps. */
    chain: ["Embedded", "Machine Learning", "Firmware", "RTOS", "CAN / TSN", "HIL / SIL", "Edge AI", "Cloud"]
  },

  /**
   * Services section content (Layer 7). Each entry renders as a ServiceCard.
   * `icon` is a key mapped to a lucide icon inside the Services component, so
   * this config stays plain data (no React imports here).
   */
  services: [
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
      benefit: "Connected devices with secure telemetry from edge to cloud.",
      tags: ["MQTT", "BLE 5.2 / Wi-Fi", "LoRa", "4G", "TCP/IP", "AWS IoT", "GCP"],
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
  ],

  /**
   * Case studies (Layer 8). Anonymized proof, each structured as
   * Problem → Approach → Result. Plain data — the CaseStudyCard renders it.
   */
  caseStudies: [
    {
      domain: "Edge AI",
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
      title: "Deterministic real-time pipeline over TSN + 4G",
      problem:
        "A system needed low-latency, deterministic data transport across in-vehicle and remote links.",
      approach:
        "Integrated Time-Sensitive Networking (TSN) with a 4G uplink for synchronized, real-time telemetry.",
      result:
        "Deterministic in-vehicle timing with reliable remote streaming to the cloud.",
    },
    {
      domain: "Predictive AI",
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
      title: "Real-time firmware on FreeRTOS across microcontrollers",
      problem:
        "Time-critical tasks needed deterministic scheduling on constrained hardware.",
      approach:
        "Developed C/C++ real-time applications on FreeRTOS, deployed across STM32, ESP32, Raspberry Pico and Arduino-class devices.",
      result:
        "Deterministic task timing and stable long-run operation on low-power hardware.",
    },
  ],

  /** Contact section copy (Layer 9). */
  contact: {
    heading: "Let's talk about your project",
    subheading:
      "Embedded development, AI, Machine Learning, Robotics, HIL/SIL, edge AI, or full-stack — tell me what you're building and I'll get back to you.",
    /** Where the consent checkbox links (privacy policy — built in a later layer). */
    privacyHref: "/privacy",
  },

  /**
   * Tech stack (Layer 10). A grouped keyword grid of the tools and platforms
   * used across projects. Plain data — the TechStack component renders it.
   */
  techStack: {
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
  },

  /**
   * About section (Layer 10). Founder credibility — the trust signal for a
   * boutique/solo AB. Plain data rendered by the About component.
   */
  about: {
    heading: "About",
    paragraphs: [
      "zaramTech AB is a boutique engineering consultancy spanning the full path from silicon to cloud — embedded firmware, HIL/SIL automotive test, on-device edge AI, and full-stack software.",
      "Behind it is 10+ years designing, integrating, and validating embedded and automotive software. At Volvo Buses, that means building Hardware-in-the-Loop rigs end-to-end and the automated test infrastructure — NI VeriStand, TwinCAT, and Aliaro SIL — that validates safety-critical vehicle systems.",
      "That deep firmware, RTOS, and vehicle-networking background is paired with applied AI/ML research — including a quantized YOLOv8n detector deployed on an ESP32-CAM via TFLite Micro for real-time, offline, on-device detection.",
    ],
    highlights: [
      "10+ years in embedded & automotive",
      "Volvo Buses — HIL/SIL test engineering",
      "MSc Computer Science · M.Eng Applied AI",
      "Swedish Institute & Google Africa scholar",
    ],
  },

  /** Legal + contact details (shown in the footer for a Swedish AB). */
  company: {
    legalName: "zaramTech AB",
    orgNumber: "559593-9744", // TODO: replace with the real organisationsnummer
    location: "Sweden",
    email: "contact@zaramtech.com",
    linkedin: "https://www.linkedin.com/company/zaramtech",
  },

  /** Primary navigation — the anchor sections of the single-page site.
   *  Hrefs are root-relative (/#...) so they also work from sub-pages like
   *  /privacy, jumping back to the home page and scrolling to the section. */
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Case studies", href: "/#case-studies" },
    { label: "Tech stack", href: "/#tech-stack" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavLink[],

  /** Legal / policy pages (linked in the footer). */
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Cookies", href: "/cookies" },
  ] satisfies NavLink[],

  /** The single call-to-action repeated across the site. */
  cta: { label: "Book a call", href: "/#contact" },
} as const;
