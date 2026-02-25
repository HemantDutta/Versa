import { memo } from "react";
import useCarouselStore from "../store/useCarouselStore";

/**
 * SlideNavigator — Minimal slide counter with prev/next arrows
 * and an "Add Slide" button.
 */
export const SlideNavigator = () => {
  const slides = useCarouselStore((s) => s.slides);
  const activeSlideIndex = useCarouselStore((s) => s.activeSlideIndex);
  const setActiveSlide = useCarouselStore((s) => s.setActiveSlide);
  const nextSlide = useCarouselStore((s) => s.nextSlide);
  const prevSlide = useCarouselStore((s) => s.prevSlide);
  const addSlideBreak = useCarouselStore((s) => s.addSlideBreak);

  const total = slides.length || 1;
  const current = activeSlideIndex + 1;

  // On mobile (≤5 dots visible) show dots; otherwise just the counter
  const showDots = total <= 10;

  return (
    <div className="slide-navigator flex items-center justify-center gap-2 sm:gap-3 py-3 select-none flex-wrap">
      {/* Previous */}
      <button
        onClick={prevSlide}
        disabled={activeSlideIndex <= 0}
        className="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center rounded-full bg-gray-800 text-white disabled:opacity-30 hover:bg-gray-700 transition-colors flex-shrink-0"
        title="Previous Slide"
      >
        <i className="fa-solid fa-chevron-left text-xs" />
      </button>

      {/* Slide dots — hidden when too many on mobile */}
      {showDots && (
        <div className="hidden sm:flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === activeSlideIndex
                  ? "bg-white scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              title={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      <span className="text-gray-400 text-sm font-mono">
        {current} / {total}
      </span>

      {/* Next */}
      <button
        onClick={nextSlide}
        disabled={activeSlideIndex >= total - 1}
        className="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center rounded-full bg-gray-800 text-white disabled:opacity-30 hover:bg-gray-700 transition-colors flex-shrink-0"
        title="Next Slide"
      >
        <i className="fa-solid fa-chevron-right text-xs" />
      </button>

      {/* Add slide break */}
      <button
        onClick={addSlideBreak}
        className="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center rounded-full bg-gray-800 text-versa-one hover:bg-gray-700 transition-colors flex-shrink-0"
        title="Add New Slide Break"
      >
        <i className="fa-solid fa-plus text-xs" />
      </button>
    </div>
  );
};

export default memo(SlideNavigator);
