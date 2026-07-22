import { Cpu, Gauge, BrainCircuit, Network, RadioTower, Eye, Code2, Workflow, Tags, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
import ServiceCard from "@/components/sections/ServiceCard";
import Reveal from "@/components/ui/Reveal";

/**
 * Services section (Layer 7). Maps the `services` config to reusable
 * `ServiceCard`s. The icon lookup lives here (not in the config) so the config
 * stays plain data and only this component depends on lucide.
 */
const icons: Record<string, LucideIcon> = {
  cpu: Cpu,
  gauge: Gauge,
  brain: BrainCircuit,
  network: Network,
  iot: RadioTower,
  eye: Eye,
  code: Code2,
  cicd: Workflow,
  annotate: Tags,
  consult: Handshake,
};

export default function Services() {
  const { services } = siteConfig;

  return (
    <section id="services" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Services
            </h2>
            <p className="mt-3 text-lg text-ink-muted">
              One partner across the whole path, from silicon to cloud.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                Icon={icons[service.icon]}
              />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
