import type { siteConfig } from "@/config/site";
import ServiceTags from "@/components/sections/ServiceTags";
import CardCover, { type CoverVariant } from "@/components/ui/CardCover";

/** One service, derived from the config so the shape stays in sync. */
type Service = (typeof siteConfig.services)[number];

/** Maps a service's icon key to its bespoke, content-specific cover art. */
const SERVICE_COVERS: Record<string, CoverVariant> = {
  cpu: "chip",
  gauge: "hil",
  brain: "edgeai",
  network: "network",
  iot: "iot",
  eye: "vision",
  code: "web",
  cicd: "cicd",
  annotate: "annotate",
  consult: "consult",
};

/**
 * ServiceCard (Layer 7): a single reusable service card. Presentation-only — it
 * receives its data as a prop and derives its cover illustration from the
 * service's icon key. The interactive tag list is delegated to `ServiceTags`
 * (a client component) so this card can stay a server component.
 */
export default function ServiceCard({ service }: { service: Service }) {
  const cover = SERVICE_COVERS[service.icon] ?? "chip";

  return (
    <li className="group flex flex-col overflow-hidden rounded-lg border border-navy/10 bg-surface transition duration-200 hover:-translate-y-1 hover:border-cyan hover:shadow-lg hover:shadow-navy/5">
      <CardCover variant={cover} className="aspect-5/2 w-full" />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-bold text-navy">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {service.benefit}
        </p>

        <div className="mt-auto">
          <ServiceTags tags={service.tags} label={service.title} />
        </div>
      </div>
    </li>
  );
}


