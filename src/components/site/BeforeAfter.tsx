import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import beforeImg1 from "@/assets/before1.jpg";
import afterImg1 from "@/assets/aftet1.jpg";
import beforeImg2 from "@/assets/before.jpg";
import afterImg2 from "@/assets/after.jpg";
import beforeImg3 from "@/assets/before-floor.png";
import afterImg3 from "@/assets/restored-floor.png";

const PAIRS = [
  { before: beforeImg1, after: afterImg1 },
  { before: beforeImg2, after: afterImg2 },
  { before: beforeImg3, after: afterImg3 }
];

export function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextPair = () => {
    setCurrentIndex(i => (i + 1) % PAIRS.length);
    setPos(50); // reset position on slide change
  };
  
  const prevPair = () => {
    setCurrentIndex(i => (i - 1 + PAIRS.length) % PAIRS.length);
    setPos(50);
  };

  const currentPair = PAIRS[currentIndex];

  return (
    <div className="flex flex-col gap-6 h-full">
      <div
        ref={ref}
        className="relative w-full aspect-square sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-full overflow-hidden rounded-sm shadow-elevated select-none cursor-ew-resize flex-grow"
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
          src={currentPair.after}
          alt="After restoration"
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        />
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${pos}%` }}
        >
          <img
            src={currentPair.before}
            alt="Before restoration"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
          />
        </div>

        <div className="absolute top-4 left-4 px-3 py-1 text-xs tracking-widest uppercase bg-primary text-primary-foreground rounded-sm pointer-events-none">
          Before
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 text-xs tracking-widest uppercase bg-primary text-primary-foreground rounded-sm pointer-events-none">
          After
        </div>

        <div
          className="absolute top-0 bottom-0 w-px bg-white shadow-elevated pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            <span className="text-primary text-xs flex gap-1 font-bold"><span>◀</span><span>▶</span></span>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="flex items-center justify-center gap-6">
        <button 
          onClick={prevPair} 
          className="h-12 w-12 flex items-center justify-center border border-border bg-card rounded-full hover:border-primary hover:text-primary transition-colors text-muted-foreground shadow-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          {currentIndex + 1} / {PAIRS.length}
        </div>
        <button 
          onClick={nextPair} 
          className="h-12 w-12 flex items-center justify-center border border-border bg-card rounded-full hover:border-primary hover:text-primary transition-colors text-muted-foreground shadow-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
