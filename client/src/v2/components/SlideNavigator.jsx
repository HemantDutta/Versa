import useCarouselStore from "../store/useCarouselStore";

/**
 * SlideNavigator — Minimal slide counter with prev/next arrows
 * and an "Add Slide" button.
 */
export const SlideNavigator = () => {
  const {
    slides,
    activeSlideIndex,
    setActiveSlide,
    nextSlide,
    prevSlide,
    addSlideBreak,
  } = useCarouselStore();

  const total = slides.length || 1;
  const current = activeSlideIndex + 1;

  return (
    <div className="slide-navigator flex items-center justify-center gap-3 py-3 select-none">
      {/* Previous */}
      <button
        onClick={prevSlide}
        disabled={activeSlideIndex <= 0}
        className="w-9 h-9 grid place-items-center rounded-full bg-gray-800 text-white disabled:opacity-30 hover:bg-gray-700 transition-colors"
        title="Previous Slide"
      >
        <i className="fa-solid fa-chevron-left text-xs" />
      </button>

      {/* Slide dots / mini thumbnails */}
      <div className="flex items-center gap-1.5">
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

      {/* Next */}
      <button
        onClick={nextSlide}
        disabled={activeSlideIndex >= total - 1}
        className="w-9 h-9 grid place-items-center rounded-full bg-gray-800 text-white disabled:opacity-30 hover:bg-gray-700 transition-colors"
        title="Next Slide"
      >
        <i className="fa-solid fa-chevron-right text-xs" />
      </button>

      {/* Counter */}
      <span className="text-gray-400 text-sm font-mono ml-2">
        {current} / {total}
      </span>

      {/* Add slide break */}
      <button
        onClick={addSlideBreak}
        className="ml-2 w-9 h-9 grid place-items-center rounded-full bg-gray-800 text-versa-one hover:bg-gray-700 transition-colors"
        title="Add New Slide Break"
      >
        <i className="fa-solid fa-plus text-xs" />
      </button>
    </div>
  );
};

export default SlideNavigator;
