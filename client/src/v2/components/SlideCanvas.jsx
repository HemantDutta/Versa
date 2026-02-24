import { useRef, useEffect, useMemo } from "react";
import useCarouselStore from "../store/useCarouselStore";
import { getCarouselThemeCSS } from "../themes/carousel";

/**
 * SlideCanvas — Renders the currently active slide at display scale.
 * The inner container is always slideSize px, scaled via CSS transform
 * to fit the available panel width.
 */
export const SlideCanvas = ({ containerWidth = 540, containerHeight = 540 }) => {
  const canvasRef = useRef(null);
  const { slides, activeSlideIndex, slideSize, selectedTheme, selectedFont } =
    useCarouselStore();

  const slide = slides[activeSlideIndex] || { html: "<p></p>" };

  // Calculate scale so the fixed-size slide fits within the panel
  // Constrain by both width and height so the slide is never clipped
  const scale = useMemo(() => {
    const padding = 32; // px on each side
    const availableW = containerWidth - padding * 2;
    const navHeight = 48; // approximate height for SlideNavigator + gap
    const availableH = containerHeight - padding * 2 - navHeight;
    return Math.min(1, availableW / slideSize.width, availableH / slideSize.height);
  }, [containerWidth, containerHeight, slideSize.width, slideSize.height]);

  const themeCSS = useMemo(
    () => getCarouselThemeCSS(selectedTheme),
    [selectedTheme]
  );

  // Inject theme stylesheet into the canvas wrapper
  useEffect(() => {
    if (!canvasRef.current) return;
    const existing = canvasRef.current.querySelector("style[data-versa-theme]");
    if (existing) existing.remove();

    const style = document.createElement("style");
    style.setAttribute("data-versa-theme", selectedTheme);
    style.textContent = themeCSS;
    canvasRef.current.prepend(style);
  }, [themeCSS, selectedTheme]);

  const fontStyle = selectedFont
    ? { fontFamily: `'${selectedFont.family}', sans-serif` }
    : {};

  return (
    <div className="slide-canvas-wrapper flex flex-col items-center" ref={canvasRef}>
      <div
        className="slide-canvas-scaler"
        style={{
          width: slideSize.width * scale,
          height: slideSize.height * scale,
          overflow: "hidden",
        }}
      >
        <div
          className="slide-canvas versa-slide"
          style={{
            width: slideSize.width,
            height: slideSize.height,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            overflow: "hidden",
            boxSizing: "border-box",
            ...fontStyle,
          }}
          dangerouslySetInnerHTML={{ __html: slide.html }}
        />
      </div>
    </div>
  );
};

export default SlideCanvas;
