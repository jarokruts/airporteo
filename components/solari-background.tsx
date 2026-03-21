"use client";

import { useEffect, useRef } from "react";

const CHARS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const destinations = [
  { code: "LHR", name: "LONDON" },
  { code: "DXB", name: "DUBAI" },
  { code: "JFK", name: "NEW YORK" },
  { code: "CDG", name: "PARIS" },
  { code: "SIN", name: "SINGAPORE" },
  { code: "HND", name: "TOKYO" },
  { code: "ZRH", name: "ZURICH" },
  { code: "HKG", name: "HONG KONG" },
  { code: "LAX", name: "LOS ANGELES" },
  { code: "MXP", name: "MILAN" },
  { code: "FRA", name: "FRANKFURT" },
  { code: "AMS", name: "AMSTERDAM" },
  { code: "BCN", name: "BARCELONA" },
  { code: "SYD", name: "SYDNEY" },
  { code: "ICN", name: "SEOUL" },
  { code: "BKK", name: "BANGKOK" },
  { code: "IST", name: "ISTANBUL" },
  { code: "MIA", name: "MIAMI" },
  { code: "ORD", name: "CHICAGO" },
  { code: "MAD", name: "MADRID" },
  { code: "MUC", name: "MUNICH" },
  { code: "VIE", name: "VIENNA" },
  { code: "ATH", name: "ATHENS" },
  { code: "DOH", name: "DOHA" },
  { code: "CPH", name: "COPENHAGEN" },
];

export function SolariBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTagsRef = useRef<Array<{ el: HTMLDivElement; x: number; y: number; width: number; timeout: NodeJS.Timeout | null }>>([]);
  const destIndexRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const MAX_TAGS = 8;
    const MIN_HORIZONTAL_GAP = 220;
    const MIN_VERTICAL_GAP = 70;

    const createTag = (text: string): HTMLDivElement => {
      const tag = document.createElement("div");
      tag.style.cssText = `
        position: absolute;
        display: flex;
        gap: 2px;
        opacity: 0;
        transition: opacity 0.8s ease;
        pointer-events: none;
      `;

      for (let i = 0; i < text.length; i++) {
        const char = document.createElement("div");
        char.style.cssText = `
          width: 24px;
          height: 36px;
          background: rgba(15, 25, 40, 0.7);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        `;

        const inner = document.createElement("div");
        inner.className = "char-inner";
        inner.style.cssText = `
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 20px;
          font-weight: 500;
          color: rgba(180, 190, 210, 0.7);
        `;
        inner.textContent = " ";

        const line = document.createElement("div");
        line.style.cssText = `
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(0, 0, 0, 0.4);
          z-index: 10;
        `;

        char.appendChild(inner);
        char.appendChild(line);
        tag.appendChild(char);
      }

      return tag;
    };

    const checkOverlap = (x: number, y: number, width: number): boolean => {
      for (const tag of activeTagsRef.current) {
        const horizontalOverlap = Math.abs(tag.x - x) < Math.max(tag.width, width) + MIN_HORIZONTAL_GAP;
        const verticalOverlap = Math.abs(tag.y - y) < MIN_VERTICAL_GAP;
        if (horizontalOverlap && verticalOverlap) {
          return true;
        }
      }
      return false;
    };

    const findPosition = (tagWidth: number): { x: number; y: number } | null => {
      const containerRect = container.getBoundingClientRect();
      const maxX = containerRect.width - tagWidth - 40;
      const maxY = containerRect.height - 60;

      if (maxX < 40 || maxY < 40) return null;

      for (let attempt = 0; attempt < 30; attempt++) {
        const x = 40 + Math.random() * maxX;
        const y = 30 + Math.random() * maxY;

        if (!checkOverlap(x, y, tagWidth)) {
          return { x, y };
        }
      }

      return null;
    };

    const flipToChar = (charEl: HTMLElement, targetChar: string, delay: number) => {
      setTimeout(() => {
        const inner = charEl.querySelector(".char-inner") as HTMLElement;
        if (!inner) return;

        let ci = 0;
        let ti = CHARS.indexOf(targetChar);
        if (ti === -1) ti = 0;

        let step = 0;
        const interval = setInterval(() => {
          ci = (ci + 1) % CHARS.length;
          inner.textContent = CHARS[ci];
          step++;
          if (step >= ti) clearInterval(interval);
        }, 60);
      }, delay);
    };

    const animateTag = (tag: HTMLDivElement, text: string) => {
      const chars = tag.children;
      for (let i = 0; i < chars.length; i++) {
        flipToChar(chars[i] as HTMLElement, text[i] || " ", i * 50);
      }
    };

    const spawnTag = () => {
      if (activeTagsRef.current.length >= MAX_TAGS) return;

      const dest = destinations[destIndexRef.current];
      destIndexRef.current = (destIndexRef.current + 1) % destinations.length;

      const showCode = Math.random() > 0.5;
      const text = showCode ? dest.code : dest.name;
      const tagWidth = text.length * 26;

      const position = findPosition(tagWidth);
      if (!position) return;

      const tag = createTag(text);
      container.appendChild(tag);
      tag.style.left = position.x + "px";
      tag.style.top = position.y + "px";

      setTimeout(() => {
        tag.style.opacity = "0.35";
        animateTag(tag, text);
      }, 100);

      const lifetime = 5000 + Math.random() * 3000;

      const tagData = {
        el: tag,
        x: position.x,
        y: position.y,
        width: tagWidth,
        timeout: null as NodeJS.Timeout | null,
      };
      activeTagsRef.current.push(tagData);

      tagData.timeout = setTimeout(() => {
        tag.style.opacity = "0";
        setTimeout(() => {
          tag.remove();
          const idx = activeTagsRef.current.indexOf(tagData);
          if (idx > -1) activeTagsRef.current.splice(idx, 1);
        }, 800);
      }, lifetime);
    };

    // Initial spawns with delays
    const t0 = setTimeout(() => spawnTag(), 300);
    const t1 = setTimeout(() => spawnTag(), 1000);
    const t2 = setTimeout(() => spawnTag(), 1700);

    // Continuous spawning
    const interval = setInterval(() => {
      if (activeTagsRef.current.length < MAX_TAGS) {
        spawnTag();
      }
    }, 2000);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(interval);
      activeTagsRef.current.forEach((t) => {
        if (t.timeout) clearTimeout(t.timeout);
        t.el.remove();
      });
      activeTagsRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 right-0 h-[55%] overflow-hidden pointer-events-none"
    />
  );
}
