/**
 * LinkedIn Carousel Themes
 * Each theme provides CSS scoped to .versa-slide and preview metadata.
 */

export const CAROUSEL_THEMES = [
  {
    name: "Clean White",
    preview: { bg: "#ffffff", text: "#1a1a1a", border: "#e0e0e0" },
    css: `
      .versa-slide {
        background: #ffffff;
        color: #1a1a1a;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #0a0a0a; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #1a1a1a; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #333; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 32px; }
      .versa-slide li { margin-bottom: 8px; }
      .versa-slide blockquote { border-left: 4px solid #0077B5; padding: 16px 24px; margin: 16px 0; background: #f8f9fa; font-style: italic; font-size: 22px; border-radius: 0 8px 8px 0; }
      .versa-slide code { background: #f0f0f0; padding: 2px 8px; border-radius: 4px; font-size: 18px; }
      .versa-slide pre { background: #f5f5f5; padding: 20px; border-radius: 8px; overflow-x: auto; margin: 16px 0; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; }
      .versa-slide strong { color: #0077B5; }
      .versa-slide a { color: #0077B5; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid #e0e0e0; margin: 24px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #f5f5f5; padding: 12px; text-align: left; border-bottom: 2px solid #ddd; font-weight: 700; }
      .versa-slide td { padding: 12px; border-bottom: 1px solid #eee; }
      .versa-slide img { max-width: 100%; border-radius: 8px; margin: 12px 0; }
    `,
  },
  {
    name: "Dark Minimal",
    preview: { bg: "#0f0f0f", text: "#e0e0e0", border: "#333" },
    css: `
      .versa-slide {
        background: #0f0f0f;
        color: #e0e0e0;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #ffffff; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #f0f0f0; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #ccc; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 32px; }
      .versa-slide li { margin-bottom: 8px; }
      .versa-slide blockquote { border-left: 4px solid #00d4aa; padding: 16px 24px; margin: 16px 0; background: #1a1a1a; font-style: italic; font-size: 22px; border-radius: 0 8px 8px 0; }
      .versa-slide code { background: #1e1e1e; color: #00d4aa; padding: 2px 8px; border-radius: 4px; font-size: 18px; }
      .versa-slide pre { background: #1a1a1a; padding: 20px; border-radius: 8px; overflow-x: auto; margin: 16px 0; border: 1px solid #333; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; }
      .versa-slide strong { color: #00d4aa; }
      .versa-slide a { color: #00d4aa; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #333; margin: 24px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #1a1a1a; padding: 12px; text-align: left; border-bottom: 2px solid #333; font-weight: 700; color: #00d4aa; }
      .versa-slide td { padding: 12px; border-bottom: 1px solid #222; }
      .versa-slide img { max-width: 100%; border-radius: 8px; margin: 12px 0; }
    `,
  },
  {
    name: "Brand Blue",
    preview: { bg: "#0077B5", text: "#ffffff", border: "#005f8f" },
    css: `
      .versa-slide {
        background: linear-gradient(135deg, #0077B5, #005f8f);
        color: #ffffff;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; opacity: 0.9; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 32px; }
      .versa-slide li { margin-bottom: 8px; }
      .versa-slide blockquote { border-left: 4px solid #ffffff; padding: 16px 24px; margin: 16px 0; background: rgba(255,255,255,0.1); font-style: italic; font-size: 22px; border-radius: 0 8px 8px 0; }
      .versa-slide code { background: rgba(255,255,255,0.15); padding: 2px 8px; border-radius: 4px; font-size: 18px; }
      .versa-slide pre { background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; overflow-x: auto; margin: 16px 0; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; }
      .versa-slide strong { color: #90e0ff; }
      .versa-slide a { color: #90e0ff; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid rgba(255,255,255,0.3); margin: 24px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: rgba(0,0,0,0.15); padding: 12px; text-align: left; border-bottom: 2px solid rgba(255,255,255,0.3); font-weight: 700; }
      .versa-slide td { padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); }
      .versa-slide img { max-width: 100%; border-radius: 8px; margin: 12px 0; }
    `,
  },
  {
    name: "Gradient Pop",
    preview: { bg: "linear-gradient(135deg, #667eea, #764ba2)", text: "#ffffff", border: "#667eea" },
    css: `
      .versa-slide {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #ffffff;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 32px; }
      .versa-slide li { margin-bottom: 8px; }
      .versa-slide blockquote { border-left: 4px solid #ffd700; padding: 16px 24px; margin: 16px 0; background: rgba(255,255,255,0.1); font-style: italic; font-size: 22px; border-radius: 0 8px 8px 0; }
      .versa-slide code { background: rgba(255,255,255,0.15); padding: 2px 8px; border-radius: 4px; font-size: 18px; }
      .versa-slide pre { background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; overflow-x: auto; margin: 16px 0; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; }
      .versa-slide strong { color: #ffd700; }
      .versa-slide a { color: #ffd700; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid rgba(255,255,255,0.3); margin: 24px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: rgba(0,0,0,0.15); padding: 12px; text-align: left; border-bottom: 2px solid rgba(255,255,255,0.3); font-weight: 700; }
      .versa-slide td { padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); }
      .versa-slide img { max-width: 100%; border-radius: 8px; margin: 12px 0; }
    `,
  },
  {
    name: "Soft Pastel",
    preview: { bg: "#fef6e4", text: "#4a3728", border: "#e8d5b7" },
    css: `
      .versa-slide {
        background: #fef6e4;
        color: #4a3728;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #2d1f14; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #3a2a1c; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #4a3728; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 32px; }
      .versa-slide li { margin-bottom: 8px; }
      .versa-slide blockquote { border-left: 4px solid #f582ae; padding: 16px 24px; margin: 16px 0; background: #fff3e0; font-style: italic; font-size: 22px; border-radius: 0 8px 8px 0; }
      .versa-slide code { background: #f0e6d2; padding: 2px 8px; border-radius: 4px; font-size: 18px; color: #8a5d3b; }
      .versa-slide pre { background: #f5ead6; padding: 20px; border-radius: 8px; overflow-x: auto; margin: 16px 0; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; }
      .versa-slide strong { color: #f582ae; }
      .versa-slide a { color: #f582ae; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid #e8d5b7; margin: 24px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #f5ead6; padding: 12px; text-align: left; border-bottom: 2px solid #e0cfb8; font-weight: 700; color: #8a5d3b; }
      .versa-slide td { padding: 12px; border-bottom: 1px solid #edddc8; }
      .versa-slide img { max-width: 100%; border-radius: 8px; margin: 12px 0; }
    `,
  },
  {
    name: "Bold Statement",
    preview: { bg: "#1a1a2e", text: "#e94560", border: "#16213e" },
    css: `
      .versa-slide {
        background: #1a1a2e;
        color: #eaeaea;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 900; margin-bottom: 24px; color: #e94560; text-transform: uppercase; letter-spacing: 2px; }
      .versa-slide h2 { font-size: 36px; font-weight: 800; margin-bottom: 20px; color: #e94560; }
      .versa-slide h3 { font-size: 28px; font-weight: 700; margin-bottom: 16px; color: #ff6b81; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 32px; }
      .versa-slide li { margin-bottom: 8px; }
      .versa-slide blockquote { border-left: 4px solid #e94560; padding: 16px 24px; margin: 16px 0; background: #16213e; font-style: italic; font-size: 22px; border-radius: 0 8px 8px 0; }
      .versa-slide code { background: #16213e; color: #e94560; padding: 2px 8px; border-radius: 4px; font-size: 18px; }
      .versa-slide pre { background: #16213e; padding: 20px; border-radius: 8px; overflow-x: auto; margin: 16px 0; border: 1px solid #0f3460; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; }
      .versa-slide strong { color: #e94560; }
      .versa-slide a { color: #e94560; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid #0f3460; margin: 24px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #16213e; padding: 12px; text-align: left; border-bottom: 2px solid #0f3460; font-weight: 700; color: #e94560; }
      .versa-slide td { padding: 12px; border-bottom: 1px solid #16213e; }
      .versa-slide img { max-width: 100%; border-radius: 8px; margin: 12px 0; }
    `,
  },
  {
    name: "Forest Green",
    preview: { bg: "#1b3a2d", text: "#d4edda", border: "#2d5a3f" },
    css: `
      .versa-slide {
        background: linear-gradient(135deg, #1b3a2d, #2d5a3f);
        color: #d4edda;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #7ddf90; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #7ddf90; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #a0e8af; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 32px; }
      .versa-slide li { margin-bottom: 8px; }
      .versa-slide blockquote { border-left: 4px solid #7ddf90; padding: 16px 24px; margin: 16px 0; background: rgba(125,223,144,0.1); font-style: italic; font-size: 22px; border-radius: 0 8px 8px 0; }
      .versa-slide code { background: rgba(125,223,144,0.15); color: #7ddf90; padding: 2px 8px; border-radius: 4px; font-size: 18px; }
      .versa-slide pre { background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; overflow-x: auto; margin: 16px 0; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; }
      .versa-slide strong { color: #7ddf90; }
      .versa-slide a { color: #7ddf90; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid rgba(125,223,144,0.3); margin: 24px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: rgba(0,0,0,0.15); padding: 12px; text-align: left; border-bottom: 2px solid rgba(125,223,144,0.3); font-weight: 700; color: #7ddf90; }
      .versa-slide td { padding: 12px; border-bottom: 1px solid rgba(125,223,144,0.1); }
      .versa-slide img { max-width: 100%; border-radius: 8px; margin: 12px 0; }
    `,
  },
  {
    name: "Sunset Orange",
    preview: { bg: "linear-gradient(135deg, #ff6b35, #f7931e)", text: "#ffffff", border: "#ff6b35" },
    css: `
      .versa-slide {
        background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
        color: #ffffff;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 32px; }
      .versa-slide li { margin-bottom: 8px; }
      .versa-slide blockquote { border-left: 4px solid #fff3cd; padding: 16px 24px; margin: 16px 0; background: rgba(255,255,255,0.15); font-style: italic; font-size: 22px; border-radius: 0 8px 8px 0; }
      .versa-slide code { background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 4px; font-size: 18px; }
      .versa-slide pre { background: rgba(0,0,0,0.15); padding: 20px; border-radius: 8px; overflow-x: auto; margin: 16px 0; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; }
      .versa-slide strong { color: #fff3cd; }
      .versa-slide a { color: #fff3cd; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid rgba(255,255,255,0.3); margin: 24px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: rgba(0,0,0,0.1); padding: 12px; text-align: left; border-bottom: 2px solid rgba(255,255,255,0.3); font-weight: 700; }
      .versa-slide td { padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); }
      .versa-slide img { max-width: 100%; border-radius: 8px; margin: 12px 0; }
    `,
  },
];

/**
 * Get the CSS string for a theme by name.
 * @param {string} name — Theme name
 * @returns {string} CSS rules
 */
export function getCarouselThemeCSS(name) {
  const theme = CAROUSEL_THEMES.find((t) => t.name === name);
  return theme?.css || CAROUSEL_THEMES[0].css;
}

/**
 * Get the preview metadata for a theme.
 * @param {string} name — Theme name
 * @returns {{ bg: string, text: string, border?: string }}
 */
export function getCarouselThemePreview(name) {
  const theme = CAROUSEL_THEMES.find((t) => t.name === name);
  return theme?.preview || CAROUSEL_THEMES[0].preview;
}

export default CAROUSEL_THEMES;
