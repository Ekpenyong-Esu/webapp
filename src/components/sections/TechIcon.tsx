import type { ComponentType } from "react";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiSharp,
  SiJavascript,
  SiStmicroelectronics,
  SiEspressif,
  SiArduino,
  SiRaspberrypi,
  SiMqtt,
  SiGooglecloud,
  SiGit,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiReact,
  SiHtml5,
} from "react-icons/si";
import {
  Code,
  Cpu,
  CircuitBoard,
  Network,
  Radio,
  ShieldCheck,
  Wrench,
  BrainCircuit,
  Cloud,
  Database,
} from "lucide-react";

/** An icon component that accepts a size + className (both react-icons and
 *  lucide icons satisfy this shape). */
type IconComponent = ComponentType<{
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
}>;

/**
 * Brand / technology logos for the specific tools that have one — the "C, C++,
 * Python…" that read best as a recognisable mark rather than plain text.
 */
const TECH_ICONS: Record<string, IconComponent> = {
  C: SiC,
  "C++": SiCplusplus,
  Python: SiPython,
  "C#": SiSharp,
  JavaScript: SiJavascript,
  SQL: Database,
  STM32: SiStmicroelectronics,
  ESP32: SiEspressif,
  Arduino: SiArduino,
  "Raspberry Pi": SiRaspberrypi,
  "Raspberry Pico": SiRaspberrypi,
  MQTT: SiMqtt,
  "GCP IoT Core": SiGooglecloud,
  Git: SiGit,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  OpenCV: SiOpencv,
  "Google Cloud": SiGooglecloud,
  "React / Next.js": SiReact,
  "HTML / CSS / JS": SiHtml5,
};

/**
 * Fallback icon per tech-stack category, so every item without a dedicated
 * brand logo still gets a meaningful, consistent glyph.
 */
const CATEGORY_FALLBACK: Record<string, IconComponent> = {
  Languages: Code,
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
  const Icon = TECH_ICONS[name] ?? CATEGORY_FALLBACK[category] ?? Code;
  return <Icon size={14} aria-hidden className={className} />;
}
