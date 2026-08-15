const CENTER = { x: 250, y: 220 };

const NODES = [
  { code: "MIKROTIK", x: 400, y: 220, delay: "0s" },
  { code: "HOTSPOT", x: 330, y: 90, delay: "0.1s" },
  { code: "OLT/SNMP", x: 170, y: 90, delay: "0.2s" },
  { code: "HARDWARE", x: 100, y: 220, delay: "0.3s" },
  { code: "IOT", x: 250, y: 360, delay: "0.4s" },
];

export function NetworkTopology() {
  return (
    <svg
      viewBox="0 0 500 440"
      className="w-full max-w-md justify-self-center"
      role="img"
      aria-label="Diagram topologi jaringan: Mikrotik, hotspot, monitoring OLT, hardware, dan IoT terhubung ke satu titik pusat"
    >
      {NODES.map((node) => (
        <line
          key={`line-${node.code}`}
          x1={CENTER.x}
          y1={CENTER.y}
          x2={node.x}
          y2={node.y}
          pathLength={1}
          className="diagram-line stroke-emerald-500/40"
          style={{ ["--delay" as string]: node.delay }}
          strokeWidth={1.5}
        />
      ))}

      {NODES.map((node) => (
        <circle
          key={`pulse-${node.code}`}
          r={4}
          className="pulse-dot fill-emerald-500"
          style={
            {
              offsetPath: `path('M ${CENTER.x} ${CENTER.y} L ${node.x} ${node.y}')`,
              "--delay": node.delay,
              "--duration": "2s",
            } as React.CSSProperties
          }
        />
      ))}

      <circle cx={CENTER.x} cy={CENTER.y} r={30} className="fill-ink" />
      <text
        x={CENTER.x}
        y={CENTER.y + 5}
        textAnchor="middle"
        className="fill-paper font-mono text-[13px] font-medium"
      >
        NOC
      </text>

      {NODES.map((node) => (
        <g key={`node-${node.code}`} className="diagram-node" style={{ ["--delay" as string]: node.delay }}>
          <circle cx={node.x} cy={node.y} r={22} className="fill-white stroke-emerald-500" strokeWidth={1.5} />
          <text
            x={node.x}
            y={node.y + 4}
            textAnchor="middle"
            className="fill-ink font-mono text-[8px] font-medium"
          >
            {node.code}
          </text>
        </g>
      ))}
    </svg>
  );
}