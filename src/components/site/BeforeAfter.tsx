import { useRef, useState, useCallback } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-sm shadow-elevated select-none cursor-ew-resize"
      onMouseDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => update(e.touches[0].clientX)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
    >
      <img
        src={afterImg}
        alt="After restoration"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={beforeImg}
          alt="Before restoration"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
        />
      </div>

      <div className="absolute top-4 left-4 px-3 py-1 text-xs tracking-widest uppercase bg-primary text-primary-foreground rounded-sm">
        Before
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 text-xs tracking-widest uppercase bg-gold text-gold-foreground rounded-sm">
        After
      </div>

      <div
        className="absolute top-0 bottom-0 w-px bg-white shadow-elevated"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white border border-border flex items-center justify-center shadow-elevated">
          <span className="text-primary text-xs">◀ ▶</span>
        </div>
      </div>
    </div>
  );
}
