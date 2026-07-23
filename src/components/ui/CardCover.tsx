/**
 * CardCover (Layer 7/8): bespoke, content-specific cover art for service and
 * case-study cards. Each `variant` is a hand-drawn SVG scene that illustrates
 * what the card is actually about — a microcontroller for firmware, a neural
 * net on silicon for edge AI, a CAN bus for vehicle networking, and so on —
 * rather than a generic icon.
 *
 * All scenes share one calm visual language: a soft light board with a faint
 * grid, navy line-art that carries the drawing, and cyan used sparingly as a
 * focal accent. Purely decorative, so the whole thing is aria-hidden. No
 * <defs>/gradient ids are used, so many covers can render on one page without
 * id collisions.
 */
export type CoverVariant =
  | "chip"
  | "rtos"
  | "hil"
  | "edgeai"
  | "network"
  | "iot"
  | "vision"
  | "web"
  | "cicd"
  | "annotate"
  | "consult"
  | "predictive"
  | "sensorfusion"
  | "gui";

export default function CardCover({
  variant,
  className = "",
}: {
  variant: CoverVariant;
  className?: string;
}) {
  const Motif = MOTIFS[variant];

  return (
    <div
      aria-hidden
      className={`relative overflow-hidden bg-linear-to-br from-surface to-surface-muted ${className}`}
    >
      <svg
        viewBox="0 0 320 128"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <GridBackdrop />
        <Motif />
      </svg>
    </div>
  );
}

/** Faint circuit-board grid shared by every cover. */
function GridBackdrop() {
  const lines = [];
  for (let x = 0; x <= 320; x += 32) {
    lines.push(<line key={`v${x}`} x1={x} y1={0} x2={x} y2={128} />);
  }
  for (let y = 0; y <= 128; y += 32) {
    lines.push(<line key={`h${y}`} x1={0} y1={y} x2={320} y2={y} />);
  }
  return (
    <g stroke="var(--color-navy)" strokeOpacity="0.06" strokeWidth="1">
      {lines}
    </g>
  );
}

// Shared colours for the foreground line-art. Navy carries the drawing; cyan is
// used sparingly as a focal accent; solids are filled with the card surface so
// shapes read as outlines rather than heavy blocks.
const LINE = "var(--color-navy)";
const CYAN = "var(--color-cyan)";
const FILL = "var(--color-surface)";

/** Embedded & Firmware — a microcontroller IC with pins and traces. */
function ChipMotif() {
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round">
      <g strokeOpacity="0.28">
        <path d="M28 44 H108 M28 64 H108 M28 84 H108" />
        <path d="M212 44 H292 M212 64 H292 M212 84 H292" />
      </g>
      <g strokeOpacity="0.75">
        <path d="M112 46 h8 M112 64 h8 M112 82 h8" />
        <path d="M200 46 h8 M200 64 h8 M200 82 h8" />
        <path d="M140 30 v-8 M160 30 v-8 M180 30 v-8" />
        <path d="M140 98 v8 M160 98 v8 M180 98 v8" />
      </g>
      <rect x="120" y="34" width="80" height="60" rx="6" fill={FILL} strokeOpacity="0.85" />
      <rect
        x="148"
        y="52"
        width="24"
        height="24"
        rx="3"
        fill={CYAN}
        fillOpacity="0.7"
        stroke="none"
      />
      <circle cx="130" cy="44" r="2.5" fill={CYAN} stroke="none" />
    </g>
  );
}

/** RTOS firmware — a cyclic scheduler clock and a deterministic task timeline. */
function RtosMotif() {
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round">
      <circle cx="80" cy="64" r="30" strokeOpacity="0.8" />
      <g strokeOpacity="0.45">
        <path d="M80 34 v6 M80 88 v6 M50 64 h6 M104 64 h6" />
      </g>
      {/* clock hands */}
      <path d="M80 64 V46 M80 64 L94 70" strokeOpacity="0.85" />
      {/* rotation arrow */}
      <path d="M108 52 A30 30 0 0 1 108 76" strokeOpacity="0.6" />
      <path d="M108 76 l5 -2 M108 76 l-1 -5" strokeOpacity="0.6" />
      {/* task bars — cyan is the focal "work" accent */}
      <g stroke="none">
        <rect x="150" y="44" width="140" height="8" rx="4" fill={CYAN} fillOpacity="0.85" />
        <rect x="150" y="60" width="92" height="8" rx="4" fill={CYAN} fillOpacity="0.45" />
        <rect x="150" y="76" width="120" height="8" rx="4" fill={CYAN} fillOpacity="0.6" />
      </g>
    </g>
  );
}

/** Automotive test — a vehicle wired to a HIL test rack with a live waveform. */
function HilMotif() {
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* car */}
      <path d="M34 84 h64 M40 84 l6 -16 h40 l10 16" />
      <path d="M52 68 l6 -8 h22 l6 8" strokeOpacity="0.6" />
      <circle cx="54" cy="88" r="6" />
      <circle cx="88" cy="88" r="6" />
      {/* harness */}
      <path d="M112 76 H176" strokeDasharray="4 4" strokeOpacity="0.7" />
      {/* waveform */}
      <path d="M118 52 h10 v-14 h12 v14 h10 v-14 h12 v14 h10" stroke={CYAN} strokeOpacity="0.9" />
      {/* rack */}
      <rect x="196" y="34" width="78" height="80" rx="6" fill={FILL} strokeOpacity="0.85" />
      <g strokeOpacity="0.5">
        <path d="M206 52 h58 M206 68 h58 M206 84 h58" />
      </g>
      <g stroke="none" fill={CYAN}>
        <circle cx="212" cy="44" r="2.5" />
        <circle cx="222" cy="44" r="2.5" fillOpacity="0.5" />
      </g>
    </g>
  );
}

/** Edge AI / TinyML — a neural network running on-device (chip + net). */
function EdgeAiMotif() {
  const input = [46, 82];
  const hidden = [34, 64, 94];
  const output = [50, 78];
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round">
      {/* chip */}
      <rect x="30" y="46" width="52" height="36" rx="6" fill={FILL} strokeOpacity="0.85" />
      <g strokeOpacity="0.65">
        <path d="M40 46 v-6 M56 46 v-6 M72 46 v-6 M40 82 v6 M56 82 v6 M72 82 v6" />
      </g>
      <text
        x="56"
        y="68"
        fill={CYAN}
        stroke="none"
        fontSize="12"
        fontWeight="700"
        textAnchor="middle"
        fontFamily="monospace"
      >
        AI
      </text>
      {/* connections */}
      <g stroke={CYAN} strokeOpacity="0.28">
        {input.map((iy) =>
          hidden.map((hy) => (
            <line key={`i${iy}-h${hy}`} x1="150" y1={iy} x2="210" y2={hy} />
          )),
        )}
        {hidden.map((hy) =>
          output.map((oy) => (
            <line key={`h${hy}-o${oy}`} x1="210" y1={hy} x2="270" y2={oy} />
          )),
        )}
      </g>
      {/* nodes — the cyan focal accent */}
      <g stroke="none" fill={CYAN}>
        {input.map((y) => (
          <circle key={`in${y}`} cx="150" cy={y} r="5" />
        ))}
        {hidden.map((y) => (
          <circle key={`hn${y}`} cx="210" cy={y} r="5" fillOpacity="0.85" />
        ))}
        {output.map((y) => (
          <circle key={`on${y}`} cx="270" cy={y} r="5" />
        ))}
      </g>
    </g>
  );
}

/** Vehicle networking — a CAN bus (H/L pair) with ECUs tapping in. */
function NetworkMotif() {
  const ecuX = [70, 160, 250];
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round">
      {/* differential bus pair */}
      <path d="M20 78 H300" strokeOpacity="0.8" />
      <path d="M20 90 H300" strokeOpacity="0.45" />
      {/* ECUs + stubs */}
      {ecuX.map((x) => (
        <g key={x}>
          <rect x={x - 22} y="30" width="44" height="26" rx="4" fill={FILL} strokeOpacity="0.85" />
          <path d={`M${x} 56 V78`} strokeOpacity="0.6" />
          <circle cx={x} cy="78" r="3" fill={CYAN} stroke="none" />
        </g>
      ))}
      {/* differential signal hint */}
      <path
        d="M30 68 h14 v-8 h14 v8 h14 v-8 h14 v8 h14"
        stroke={CYAN}
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
    </g>
  );
}

/** IoT & connectivity — a sensor broadcasting telemetry up to the cloud. */
function IotMotif() {
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* device */}
      <rect x="40" y="78" width="46" height="30" rx="4" fill={FILL} strokeOpacity="0.85" />
      <path d="M63 78 V64" />
      <circle cx="63" cy="60" r="3" fill={CYAN} stroke="none" />
      {/* signal arcs */}
      <g stroke={CYAN} strokeOpacity="0.7">
        <path d="M92 66 a18 18 0 0 1 0 30" />
        <path d="M104 58 a30 30 0 0 1 0 46" strokeOpacity="0.4" />
      </g>
      {/* cloud */}
      <path
        d="M196 54 a16 16 0 0 1 31 -4 a14 14 0 0 1 13 20 h-52 a12 12 0 0 1 8 -16"
        fill={FILL}
        strokeOpacity="0.85"
      />
      {/* uplink */}
      <path d="M120 74 C160 60 180 60 206 62" strokeDasharray="4 4" strokeOpacity="0.6" />
    </g>
  );
}

/** Computer vision — a lens detecting objects with bounding boxes. */
function VisionMotif() {
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round">
      {/* eye / lens */}
      <path d="M60 64 q30 -30 60 0 q-30 30 -60 0" strokeOpacity="0.8" />
      <circle cx="90" cy="64" r="12" />
      <circle cx="90" cy="64" r="4" fill={CYAN} stroke="none" />
      {/* detection boxes — cyan focal accent */}
      <g stroke={CYAN} strokeOpacity="0.9">
        <rect x="176" y="34" width="52" height="40" rx="2" strokeDasharray="6 4" />
        <rect x="236" y="60" width="44" height="40" rx="2" strokeDasharray="6 4" strokeOpacity="0.55" />
      </g>
      {/* labels */}
      <rect x="176" y="24" width="26" height="10" rx="2" fill={CYAN} stroke="none" />
      <rect x="236" y="50" width="26" height="10" rx="2" fill={CYAN} fillOpacity="0.55" stroke="none" />
    </g>
  );
}

/** Web & full-stack — a browser window with layout blocks and code brackets. */
function WebMotif() {
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="54" y="28" width="212" height="72" rx="8" fill={FILL} strokeOpacity="0.85" />
      <path d="M54 46 H266" strokeOpacity="0.5" />
      <g stroke="none" fill={CYAN}>
        <circle cx="68" cy="37" r="3" />
        <circle cx="80" cy="37" r="3" fillOpacity="0.6" />
        <circle cx="92" cy="37" r="3" fillOpacity="0.4" />
      </g>
      {/* sidebar + content */}
      <rect x="66" y="56" width="34" height="36" rx="3" strokeOpacity="0.45" />
      <g strokeOpacity="0.45">
        <path d="M112 60 H210 M112 72 H240 M112 84 H196" />
      </g>
      {/* code brackets — cyan focal accent */}
      <path d="M228 60 l-10 10 l10 10 M250 60 l10 10 l-10 10" stroke={CYAN} strokeOpacity="0.9" />
    </g>
  );
}

/** CI/CD — a pipeline of stages with a return loop and a passing check. */
function CicdMotif() {
  const stages = [80, 160, 240];
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {stages.map((x) => (
        <circle key={x} cx={x} cy="56" r="18" fill={FILL} strokeOpacity="0.85" />
      ))}
      <path d="M102 56 H138 M182 56 H218" strokeOpacity="0.65" />
      <path d="M138 56 l-6 -4 M138 56 l-6 4" strokeOpacity="0.65" />
      <path d="M218 56 l-6 -4 M218 56 l-6 4" strokeOpacity="0.65" />
      {/* return loop */}
      <path d="M240 74 q0 26 -80 26 q-80 0 -80 -26" strokeDasharray="5 4" strokeOpacity="0.45" />
      {/* check in last stage — cyan focal accent */}
      <path d="M232 56 l6 6 l12 -13" stroke={CYAN} />
    </g>
  );
}

/** Data annotation — an image frame with labelled bounding boxes. */
function AnnotateMotif() {
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="52" y="26" width="216" height="82" rx="6" fill={FILL} strokeOpacity="0.85" />
      {/* subject */}
      <circle cx="112" cy="58" r="12" strokeOpacity="0.5" />
      <path d="M92 94 q20 -24 40 0" strokeOpacity="0.5" />
      {/* boxes — cyan focal accent */}
      <g stroke={CYAN}>
        <rect x="90" y="42" width="46" height="54" rx="2" strokeDasharray="6 4" />
        <rect x="176" y="52" width="66" height="44" rx="2" strokeDasharray="6 4" strokeOpacity="0.55" />
      </g>
      {/* corner handles */}
      <g stroke="none" fill={CYAN}>
        <circle cx="90" cy="42" r="3" />
        <circle cx="136" cy="42" r="3" />
        <circle cx="90" cy="96" r="3" />
        <circle cx="136" cy="96" r="3" />
      </g>
      {/* label tag */}
      <rect x="90" y="32" width="30" height="10" rx="2" fill={CYAN} stroke="none" />
    </g>
  );
}

/** Technical consultancy — a reviewed architecture stack. */
function ConsultMotif() {
  const layers = [40, 62, 84];
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {layers.map((y, i) => (
        <rect
          key={y}
          x="54"
          y={y}
          width="150"
          height="16"
          rx="4"
          fill={FILL}
          strokeOpacity={0.8 - i * 0.15}
        />
      ))}
      <path d="M129 56 v6 M129 78 v6" strokeOpacity="0.45" />
      {/* magnifier reviewing the stack */}
      <circle cx="238" cy="58" r="18" strokeOpacity="0.85" />
      <path d="M251 71 l12 12" strokeOpacity="0.85" />
      {/* verdict check — cyan focal accent */}
      <path d="M231 58 l5 5 l9 -10" stroke={CYAN} />
    </g>
  );
}

/** Predictive AI — a rising trend with a dashed forecast and an alert. */
function PredictiveMotif() {
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* axes */}
      <path d="M48 30 V100 H272" strokeOpacity="0.45" />
      {/* measured series */}
      <path d="M56 92 L92 78 L128 84 L164 58 L196 64" strokeOpacity="0.85" />
      <g stroke="none" fill={CYAN}>
        <circle cx="56" cy="92" r="3" />
        <circle cx="92" cy="78" r="3" />
        <circle cx="128" cy="84" r="3" />
        <circle cx="164" cy="58" r="3" />
        <circle cx="196" cy="64" r="3" />
      </g>
      {/* forecast — cyan focal accent */}
      <path d="M196 64 L232 46 L262 40" stroke={CYAN} strokeDasharray="5 4" strokeOpacity="0.85" />
      {/* alert */}
      <path d="M262 28 l10 18 h-20 z" stroke={CYAN} />
      <path d="M262 36 v5 M262 44 v1" stroke={CYAN} />
    </g>
  );
}

/** Sensor fusion — multiple sources triangulating a located point. */
function SensorFusionMotif() {
  const sources = [
    { x: 44, y: 40 },
    { x: 40, y: 92 },
    { x: 250, y: 34 },
  ];
  const target = { x: 176, y: 78 };
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round">
      <g strokeOpacity="0.4" strokeDasharray="5 4">
        {sources.map((s) => (
          <line key={`${s.x}-${s.y}`} x1={s.x} y1={s.y} x2={target.x} y2={target.y} />
        ))}
      </g>
      {/* signal arcs at each source */}
      {sources.map((s) => (
        <g key={`arc${s.x}-${s.y}`} strokeOpacity="0.55">
          <circle cx={s.x} cy={s.y} r="4" fill={CYAN} stroke="none" />
          <path d={`M${s.x + 8} ${s.y - 8} a12 12 0 0 1 0 16`} strokeWidth="1.5" />
        </g>
      ))}
      {/* located point crosshair — cyan focal accent */}
      <circle cx={target.x} cy={target.y} r="12" stroke={CYAN} />
      <circle cx={target.x} cy={target.y} r="3" fill={CYAN} stroke="none" />
      <path
        d={`M${target.x} ${target.y - 18} v6 M${target.x} ${target.y + 12} v6 M${target.x - 18} ${target.y} h6 M${target.x + 12} ${target.y} h6`}
        stroke={CYAN}
        strokeOpacity="0.8"
      />
    </g>
  );
}

/** GUI & tooling — a desktop app with a dial and a live plot. */
function GuiMotif() {
  return (
    <g fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="46" y="26" width="228" height="80" rx="8" fill={FILL} strokeOpacity="0.85" />
      <path d="M46 44 H274" strokeOpacity="0.5" />
      <g stroke="none" fill={CYAN}>
        <circle cx="60" cy="35" r="3" />
        <circle cx="72" cy="35" r="3" fillOpacity="0.6" />
      </g>
      {/* dial */}
      <path d="M74 92 A26 26 0 0 1 126 92" strokeOpacity="0.7" />
      <path d="M100 92 L114 74" strokeOpacity="0.85" />
      <circle cx="100" cy="92" r="3" fill={CYAN} stroke="none" />
      {/* live plot — cyan focal accent */}
      <path d="M150 88 L166 72 L182 80 L198 60 L214 68 L230 54 L246 62" stroke={CYAN} strokeOpacity="0.9" />
      {/* control */}
      <path d="M150 98 H246" strokeOpacity="0.4" />
      <circle cx="196" cy="98" r="4" fill={CYAN} stroke="none" />
    </g>
  );
}

const MOTIFS: Record<CoverVariant, () => React.JSX.Element> = {
  chip: ChipMotif,
  rtos: RtosMotif,
  hil: HilMotif,
  edgeai: EdgeAiMotif,
  network: NetworkMotif,
  iot: IotMotif,
  vision: VisionMotif,
  web: WebMotif,
  cicd: CicdMotif,
  annotate: AnnotateMotif,
  consult: ConsultMotif,
  predictive: PredictiveMotif,
  sensorfusion: SensorFusionMotif,
  gui: GuiMotif,
};
