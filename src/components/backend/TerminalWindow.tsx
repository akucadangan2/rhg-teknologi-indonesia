"use client";

import { useEffect, useState } from "react";

const LINES = [
  "$ connecting to legacy_system...",
  "$ migrating 12,400 records... done",
  "$ verifying data integrity... ok",
  "$ enabling row level security... enabled",
  "$ system status: secure ✓",
];

export function TerminalWindow() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= LINES.length) return;
    const fullLine = LINES[lineIndex];
    let charIndex = 0;
    const interval = setInterval(() => {
      charIndex++;
      setCurrentText(fullLine.slice(0, charIndex));
      if (charIndex >= fullLine.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedLines((prev) => [...prev, fullLine]);
          setCurrentText("");
          setLineIndex((i) => i + 1);
        }, 400);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [lineIndex]);

  useEffect(() => {
    if (lineIndex < LINES.length) return;
    const timeout = setTimeout(() => {
      setDisplayedLines([]);
      setLineIndex(0);
    }, 2500);
    return () => clearTimeout(timeout);
  }, [lineIndex]);

  return (
    <div className="w-full max-w-md rounded-xl border border-white/10 bg-[#0A0E1F] p-5 font-mono text-sm shadow-2xl">
      <div className="mb-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
      <div className="space-y-1.5">
        {displayedLines.map((line, i) => (
          <p key={i} className="text-white/70">{line}</p>
        ))}
        {lineIndex < LINES.length && (
          <p className="text-white/70">
            {currentText}
            <span className="animate-pulse">▍</span>
          </p>
        )}
      </div>
    </div>
  );
}