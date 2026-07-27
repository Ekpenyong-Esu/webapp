import type { ComponentType } from "react";
import {
  Activity,
  Antenna,
  Atom,
  Binary,
  Bluetooth,
  Braces,
  BrainCircuit,
  Bug,
  Cable,
  CircleCheck,
  CircuitBoard,
  Cloud,
  Code2,
  Cpu,
  Database,
  DownloadCloud,
  EthernetPort,
  Eye,
  Factory,
  FileCode,
  FlaskConical,
  GitBranch,
  Globe,
  Lock,
  Microchip,
  Network,
  Radio,
  RadioTower,
  ScanEye,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Signal,
  SquareTerminal,
  Terminal,
  Webhook,
  Workflow,
  Wrench,
} from "lucide-react";

/** An icon component that accepts a size + className (both react-icons and
 *  lucide icons satisfy this shape). */
type IconComponent = ComponentType<{
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
}>;

/**
 * A meaningful Lucide icon for specific tools, so each item reads at a glance
 * while every glyph stays in one consistent line-icon family.
 */
const TECH_ICONS: Record<string, IconComponent> = {
  // Languages
  C: Code2,
  "C++": Code2,
  "C#": Code2,
  Python: FileCode,
  JavaScript: Braces,
  "Structured Text (IEC 61131-3)": SquareTerminal,
  VHDL: CircuitBoard,
  SQL: Database,
  // Embedded & RTOS
  "Bare-metal": Binary,
  "BSP / Drivers": CircuitBoard,
  "Embedded Linux": Terminal,
  PLCs: Factory,
  // Hardware
  STM32: Microchip,
  ESP32: Microchip,
  "Texas Instruments": Microchip,
  Arduino: CircuitBoard,
  "Raspberry Pi": CircuitBoard,
  "Raspberry Pico": CircuitBoard,
  Odroid: CircuitBoard,
  // Protocols & Networking
  "CAN / CAN FD": Cable,
  "SPI / I2C / UART": Cable,
  "BLE 5.2": Bluetooth,
  "4G": Signal,
  "Ethernet / TCP/IP": EthernetPort,
  // IoT & Connectivity
  MQTT: Antenna,
  "AWS IoT": Cloud,
  "GCP IoT Core": Cloud,
  LoRaWAN: RadioTower,
  "OTA Updates": DownloadCloud,
  "Device Telemetry": Activity,
  // Security
  Cybersecurity: Shield,
  "TLS / Encryption": Lock,
  "Threat Modeling": ShieldAlert,
  "Penetration Testing": Bug,
  // Test & Tooling
  "HIL / SIL": FlaskConical,
  "NI VeriStand": FlaskConical,
  "Aliaro SIL": FlaskConical,
  "Test Automation": CircleCheck,
  "CI/CD": Workflow,
  Git: GitBranch,
  // AI / ML
  OpenCV: ScanEye,
  "TFLite Micro": Cpu,
  YOLO: Eye,
  // Cloud & Web
  "Google Cloud": Cloud,
  "React / Next.js": Atom,
  "REST APIs": Webhook,
  "HTML / CSS / JS": Globe,
};

/**
 * Fallback icon per tech-stack category, so every item without a dedicated
 * brand logo still gets a meaningful, consistent glyph.
 */
const CATEGORY_FALLBACK: Record<string, IconComponent> = {
  Languages: Code2,
  "Embedded & RTOS": Cpu,
  Hardware: CircuitBoard,
  "Protocols & Networking": Network,
  "IoT & Connectivity": Radio,
  Security: ShieldCheck,
  "Test & Tooling": Wrench,
  "AI / ML": BrainCircuit,
  "Cloud & Web": Cloud,
};

/**
 * TechIcon: resolves the right icon for a tech-stack item — a brand logo when
 * one exists, otherwise the item's category fallback. Presentation-only, so the
 * TechStack section stays focused on layout while icon choice lives here.
 */
export default function TechIcon({
  name,
  category,
  className,
}: {
  name: string;
  category: string;
  className?: string;
}) {
  const Icon = TECH_ICONS[name] ?? CATEGORY_FALLBACK[category] ?? Code2;
  return <Icon size={14} aria-hidden className={className} />;
}
