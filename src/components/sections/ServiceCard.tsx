import type { LucideIcon } from "lucide-react";
import type { siteConfig } from "@/config/site";
import ServiceTags from "@/components/sections/ServiceTags";

/** One service, derived from the config so the shape stays in sync. */
type Service = (typeof siteConfig.services)[number];

/**
 * ServiceCard (Layer 7): a single reusable service card. Presentation-only —
 * it receives its data and icon as props, so it knows nothing about the config
 * or the icon mapping. The interactive tag list is delegated to `ServiceTags`
 * (a client component) so this card can stay a server component.
 */
export default function ServiceCard({
  service,
  Icon,
}: {
  service: Service;
  Icon: LucideIcon;
}) {
  return (
    <li className="group rounded-lg border border-navy/10 bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan hover:shadow-lg hover:shadow-navy/5">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-muted text-navy transition-colors group-hover:bg-cyan group-hover:text-navy-dark">
        <Icon size={20} aria-hidden />
      </span>

      <h3 className="mt-4 font-heading text-lg font-bold text-navy">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {service.benefit}
      </p>

      <ServiceTags tags={service.tags} label={service.title} />
    </li>
  );
}


