import { useState, useRef, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn, ZoomOut } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImageLightbox = ({ src, alt, open, onOpenChange }: ImageLightboxProps) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });

  const resetView = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleOpenChange = (val: boolean) => {
    if (!val) resetView();
    onOpenChange(val);
  };

  const zoomIn = () => setScale((s) => Math.min(s + 0.5, 4));
  const zoomOut = () => {
    setScale((s) => {
      const next = Math.max(s - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    posStart.current = { ...position };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setPosition({
      x: posStart.current.x + (e.clientX - dragStart.current.x),
      y: posStart.current.y + (e.clientY - dragStart.current.y),
    });
  };

  const handlePointerUp = () => setIsDragging(false);

  const handleDoubleClick = () => {
    if (scale > 1) {
      resetView();
    } else {
      setScale(2.5);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 border-none bg-black/95 overflow-hidden [&>button]:hidden">
        {/* Controls */}
        <div className="absolute top-3 right-3 z-10 flex gap-2">
          <button onClick={zoomIn} className="p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition">
            <ZoomIn className="w-5 h-5" />
          </button>
          <button onClick={zoomOut} className="p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition">
            <ZoomOut className="w-5 h-5" />
          </button>
          <button onClick={() => handleOpenChange(false)} className="p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image */}
        <div
          className="flex items-center justify-center w-[95vw] h-[90vh] overflow-hidden select-none"
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onDoubleClick={handleDoubleClick}
          style={{ cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in" }}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain transition-transform duration-150"
            style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${scale})` }}
            draggable={false}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
