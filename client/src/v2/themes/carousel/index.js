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
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25B8"; position: absolute; left: 0; font-weight: bold; font-size: 1.2em; line-height: 1.4; color: #0077B5; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #0077B5; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 5px solid #0077B5; padding: 20px 24px; margin: 20px 0; background: #f0f7fb; font-style: italic; font-size: 22px; border-radius: 0 12px 12px 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; box-shadow: 0 2px 8px rgba(0,119,181,0.08); }
      .versa-slide blockquote p { margin: 0; }
      .versa-slide code { background: #eef3f8; padding: 3px 8px; border-radius: 6px; font-size: 18px; color: #0077B5; border: 1px solid #d6e4ee; }
      .versa-slide pre { background: #f5f8fa; padding: 20px; border-radius: 12px; overflow-x: auto; margin: 16px 0; border: 1px solid #e0e8ee; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; border: none; color: #1a1a1a; }
      .versa-slide strong { color: #0077B5; font-weight: 700; }
      .versa-slide a { color: #0077B5; text-decoration: underline; text-underline-offset: 3px; }
      .versa-slide hr { border: none; border-top: 2px solid #e0e8ee; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border-radius: 8px; overflow: hidden; }
      .versa-slide th { background: #0077B5; color: #fff; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #e8eef2; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 12px; margin: 12px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    `,
  },
  {
    name: "Dark Minimal",
    preview: { bg: "#0f0f0f", text: "#00d4aa", border: "#333" },
    css: `
      .versa-slide {
        background: #0f0f0f;
        color: #e0e0e0;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #ffffff; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #f0f0f0; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #00d4aa; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\2192"; position: absolute; left: 0; font-weight: bold; font-size: 1em; line-height: 1.6; color: #00d4aa; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 600; color: #00d4aa; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #00d4aa; padding: 20px 24px; margin: 20px 0; background: #1a2e28; font-style: italic; font-size: 22px; border-radius: 0 10px 10px 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; box-shadow: 0 0 20px rgba(0,212,170,0.06); }
      .versa-slide blockquote p { margin: 0; color: #b0f0e0; }
      .versa-slide code { background: #1a2e28; color: #00d4aa; padding: 3px 8px; border-radius: 6px; font-size: 18px; border: 1px solid #1f3d34; }
      .versa-slide pre { background: #0a0a0a; padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border: 1px solid #1a2e28; border-left: 4px solid #00d4aa; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; border: none; color: #e0e0e0; }
      .versa-slide strong { color: #00d4aa; font-weight: 700; }
      .versa-slide a { color: #00d4aa; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #222; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #1a2e28; padding: 12px 16px; text-align: left; border-bottom: 2px solid #00d4aa; font-weight: 700; color: #00d4aa; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #1a1a1a; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; box-shadow: 0 0 15px rgba(0,212,170,0.1); }
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
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; text-shadow: 0 2px 4px rgba(0,0,0,0.15); }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #90e0ff; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25C6"; position: absolute; left: 0; font-size: 0.7em; line-height: 2.2; color: #90e0ff; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 600; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: none; padding: 24px 28px; margin: 20px 0; background: #ffffff; color: #005f8f; font-style: italic; font-size: 22px; border-radius: 12px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
      .versa-slide blockquote p { margin: 0; color: #005f8f; }
      .versa-slide code { background: rgba(255,255,255,0.2); padding: 3px 8px; border-radius: 6px; font-size: 18px; backdrop-filter: blur(4px); }
      .versa-slide pre { background: rgba(0,0,0,0.25); padding: 20px; border-radius: 12px; overflow-x: auto; margin: 16px 0; border: 1px solid rgba(255,255,255,0.15); }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; }
      .versa-slide strong { color: #90e0ff; font-weight: 700; }
      .versa-slide a { color: #90e0ff; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid rgba(255,255,255,0.25); margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: rgba(255,255,255,0.15); padding: 12px 16px; text-align: left; border-bottom: 2px solid rgba(255,255,255,0.3); font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.7; }
      .versa-slide img { max-width: 100%; border-radius: 12px; margin: 12px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }
    `,
  },
  {
    name: "Gradient Pop",
    preview: { bg: "linear-gradient(135deg, #d4b8f0, #f0c4d8)", text: "#2d2d2d", border: "#c8a8e0" },
    css: `
      .versa-slide {
        background: linear-gradient(135deg, #d4b8f0 0%, #e8c8e0 30%, #f0d0d8 60%, #f5e0f0 100%);
        color: #2d2d2d;
        padding: 64px;
        line-height: 1.7;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .versa-slide h1 { font-size: 44px; font-weight: 800; margin-bottom: 20px; color: #1a1a1a; text-align: center; }
      .versa-slide h2 { font-size: 34px; font-weight: 700; margin-bottom: 18px; color: #2d2d2d; text-align: center; }
      .versa-slide h3 { font-size: 24px; font-weight: 600; margin-bottom: 14px; color: #6b3fa0; text-transform: uppercase; letter-spacing: 2px; font-size: 16px; text-align: center; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; text-align: center; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25CF"; position: absolute; left: 0; font-size: 0.6em; line-height: 2.5; color: #6b3fa0; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 600; color: #6b3fa0; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: 1.5px solid #c0a0d0; padding: 24px 28px; margin: 20px auto; background: #ffffff; font-style: italic; font-size: 22px; border-radius: 14px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; box-shadow: 0 4px 16px rgba(100,60,160,0.08); max-width: 90%; text-align: center; }
      .versa-slide blockquote p { margin: 0; color: #4a3060; }
      .versa-slide code { background: #ffffff; color: #6b3fa0; padding: 3px 10px; border-radius: 8px; font-size: 18px; border: 1px solid #d0b8e8; }
      .versa-slide pre { background: #ffffff; padding: 22px; border-radius: 14px; overflow-x: auto; margin: 16px 0; border: 1.5px solid #c0a0d0; box-shadow: 0 2px 12px rgba(100,60,160,0.06); }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #2d2d2d; border: none; }
      .versa-slide strong { color: #6b3fa0; font-weight: 700; }
      .versa-slide a { color: #6b3fa0; text-decoration: underline; text-underline-offset: 3px; }
      .versa-slide hr { border: none; border-top: 1.5px solid #c0a0d0; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border: 1.5px solid #c0a0d0; border-radius: 14px; overflow: hidden; }
      .versa-slide th { background: #f0e4f8; padding: 12px 16px; text-align: left; font-weight: 700; color: #6b3fa0; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #e8d8f0; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 14px; margin: 12px 0; border: 1.5px solid #c0a0d0; box-shadow: 0 4px 16px rgba(100,60,160,0.1); }
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
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #f582ae; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\2665"; position: absolute; left: 0; font-size: 0.8em; line-height: 1.9; color: #f582ae; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 600; color: #f582ae; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: none; padding: 22px 26px; margin: 20px 0; background: #ffffff; font-style: italic; font-size: 22px; border-radius: 16px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; border-left: 5px solid #f582ae; box-shadow: 0 3px 12px rgba(245,130,174,0.12); }
      .versa-slide blockquote p { margin: 0; color: #6b4a5e; }
      .versa-slide code { background: #fff; padding: 3px 8px; border-radius: 8px; font-size: 18px; color: #f582ae; border: 1px solid #f0ddd3; }
      .versa-slide pre { background: #fff; padding: 20px; border-radius: 14px; overflow-x: auto; margin: 16px 0; border: 1px solid #f0ddd3; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; border: none; color: #4a3728; }
      .versa-slide strong { color: #f582ae; font-weight: 700; }
      .versa-slide a { color: #f582ae; text-decoration: underline; text-underline-offset: 3px; }
      .versa-slide hr { border: none; border-top: 2px dashed #e8d5b7; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border-radius: 12px; overflow: hidden; }
      .versa-slide th { background: #f582ae; color: #fff; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #f0ddd3; background: #fff; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 16px; margin: 12px 0; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
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
      .versa-slide h3 { font-size: 28px; font-weight: 700; margin-bottom: 16px; color: #ff8a9e; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 10px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "//"; position: absolute; left: 0; font-weight: 900; font-size: 0.9em; line-height: 1.6; color: #e94560; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol); position: absolute; left: 0; font-weight: 900; color: #1a1a2e; background: #e94560; width: 22px; height: 22px; border-radius: 50%; font-size: 13px; text-align: center; line-height: 22px; top: 4px; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: 2px solid #e94560; padding: 22px 26px; margin: 20px 0; background: #16213e; font-style: italic; font-size: 22px; border-radius: 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; border-left: 6px solid #e94560; }
      .versa-slide blockquote p { margin: 0; color: #ff8a9e; }
      .versa-slide code { background: #e94560; color: #fff; padding: 3px 8px; border-radius: 4px; font-size: 18px; }
      .versa-slide pre { background: #0f0f1e; padding: 20px; border-radius: 0; overflow-x: auto; margin: 16px 0; border: 2px solid #e94560; border-left: 6px solid #e94560; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #eaeaea; }
      .versa-slide strong { color: #e94560; font-weight: 800; }
      .versa-slide a { color: #e94560; text-decoration: underline; text-decoration-thickness: 2px; }
      .versa-slide hr { border: none; border-top: 3px solid #e94560; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #e94560; color: #fff; padding: 12px 16px; text-align: left; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 16px; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #16213e; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 3px; color: #e94560; opacity: 0.7; }
      .versa-slide img { max-width: 100%; border-radius: 0; margin: 12px 0; border: 2px solid #e94560; }
    `,
  },
  {
    name: "Forest Green",
    preview: { bg: "#1b3a2d", text: "#d4edda", border: "#2d5a3f" },
    css: `
      .versa-slide {
        background: linear-gradient(160deg, #1b3a2d, #2d5a3f);
        color: #d4edda;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #7ddf90; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #7ddf90; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #a0e8af; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25CF"; position: absolute; left: 0; font-size: 0.7em; line-height: 2.2; color: #7ddf90; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 600; color: #7ddf90; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: none; padding: 22px 26px; margin: 20px 0; background: rgba(125,223,144,0.12); font-style: italic; font-size: 22px; border-radius: 14px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; border-left: 5px solid #7ddf90; box-shadow: 0 0 20px rgba(125,223,144,0.06); }
      .versa-slide blockquote p { margin: 0; color: #b0f0bb; }
      .versa-slide code { background: rgba(125,223,144,0.15); color: #7ddf90; padding: 3px 8px; border-radius: 6px; font-size: 18px; border: 1px solid rgba(125,223,144,0.2); }
      .versa-slide pre { background: rgba(0,0,0,0.25); padding: 20px; border-radius: 12px; overflow-x: auto; margin: 16px 0; border-left: 4px solid #7ddf90; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; border: none; color: #d4edda; }
      .versa-slide strong { color: #7ddf90; font-weight: 700; }
      .versa-slide a { color: #7ddf90; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid rgba(125,223,144,0.25); margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: rgba(125,223,144,0.18); padding: 12px 16px; text-align: left; border-bottom: 2px solid #7ddf90; font-weight: 700; color: #7ddf90; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid rgba(125,223,144,0.1); }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 12px; margin: 12px 0; box-shadow: 0 0 20px rgba(125,223,144,0.1); }
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
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; text-shadow: 0 2px 4px rgba(0,0,0,0.15); }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #fff3cd; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25C7"; position: absolute; left: 0; font-size: 1em; line-height: 1.6; color: #fff3cd; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 600; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: none; padding: 24px 28px; margin: 20px 0; background: #ffffff; color: #c24b10; font-style: italic; font-size: 22px; border-radius: 14px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; box-shadow: 0 4px 16px rgba(0,0,0,0.12); }
      .versa-slide blockquote p { margin: 0; color: #c24b10; }
      .versa-slide code { background: rgba(255,255,255,0.25); padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { background: rgba(0,0,0,0.18); padding: 20px; border-radius: 12px; overflow-x: auto; margin: 16px 0; border-top: 3px solid #fff3cd; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; }
      .versa-slide strong { color: #fff3cd; font-weight: 700; }
      .versa-slide a { color: #fff3cd; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid rgba(255,255,255,0.3); margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border-radius: 8px; overflow: hidden; }
      .versa-slide th { background: rgba(0,0,0,0.15); padding: 12px 16px; text-align: left; font-weight: 700; color: #fff3cd; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.7; }
      .versa-slide img { max-width: 100%; border-radius: 12px; margin: 12px 0; box-shadow: 0 6px 20px rgba(0,0,0,0.2); }
    `,
  },
  {
    name: "Ember Dark",
    preview: { bg: "#0d0d0d", text: "#e8872a", border: "#2a2a2a" },
    css: `
      .versa-slide {
        background: #0d0d0d;
        background-image: linear-gradient(rgba(232,135,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(232,135,42,0.06) 1px, transparent 1px);
        background-size: 36px 36px;
        color: #f0ece2;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #ffffff; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #f5f0e8; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #e8872a; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25AA"; position: absolute; left: 2px; font-weight: bold; font-size: 1.2em; line-height: 1.4; color: #e8872a; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #e8872a; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 5px solid #e8872a; padding: 22px 26px; margin: 20px 0; background: #1a1610; font-style: italic; font-size: 22px; border-radius: 0 10px 10px 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; box-shadow: 0 0 24px rgba(232,135,42,0.06); }
      .versa-slide blockquote p { margin: 0; color: #f0c080; }
      .versa-slide code { background: #1e1a14; color: #e8872a; padding: 3px 8px; border-radius: 6px; font-size: 18px; border: 1px solid #2a2218; }
      .versa-slide pre { background: #0a0806; padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border: 1px solid #2a2218; border-left: 4px solid #e8872a; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; border: none; color: #f0ece2; }
      .versa-slide strong { color: #e8872a; font-weight: 700; }
      .versa-slide a { color: #e8872a; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #2a2218; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #1a1610; padding: 12px 16px; text-align: left; border-bottom: 2px solid #e8872a; font-weight: 700; color: #e8872a; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #1e1a14; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; box-shadow: 0 0 20px rgba(232,135,42,0.08); }
    `,
  },
  {
    name: "Vibrant Red",
    preview: { bg: "#e53935", text: "#ffffff", border: "#c62828" },
    css: `
      .versa-slide {
        background: #e53935;
        color: #ffffff;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 900; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 2px 6px rgba(0,0,0,0.2); }
      .versa-slide h2 { font-size: 36px; font-weight: 800; margin-bottom: 20px; }
      .versa-slide h3 { font-size: 28px; font-weight: 700; margin-bottom: 16px; color: #fff176; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\2B27"; position: absolute; left: 0; font-size: 1em; line-height: 1.6; color: #fff176; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol); position: absolute; left: 0; font-weight: 900; color: #e53935; background: #fff176; width: 22px; height: 22px; border-radius: 4px; font-size: 13px; text-align: center; line-height: 22px; top: 4px; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: none; padding: 24px 28px; margin: 20px 0; background: #ffffff; color: #c62828; font-style: italic; font-size: 22px; border-radius: 12px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; box-shadow: 4px 4px 0 0 rgba(0,0,0,0.2); }
      .versa-slide blockquote p { margin: 0; color: #c62828; }
      .versa-slide code { background: rgba(0,0,0,0.2); padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { background: rgba(0,0,0,0.22); padding: 20px; border-radius: 12px; overflow-x: auto; margin: 16px 0; border-bottom: 4px solid #fff176; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; }
      .versa-slide strong { color: #fff176; font-weight: 800; }
      .versa-slide a { color: #fff176; text-decoration: underline; text-decoration-thickness: 2px; }
      .versa-slide hr { border: none; border-top: 3px solid rgba(255,255,255,0.3); margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border-radius: 8px; overflow: hidden; }
      .versa-slide th { background: rgba(0,0,0,0.2); padding: 12px 16px; text-align: left; font-weight: 700; color: #fff176; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.15); }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.7; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; box-shadow: 6px 6px 0 0 rgba(0,0,0,0.2); }
    `,
  },
  {
    name: "Corporate Duo",
    preview: { bg: "#2d3561", text: "#c75b7a", border: "#1e244a" },
    css: `
      .versa-slide {
        background: #2d3561;
        color: #e8e6f0;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #ffffff; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #c75b7a; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #e09aae; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25B8"; position: absolute; left: 0; font-weight: bold; font-size: 1.2em; line-height: 1.4; color: #c75b7a; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #c75b7a; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: none; padding: 24px 28px; margin: 20px 0; background: #c75b7a; color: #ffffff; font-style: italic; font-size: 22px; border-radius: 12px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; box-shadow: 0 4px 16px rgba(199,91,122,0.25); }
      .versa-slide blockquote p { margin: 0; color: #ffffff; }
      .versa-slide code { background: rgba(199,91,122,0.18); color: #e09aae; padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { background: #1e244a; padding: 20px; border-radius: 12px; overflow-x: auto; margin: 16px 0; border: 1px solid rgba(199,91,122,0.3); border-left: 4px solid #c75b7a; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #e8e6f0; }
      .versa-slide strong { color: #c75b7a; font-weight: 700; }
      .versa-slide a { color: #e09aae; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid rgba(199,91,122,0.35); margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border-radius: 8px; overflow: hidden; }
      .versa-slide th { background: #c75b7a; color: #fff; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid rgba(199,91,122,0.2); }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 12px; margin: 12px 0; box-shadow: 0 4px 16px rgba(0,0,0,0.2); }
    `,
  },
  {
    name: "Neon Lime",
    preview: { bg: "#c8e625", text: "#1a1a1a", border: "#a8c21e" },
    css: `
      .versa-slide {
        background: #c8e625;
        color: #1a1a1a;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 900; margin-bottom: 24px; color: #0a0a0a; }
      .versa-slide h2 { font-size: 36px; font-weight: 800; margin-bottom: 20px; color: #1a1a1a; }
      .versa-slide h3 { font-size: 28px; font-weight: 700; margin-bottom: 16px; color: #2a2a2a; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25A0"; position: absolute; left: 0; font-size: 0.7em; line-height: 2.2; color: #1a1a1a; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol); position: absolute; left: 0; font-weight: 900; color: #c8e625; background: #1a1a1a; width: 22px; height: 22px; border-radius: 4px; font-size: 13px; text-align: center; line-height: 22px; top: 4px; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: 3px solid #1a1a1a; padding: 22px 26px; margin: 20px 0; background: #ffffff; color: #1a1a1a; font-style: italic; font-size: 22px; border-radius: 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; box-shadow: 5px 5px 0 0 #1a1a1a; }
      .versa-slide blockquote p { margin: 0; color: #1a1a1a; }
      .versa-slide code { background: #1a1a1a; color: #c8e625; padding: 3px 8px; border-radius: 4px; font-size: 18px; }
      .versa-slide pre { background: #1a1a1a; color: #c8e625; padding: 20px; border-radius: 0; overflow-x: auto; margin: 16px 0; box-shadow: 5px 5px 0 0 rgba(0,0,0,0.3); }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #c8e625; }
      .versa-slide strong { background: #1a1a1a; color: #c8e625; padding: 2px 8px; border-radius: 3px; font-weight: 700; }
      .versa-slide a { color: #1a1a1a; text-decoration: underline; text-decoration-thickness: 3px; text-underline-offset: 3px; }
      .versa-slide hr { border: none; border-top: 3px solid #1a1a1a; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border: 3px solid #1a1a1a; }
      .versa-slide th { background: #1a1a1a; color: #c8e625; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border: 2px solid #1a1a1a; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 3px; opacity: 0.5; }
      .versa-slide img { max-width: 100%; border-radius: 0; margin: 12px 0; border: 3px solid #1a1a1a; box-shadow: 5px 5px 0 0 #1a1a1a; }
    `,
  },
  {
    name: "Electric Yellow",
    preview: { bg: "#ffd600", text: "#1a1a1a", border: "#e6c100" },
    css: `
      .versa-slide {
        background: #ffd600;
        background-image: linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
        background-size: 32px 32px;
        color: #1a1a1a;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 900; margin-bottom: 24px; color: #0a0a0a; position: relative; }
      .versa-slide h1::after { content: ""; display: block; width: 60px; height: 6px; background: #1a1a1a; margin-top: 12px; border-radius: 3px; }
      .versa-slide h2 { font-size: 36px; font-weight: 800; margin-bottom: 20px; color: #1a1a1a; }
      .versa-slide h3 { font-size: 28px; font-weight: 700; margin-bottom: 16px; color: #333; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25A0"; position: absolute; left: 0; font-size: 0.7em; line-height: 2.2; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol); position: absolute; left: 0; font-weight: 900; color: #ffd600; background: #1a1a1a; width: 22px; height: 22px; border-radius: 50%; font-size: 13px; text-align: center; line-height: 22px; top: 4px; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: 3px solid #1a1a1a; padding: 22px 26px; margin: 20px 0; background: #ffffff; font-style: italic; font-size: 22px; border-radius: 12px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; box-shadow: 4px 4px 0 0 #1a1a1a; }
      .versa-slide blockquote p { margin: 0; color: #333; }
      .versa-slide code { background: #1a1a1a; color: #ffd600; padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { background: #1a1a1a; color: #ffd600; padding: 20px; border-radius: 12px; overflow-x: auto; margin: 16px 0; box-shadow: 4px 4px 0 0 rgba(0,0,0,0.25); }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #ffd600; }
      .versa-slide strong { background: #1a1a1a; color: #ffd600; padding: 2px 8px; border-radius: 4px; font-weight: 700; }
      .versa-slide a { color: #1a1a1a; text-decoration: underline; text-decoration-thickness: 3px; text-underline-offset: 3px; font-weight: 700; }
      .versa-slide hr { border: none; border-top: 4px solid #1a1a1a; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border: 3px solid #1a1a1a; border-radius: 12px; overflow: hidden; }
      .versa-slide th { background: #1a1a1a; color: #ffd600; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border: 2px solid rgba(0,0,0,0.1); }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 3px; opacity: 0.5; }
      .versa-slide img { max-width: 100%; border-radius: 12px; margin: 12px 0; border: 3px solid #1a1a1a; box-shadow: 4px 4px 0 0 #1a1a1a; }
    `,
  },
  {
    name: "Lavender Mist",
    preview: { bg: "#ede4f5", text: "#6b3fa0", border: "#d4c4e3" },
    css: `
      .versa-slide {
        background: #ede4f5;
        color: #2d2d2d;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #6b3fa0; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #6b3fa0; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #8a5dc0; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25C8"; position: absolute; left: 0; font-size: 0.9em; line-height: 1.7; color: #6b3fa0; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 600; color: #6b3fa0; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: none; padding: 22px 26px; margin: 20px 0; background: #ffffff; font-style: italic; font-size: 22px; border-radius: 14px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; border-left: 5px solid #6b3fa0; box-shadow: 0 3px 12px rgba(107,63,160,0.1); }
      .versa-slide blockquote p { margin: 0; color: #5a3080; }
      .versa-slide code { background: #ffffff; color: #6b3fa0; padding: 3px 8px; border-radius: 8px; font-size: 18px; border: 1px solid #d4c4e3; }
      .versa-slide pre { background: #ffffff; padding: 20px; border-radius: 14px; overflow-x: auto; margin: 16px 0; border: 1px solid #d4c4e3; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; border: none; color: #2d2d2d; }
      .versa-slide strong { color: #6b3fa0; font-weight: 700; }
      .versa-slide a { color: #6b3fa0; text-decoration: underline; text-underline-offset: 3px; }
      .versa-slide hr { border: none; border-top: 2px solid #d4c4e3; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border-radius: 12px; overflow: hidden; }
      .versa-slide th { background: #6b3fa0; color: #fff; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #d4c4e3; background: #fff; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 14px; margin: 12px 0; box-shadow: 0 4px 16px rgba(107,63,160,0.1); }
    `,
  },
  {
    name: "Black Neu",
    preview: { bg: "#242424", text: "#ffffff", border: "#000000" },
    css: `
      .versa-slide { background: #242424; color: #ffffff; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #242424; background: #ffffff; padding: 8px 16px; border: 2px solid #000000; box-shadow: 5px 5px #000000; display: inline-block; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #e0e0e0; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25B8"; position: absolute; left: 0; font-size: 1.2em; line-height: 1.4; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: 4px solid #000000; padding: 22px 26px; margin: 20px 0; background: #ffffff; color: #242424; font-style: italic; font-size: 22px; box-shadow: 5px 5px #000000; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #242424; }
      .versa-slide code { background: #343434; padding: 3px 8px; border-radius: 4px; font-size: 18px; }
      .versa-slide pre { background: #ffffff; color: #242424; padding: 20px; overflow-x: auto; margin: 16px 0; border: 4px solid #000000; box-shadow: 5px 5px #000000; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #242424; }
      .versa-slide strong { font-weight: 800; }
      .versa-slide a { color: #242424; background: #ffffff; border: 2px solid #000000; box-shadow: 3px 3px #000000; padding: 2px 8px; text-decoration: none; font-weight: 700; }
      .versa-slide hr { border: none; border-top: 2px solid #444444; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border: 2px solid #000000; }
      .versa-slide th { background: #ffffff; color: #242424; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #333333; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; margin: 12px 0; border: 2px solid #000000; box-shadow: 5px 5px #000000; }
    `,
  },
  {
    name: "Vega",
    preview: { bg: "#131313", text: "#e5e7eb", border: "#5200ff" },
    css: `
      .versa-slide { background: #131313; color: #e5e7eb; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #ffffff; position: relative; display: inline-block; z-index: 1; }
      .versa-slide h1::after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 40%; background-color: #5200ff; z-index: -1; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #f0f0f0; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #3cffd0; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\2192"; position: absolute; left: 0; font-size: 1em; line-height: 1.6; color: #3cffd0; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #3cffd0; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #3cffd0; padding: 22px 26px; margin: 20px 0; background: #1a1a2a; font-style: italic; font-size: 22px; border-radius: 0 10px 10px 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #b0f0e0; }
      .versa-slide code { background: #1e1e2e; color: #3cffd0; padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { background: #0a0a0a; padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border-left: 4px solid #5200ff; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #e5e7eb; }
      .versa-slide strong { color: #3cffd0; font-weight: 700; }
      .versa-slide a { color: #3cffd0; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #333333; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #1e1e2e; padding: 12px 16px; text-align: left; font-weight: 700; color: #3cffd0; border-bottom: 2px solid #3cffd0; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #1e1e1e; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; box-shadow: 0 0 15px #3cffd0; }
    `,
  },
  {
    name: "Payne",
    preview: { bg: "#0b0b0b", text: "#e5e7eb", border: "#f30100" },
    css: `
      .versa-slide { background: #0b0b0b; color: #e5e7eb; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #ffffff; position: relative; display: inline-block; z-index: 1; }
      .versa-slide h1::after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 40%; z-index: -1; background: radial-gradient(farthest-side at -33.33% 50%,#0000 52%,#f30100 54% 57%,#0000 59%) 0 calc(112px/2), radial-gradient(farthest-side at 50% 133.33%,#0000 52%,#f30100 54% 57%,#0000 59%) calc(112px/2) 0, radial-gradient(farthest-side at 133.33% 50%,#0000 52%,#f30100 54% 57%,#0000 59%), radial-gradient(farthest-side at 50% -33.33%,#0000 52%,#f30100 54% 57%,#0000 59%), #000000; background-size: calc(112px/4.667) 112px, 112px calc(112px/4.667); }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #f0f0f0; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #f30100; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25B8"; position: absolute; left: 0; font-size: 1.2em; line-height: 1.4; color: #f30100; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #f30100; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #f30100; padding: 22px 26px; margin: 20px 0; background: #141414; font-style: italic; font-size: 22px; border-radius: 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #cc9999; }
      .versa-slide code { background: #1a0000; color: #f30100; padding: 3px 8px; border-radius: 4px; font-size: 18px; }
      .versa-slide pre { background: #000000; padding: 20px; overflow-x: auto; margin: 16px 0; border-bottom: 4px solid #f30100; border-radius: 0; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #e5e7eb; }
      .versa-slide strong { color: #f30100; font-weight: 700; }
      .versa-slide a { color: #f30100; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid #f30100; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border: 1px solid #f30100; }
      .versa-slide th { background: #1a0000; padding: 12px 16px; text-align: left; font-weight: 700; color: #f30100; border-bottom: 2px solid #f30100; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #1a1a1a; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; margin: 12px 0; box-shadow: 10px 10px 0 2px #f30100; }
    `,
  },
  {
    name: "Mellow",
    preview: { bg: "#2d2c31", text: "#d4d4d4", border: "#eda06b" },
    css: `
      .versa-slide { background: #2d2c31; color: #d4d4d4; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #eda06b; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #e0d0c0; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #eda06b; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25C6"; position: absolute; left: 0; font-size: 0.7em; line-height: 2.2; color: #eda06b; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #eda06b; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #eda06b; padding: 22px 26px; margin: 20px 0; background: #3b3a41; font-style: italic; font-size: 22px; border-radius: 0 10px 10px 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #e0c8a0; }
      .versa-slide code { background: #3b3a41; color: #eda06b; padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border-right: 4px solid #eda06b; border-left: 4px solid #eda06b; background: conic-gradient(at 10% 50%,#0000 75%,#302f35 0), conic-gradient(at 10% 50%,#0000 75%,#302f35 0) calc(1*32px) calc(3*32px), conic-gradient(at 10% 50%,#0000 75%,#302f35 0) calc(2*32px) calc(1*32px), conic-gradient(at 10% 50%,#0000 75%,#302f35 0) calc(3*32px) calc(4*32px), conic-gradient(at 10% 50%,#0000 75%,#302f35 0) calc(4*32px) calc(2*32px), conic-gradient(at 50% 10%,#0000 75%,#302f35 0) 0 calc(4*32px), conic-gradient(at 50% 10%,#0000 75%,#302f35 0) calc(1*32px) calc(2*32px), conic-gradient(at 50% 10%,#0000 75%,#302f35 0) calc(2*32px) 0, conic-gradient(at 50% 10%,#0000 75%,#302f35 0) calc(3*32px) calc(3*32px), conic-gradient(at 50% 10%,#0000 75%,#302f35 0) calc(4*32px) calc(1*32px), #2d2c31; background-size: 160px 160px; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #d4d4d4; }
      .versa-slide strong { color: #eda06b; font-weight: 700; }
      .versa-slide a { color: #eda06b; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #444; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #3b3a41; padding: 12px 16px; text-align: left; font-weight: 700; color: #eda06b; border-bottom: 2px solid #eda06b; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #3b3a41; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; box-shadow: 0 10px 0 0 #eda06b; }
    `,
  },
  {
    name: "Bubblegum",
    preview: { bg: "#14151a", text: "#f9f1e1", border: "#f472b6" },
    css: `
      .versa-slide { background: #14151a; color: #f9f1e1; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #f9f1e1; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #f0e8d8; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #f472b6; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\2665"; position: absolute; left: 0; font-size: 0.8em; line-height: 1.9; color: #f472b6; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #f472b6; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #f472b6; padding: 22px 26px; margin: 20px 0; background: #282a36; font-style: italic; font-size: 22px; border-radius: 0 10px 10px 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #f0c8d8; }
      .versa-slide code { background: #282a36; color: #d1d5db; padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border-left: 4px solid #f472b6; background-image: radial-gradient(rgba(244,114,182,0.16) 2px, transparent 2px); background-size: 32px 32px; background-color: #282a36; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #f9f1e1; }
      .versa-slide strong { color: #f472b6; font-weight: 700; }
      .versa-slide a { color: #f472b6; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #333; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #282a36; padding: 12px 16px; text-align: left; font-weight: 700; color: #f472b6; border-bottom: 2px solid #f472b6; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #282a36; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; margin: 12px 0; box-shadow: 10px 10px 0 0 #000000; }
    `,
  },
  {
    name: "Cafe Wall",
    preview: { bg: "#e7e7e7", text: "#2d2b2a", border: "#c68f43" },
    css: `
      .versa-slide { background: #e7e7e7; color: #2d2b2a; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #c68f43; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #70b0a4; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #70b0a4; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25CF"; position: absolute; left: 0; font-size: 0.7em; line-height: 2.2; color: #f07b4c; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #c68f43; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #f07b4c; padding: 22px 26px; margin: 20px 0; background: #ffffff; font-style: italic; font-size: 22px; border-radius: 10px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #5a4a3a; }
      .versa-slide code { background: #ffffff; color: #f07b4c; padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border-left: 4px solid #f07b4c; background-image: radial-gradient(#cbc2b5 1px, transparent 1px), radial-gradient(#cbc2b5 1px, transparent 1px); background-size: 16px 16px; background-position: 0 0, 8px 8px; background-color: #e7e7e7; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #2d2b2a; }
      .versa-slide strong { color: #c68f43; font-weight: 700; }
      .versa-slide a { color: #f07b4c; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid #cbc2b5; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border-radius: 10px; overflow: hidden; }
      .versa-slide th { background: #c68f43; color: #ffffff; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #d0d0d0; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; box-shadow: 0 10px 0 0 #c68f43; }
    `,
  },
  {
    name: "Lime Bar",
    preview: { bg: "#141414", text: "#e5e7eb", border: "#9ef500" },
    css: `
      .versa-slide { background: #141414; color: #e5e7eb; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #ffffff; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #f0f0f0; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #9ef500; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25B8"; position: absolute; left: 0; font-size: 1.2em; line-height: 1.4; color: #9ef500; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #9ef500; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #9ef500; padding: 22px 26px; margin: 20px 0; background: #1a1a1a; font-style: italic; font-size: 22px; border-radius: 0 10px 10px 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #c0e880; }
      .versa-slide code { background: #1a1a1a; color: #9ef500; padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border-left: 4px solid #9ef500; background-image: linear-gradient(#363636 2px, transparent 2px), linear-gradient(to right, #363636 2px, transparent 2px); background-size: 32px 32px; background-color: #101010; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #e5e7eb; }
      .versa-slide strong { color: #9ef500; font-weight: 700; }
      .versa-slide a { color: #9ef500; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #333; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #9ef500; color: #327300; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #1e1e1e; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; box-shadow: 0 10px 0 0 #dbff9c; }
    `,
  },
  {
    name: "Honor",
    preview: { bg: "#f7f5f0", text: "#20282e", border: "#90baad" },
    css: `
      .versa-slide { background: #f7f5f0; color: #20282e; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #20282e; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #20282e; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #90baad; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25CF"; position: absolute; left: 0; font-size: 0.7em; line-height: 2.2; color: #90baad; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #20282e; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #90baad; padding: 22px 26px; margin: 20px 0; background: #fffdf7; font-style: italic; font-size: 22px; border-radius: 0 10px 10px 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #3a4a44; }
      .versa-slide code { background: #fffdf7; color: #20282e; padding: 3px 8px; border-radius: 6px; font-size: 18px; border: 1px solid #d8d4cc; }
      .versa-slide pre { padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; background-image: repeating-linear-gradient(to right, #3f3f3f, #3f3f3f 2px, transparent 2px, transparent); background-size: 32px 32px; background-color: #20282e; color: #e0e0e0; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #e0e0e0; border: none; }
      .versa-slide strong { color: #20282e; font-weight: 700; }
      .versa-slide a { color: #90baad; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid #d8d4cc; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #20282e; color: #f7f5f0; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #d8d4cc; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; box-shadow: 0 10px 0 0 #20282e; }
    `,
  },
  {
    name: "MoonShine",
    preview: { bg: "#151226", text: "#7b71ff", border: "#201e43" },
    css: `
      .versa-slide { background: #151226; color: #7b71ff; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #7b71ff; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #7b71ff; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #9990ff; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25C6"; position: absolute; left: 0; font-size: 0.7em; line-height: 2.2; color: #7b71ff; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #7b71ff; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #7b71ff; padding: 22px 26px; margin: 20px 0; background: #201e43; font-style: italic; font-size: 22px; border-radius: 0 10px 10px 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #9990ff; }
      .versa-slide code { background: #7b71ff; color: #151226; padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border-left: 4px solid #7b71ff; background: radial-gradient(32px at 100% 0,#151226 6.25%,#201e43 6.3% 18.75%,#151226 18.8% 31.25%,#201e43 31.3% 43.75%,#151226 43.8% 56.25%,#201e43 56.3% 68.75%,#0000 0), radial-gradient(32px at 0 0,#151226 6.25%,#201e43 6.3% 18.75%,#151226 18.8% 31.25%,#201e43 31.3% 43.75%,#151226 43.8% 56.25%,#201e43 56.3% 68.75%,#0000 0), radial-gradient(32px at 0 100%,#151226 6.25%,#201e43 6.3% 18.75%,#151226 18.8% 31.25%,#201e43 31.3% 43.75%,#151226 43.8% 56.25%,#201e43 56.3% 68.75%,#0000 0), radial-gradient(32px at 100% 100%,#151226 6.25%,#201e43 6.3% 18.75%,#151226 18.8% 31.25%,#201e43 31.3% 43.75%,#151226 43.8% 56.25%,#201e43 56.3% 68.75%,#0000 0) #151226; background-size: 32px 32px; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #7b71ff; }
      .versa-slide strong { color: #9990ff; font-weight: 700; }
      .versa-slide a { color: #7b71ff; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #201e43; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #201e43; padding: 12px 16px; text-align: left; font-weight: 700; color: #7b71ff; border-bottom: 2px solid #7b71ff; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #201e43; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; box-shadow: 0 10px 0 0 #7b71ff; }
    `,
  },
  {
    name: "Pearl",
    preview: { bg: "#0e142c", text: "#d0d0e0", border: "#9c92ff" },
    css: `
      .versa-slide { background: #0e142c; color: #d0d0e0; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; position: relative; background: linear-gradient(to right, #9c92ff, #ffa9b3, #faaef9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block; padding-bottom: 16px; }
      .versa-slide h1::after { content: ""; position: absolute; left: 0; bottom: 0; width: 80%; height: 2px; background: linear-gradient(to right, #9c92ff, #ffa9b3, #faaef9, #ffffff); }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #e0d0f0; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #faaef9; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\2605"; position: absolute; left: 0; font-size: 0.8em; line-height: 1.9; color: #faaef9; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #faaef9; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #faaef9; padding: 22px 26px; margin: 20px 0; background: linear-gradient(135deg, rgba(156,146,255,0.2), rgba(250,174,249,0.15)); font-style: italic; font-size: 22px; border-radius: 0 12px 12px 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #e0c0f0; }
      .versa-slide code { background: #faaef9; color: #0e142c; padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border-left: 4px solid #9c92ff; background: radial-gradient(35.36% 35.36% at 100% 25%,#0000 66%,#3e282a 68% 70%,#0000 72%) 16px 16px/calc(2*16px) calc(2*16px), radial-gradient(35.36% 35.36% at 0 75%,#0000 66%,#3e282a 68% 70%,#0000 72%) 16px 16px/calc(2*16px) calc(2*16px), radial-gradient(35.36% 35.36% at 100% 25%,#0000 66%,#3e282a 68% 70%,#0000 72%) 0 0/calc(2*16px) calc(2*16px), radial-gradient(35.36% 35.36% at 0 75%,#0000 66%,#3e282a 68% 70%,#0000 72%) 0 0/calc(2*16px) calc(2*16px), repeating-conic-gradient(#0e142c 0 25%,#0000 0 50%) 0 0/calc(2*16px) calc(2*16px), radial-gradient(#0000 66%,#3e282a 68% 70%,#0000 72%) 0 calc(16px/2)/16px 16px #0e142c; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #d0d0e0; }
      .versa-slide strong { color: #faaef9; font-weight: 700; }
      .versa-slide a { color: #9c92ff; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #2a2040; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #1a1a3a; padding: 12px 16px; text-align: left; font-weight: 700; color: #faaef9; border-bottom: 2px solid #9c92ff; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #1a1a3a; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; box-shadow: 0 0 15px #faaef9; }
    `,
  },
  {
    name: "Oasis",
    preview: { bg: "#10131a", text: "#d0e0e0", border: "#49fef7" },
    css: `
      .versa-slide { background: #10131a; color: #d0e0e0; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #ffffff; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #e0f0f0; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #49fef7; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\2192"; position: absolute; left: 0; font-size: 1em; line-height: 1.6; color: #49fef7; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #49fef7; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #49fef7; padding: 22px 26px; margin: 20px 0; background: #143c46; font-style: italic; font-size: 22px; border-radius: 0 10px 10px 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #a0e0d8; }
      .versa-slide code { background: #143c46; color: #49fef7; padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border-left: 4px solid #49fef7; background-image: linear-gradient(45deg, #102f37 50%, transparent 50%); background-size: 16px 16px; background-color: #10131a; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #d0e0e0; }
      .versa-slide strong { color: #49fef7; font-weight: 700; }
      .versa-slide a { color: #49fef7; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #1a3040; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #143c46; padding: 12px 16px; text-align: left; font-weight: 700; color: #49fef7; border-bottom: 2px solid #49fef7; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #1a3040; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; box-shadow: 0 0 25px 10px #133840; }
    `,
  },
  {
    name: "Creamy",
    preview: { bg: "#fffff4", text: "#020202", border: "#ffd7c2" },
    css: `
      .versa-slide { background: #fffff4; color: #020202; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #020202; background: #ffffff; padding: 8px 16px; border: 2px solid #020202; box-shadow: 5px 5px #020202; border-radius: 10px; display: inline-block; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #020202; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #333; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25CF"; position: absolute; left: 0; font-size: 0.7em; line-height: 2.2; color: #020202; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #020202; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: 2px solid #020202; padding: 22px 26px; margin: 20px 0; background: #ffd7c2; font-style: italic; font-size: 22px; border-radius: 10px; box-shadow: 5px 5px #020202; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #333; }
      .versa-slide code { background: #ffd7c2; color: #020202; padding: 3px 8px; border-radius: 6px; font-size: 18px; border: 1px solid #020202; }
      .versa-slide pre { background: #fff500; color: #020202; padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border: 2px solid #020202; box-shadow: 5px 5px #020202; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #020202; border: none; }
      .versa-slide strong { color: #020202; font-weight: 800; }
      .versa-slide a { color: #020202; text-decoration: underline; text-decoration-thickness: 2px; }
      .versa-slide hr { border: none; border-top: 2px solid #020202; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border: 2px solid #020202; border-radius: 10px; overflow: hidden; }
      .versa-slide th { background: #ffd7c2; color: #020202; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #ddd; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; border: 2px solid #020202; box-shadow: 5px 5px #020202; }
    `,
  },
  {
    name: "Cannabis",
    preview: { bg: "#ffffff", text: "#212c3f", border: "#d0e0d9" },
    css: `
      .versa-slide { background: #ffffff; color: #212c3f; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #212c3f; background: #d0e0d9; padding: 8px 16px; border: 2px solid #020202; box-shadow: 5px 5px #020202; display: inline-block; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #212c3f; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #56ad80; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25B8"; position: absolute; left: 0; font-size: 1.2em; line-height: 1.4; color: #56ad80; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #56ad80; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #56ad80; padding: 22px 26px; margin: 20px 0; background: #d0e0d9; font-style: italic; font-size: 22px; border-radius: 10px; box-shadow: 5px 5px #020202; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #2a3a30; }
      .versa-slide code { background: linear-gradient(to right, #fb8f48, #fb6747); color: #ffffff; padding: 3px 8px; border-radius: 6px; font-size: 18px; border: 2px solid #020202; box-shadow: 3px 3px #020202; }
      .versa-slide pre { background: #d0e0d9; color: #212c3f; padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border: 2px solid #020202; box-shadow: 5px 5px #020202; border-left: 4px solid #56ad80; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #212c3f; border: none; box-shadow: none; }
      .versa-slide strong { color: #56ad80; font-weight: 700; }
      .versa-slide a { color: #56ad80; text-decoration: underline; text-decoration-thickness: 2px; }
      .versa-slide hr { border: none; border-top: 2px solid #020202; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border: 2px solid #020202; border-radius: 10px; overflow: hidden; }
      .versa-slide th { background: linear-gradient(to right, #fb8f48, #fb6747); color: #ffffff; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #ddd; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; border: 2px solid #020202; box-shadow: 5px 5px #020202; }
    `,
  },
  {
    name: "Love",
    preview: { bg: "#f1485c", text: "#fdfdfe", border: "#ff7786" },
    css: `
      .versa-slide { background: #f1485c; color: #fdfdfe; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #ffffff; background: #ff7786; padding: 8px 16px; border-radius: 8px; display: inline-block; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #ffe0e4; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\2665"; position: absolute; left: 0; font-size: 0.8em; line-height: 1.9; color: #ffe0e4; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #ff7786; padding: 22px 26px; margin: 20px 0; background: #f4bebf; color: #1a0000; font-style: italic; font-size: 22px; border-radius: 10px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #1a0000; }
      .versa-slide code { background: rgba(0,0,0,0.15); padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { background: #1a0000; padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border-bottom: 5px solid #ff7786; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #fdfdfe; }
      .versa-slide strong { color: #ffe0e4; font-weight: 700; }
      .versa-slide a { color: #ffe0e4; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 2px solid rgba(255,255,255,0.3); margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border-radius: 10px; overflow: hidden; }
      .versa-slide th { background: rgba(0,0,0,0.15); padding: 12px 16px; text-align: left; font-weight: 700; color: #ffe0e4; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.15); }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.7; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; box-shadow: 0 5px 0 0 #ff7786; }
    `,
  },
  {
    name: "Golden Boy",
    preview: { bg: "#000000", text: "#d9c087", border: "#1a1400" },
    css: `
      .versa-slide { background: #000000; color: #d9c087; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #d9c087; position: relative; padding-bottom: 16px; }
      .versa-slide h1::after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 2px; background-color: #d9c087; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #d9c087; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #c0a870; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25C6"; position: absolute; left: 0; font-size: 0.7em; line-height: 2.2; color: #d9c087; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #d9c087; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #d9c087; padding: 22px 26px; margin: 20px 0; background: #0a0800; font-style: italic; font-size: 22px; border-radius: 0; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #c0a870; }
      .versa-slide code { background: #d9c087; color: #000000; padding: 3px 8px; border-radius: 4px; font-size: 18px; }
      .versa-slide pre { padding: 20px; overflow-x: auto; margin: 16px 0; border-left: 5px solid #d9c087; border-right: 5px solid #d9c087; background: conic-gradient(at 10% 50%,#0000 75%,#13110d 0), conic-gradient(at 10% 50%,#0000 75%,#13110d 0) calc(1*25px) calc(3*25px), conic-gradient(at 10% 50%,#0000 75%,#13110d 0) calc(2*25px) calc(1*25px), conic-gradient(at 10% 50%,#0000 75%,#13110d 0) calc(3*25px) calc(4*25px), conic-gradient(at 10% 50%,#0000 75%,#13110d 0) calc(4*25px) calc(2*25px), conic-gradient(at 50% 10%,#0000 75%,#13110d 0) 0 calc(4*25px), conic-gradient(at 50% 10%,#0000 75%,#13110d 0) calc(1*25px) calc(2*25px), conic-gradient(at 50% 10%,#0000 75%,#13110d 0) calc(2*25px) 0, conic-gradient(at 50% 10%,#0000 75%,#13110d 0) calc(3*25px) calc(3*25px), conic-gradient(at 50% 10%,#0000 75%,#13110d 0) calc(4*25px) calc(1*25px), #000000; background-size: 125px 125px; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #d9c087; }
      .versa-slide strong { color: #d9c087; font-weight: 700; }
      .versa-slide a { color: #d9c087; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #1a1400; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #242424; padding: 12px 16px; text-align: left; font-weight: 700; color: #d9c087; border-bottom: 2px solid #d9c087; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #1a1400; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; margin: 12px 0; box-shadow: 0 10px 0 0 #d9c087; }
    `,
  },
  {
    name: "70s",
    preview: { bg: "#181818", text: "#8a8a8a", border: "#ffffff" },
    css: `
      .versa-slide { background: #181818; color: #8a8a8a; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #ffffff; position: relative; padding-bottom: 16px; }
      .versa-slide h1::after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 2px; background-color: #ffffff; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #ffffff; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #cccccc; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\2022"; position: absolute; left: 0; font-size: 1.4em; line-height: 1.2; color: #ffffff; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #ffffff; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #ffffff; padding: 22px 26px; margin: 20px 0; background: #222222; font-style: italic; font-size: 22px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #aaaaaa; }
      .versa-slide code { background: #ffffff; color: #181818; padding: 3px 8px; border-radius: 4px; font-size: 18px; }
      .versa-slide pre { background: #0a0a0a; padding: 20px; overflow-x: auto; margin: 16px 0; border: 5px solid #ffffff; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #aaaaaa; }
      .versa-slide strong { color: #ffffff; font-weight: 700; }
      .versa-slide a { color: #ffffff; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #333; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #f0f0f0; color: #181818; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #333; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; margin: 12px 0; box-shadow: 0 10px 0 0 #ffffff; }
    `,
  },
  {
    name: "Cyber Purple",
    preview: { bg: "#100021", text: "#d0d0e0", border: "#9f6ce3" },
    css: `
      .versa-slide { background: #100021; color: #d0d0e0; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #e0d0f0; border-left: 4px solid #9f6ce3; padding-left: 16px; background: linear-gradient(to right, #744ba8, #100021, #100021); }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #d0c0e0; border-left: 4px solid #9f6ce3; padding-left: 16px; background: linear-gradient(to right, #744ba8, #100021, #100021); }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #9f6ce3; border-left: 4px solid #9f6ce3; padding-left: 16px; background: linear-gradient(to right, #744ba8, #100021, #100021); }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25C8"; position: absolute; left: 0; font-size: 0.9em; line-height: 1.7; color: #9f6ce3; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #9f6ce3; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #9f6ce3; padding: 22px 26px; margin: 20px 0; background: linear-gradient(to right, #744ba8, #100021, #100021); font-style: italic; font-size: 22px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #c0b0e0; }
      .versa-slide code { background: #9f6ce3; color: #100021; padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { background: #2e203c; padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border-left: 4px solid #9f6ce3; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #d0d0e0; }
      .versa-slide strong { color: #9f6ce3; font-weight: 700; }
      .versa-slide a { color: #9f6ce3; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #2e203c; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #2e203c; padding: 12px 16px; text-align: left; font-weight: 700; color: #9f6ce3; border-bottom: 2px solid #9f6ce3; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #2e203c; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; box-shadow: 0 0 20px rgba(159,108,227,0.3); }
    `,
  },
  {
    name: "Blue Lemonade",
    preview: { bg: "#ffffff", text: "#2d2b2a", border: "#4ec0f1" },
    css: `
      .versa-slide { background: #ffffff; color: #2d2b2a; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #2d2b2a; background-image: linear-gradient(rgba(255,255,255,0.09) 6px, transparent 6px), linear-gradient(to right, rgba(255,255,255,0.09) 6px, transparent 6px); background-size: 46px 46px; background-color: #4ec0f1; border-radius: 10px; padding: 10px 16px; border: 2px solid #000000; box-shadow: 5px 5px #000000; display: inline-block; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #2d2b2a; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #4ec0f1; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25B8"; position: absolute; left: 0; font-size: 1.2em; line-height: 1.4; color: #4ec0f1; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #2d2b2a; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: 2px solid #000000; padding: 22px 26px; margin: 20px 0; background: #ffe180; font-style: italic; font-size: 22px; border-radius: 10px; box-shadow: 5px 5px #000000; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #2d2b2a; }
      .versa-slide code { background: #ffe180; color: #2d2b2a; padding: 3px 8px; border-radius: 6px; font-size: 18px; border: 1px solid #000000; }
      .versa-slide pre { padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; border: 2px solid #000000; box-shadow: 5px 5px #000000; background-image: linear-gradient(rgba(255,255,255,0.09) 6px, transparent 6px), linear-gradient(to right, rgba(255,255,255,0.09) 6px, transparent 6px); background-size: 46px 46px; background-color: #4ec0f1; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #2d2b2a; border: none; }
      .versa-slide strong { color: #2d2b2a; font-weight: 800; }
      .versa-slide a { color: #2d2b2a; background: #ffffff; border: 2px solid #000000; box-shadow: 3px 3px #000000; padding: 2px 8px; text-decoration: none; border-radius: 8px; font-weight: 700; }
      .versa-slide hr { border: none; border-top: 2px solid #ddd; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border: 2px solid #000000; border-radius: 10px; overflow: hidden; }
      .versa-slide th { background: #ffe180; color: #2d2b2a; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #ddd; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 10px; margin: 12px 0; border: 2px solid #000000; box-shadow: 5px 5px #ffe180; }
    `,
  },
  {
    name: "Prism",
    preview: { bg: "#000000", text: "#ababab", border: "#9d79ff" },
    css: `
      .versa-slide { background: #000000; color: #ababab; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; background: linear-gradient(-45deg, #100629, #9d79ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #d0d0d0; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #9d79ff; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25C6"; position: absolute; left: 0; font-size: 0.7em; line-height: 2.2; color: #9d79ff; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #9d79ff; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #9d79ff; padding: 22px 26px; margin: 20px 0; background: rgba(157,121,255,0.08); font-style: italic; font-size: 22px; border-radius: 12px; display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #c0b0e0; }
      .versa-slide code { background: #9d79ff; color: #000000; padding: 3px 8px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { position: relative; background: rgba(255,255,255,0.06); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.075); padding: 20px; border-radius: 12px; overflow: hidden; margin: 16px 0; z-index: 1; }
      .versa-slide pre::before { content: ""; position: absolute; top: -20px; right: -20px; width: 60%; height: 60%; background: #9d79ff; border-radius: 100%; filter: blur(50px); opacity: 0.15; z-index: -1; }
      .versa-slide pre::after { content: ""; position: absolute; bottom: -20px; left: -20px; width: 40%; height: 40%; background: #9d79ff; border-radius: 100%; filter: blur(40px); opacity: 0.1; z-index: -1; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #d0d0e0; }
      .versa-slide strong { color: #9d79ff; font-weight: 700; }
      .versa-slide a { color: #9d79ff; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #222; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: rgba(157,121,255,0.15); padding: 12px 16px; text-align: left; font-weight: 700; color: #9d79ff; border-bottom: 2px solid #9d79ff; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #1a1a2a; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; border-radius: 12px; margin: 12px 0; box-shadow: 0 0 20px rgba(157,121,255,0.2); }
    `,
  },
  {
    name: "PinkMorphism",
    preview: { bg: "#1d1d1d", text: "#d0d0e0", border: "#d0a1ea" },
    css: `
      .versa-slide { background: #1d1d1d; color: #d0d0e0; padding: 64px; line-height: 1.7; }
      .versa-slide h1 { font-size: 48px; font-weight: 800; margin-bottom: 24px; color: #d0a1ea; }
      .versa-slide h2 { font-size: 36px; font-weight: 700; margin-bottom: 20px; color: #e0d0f0; }
      .versa-slide h3 { font-size: 28px; font-weight: 600; margin-bottom: 16px; color: #d0a1ea; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25CF"; position: absolute; left: 0; font-size: 0.7em; line-height: 2.2; color: #d0a1ea; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol) "."; position: absolute; left: 0; font-weight: 700; color: #d0a1ea; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border-left: 4px solid #d0a1ea; padding: 22px 26px; margin: 20px 0; background: #313131; font-style: italic; font-size: 22px; border-radius: 10px; box-shadow: 5px 5px 15px rgba(0,0,0,0.5); display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
      .versa-slide blockquote p { margin: 0; color: #c8b0e0; }
      .versa-slide code { background: transparent; color: #d0a1ea; padding: 3px 8px; border-radius: 6px; font-size: 18px; border: 1px solid #aaaaaa; }
      .versa-slide pre { background: #313131; padding: 20px; border-radius: 10px; overflow-x: auto; margin: 16px 0; box-shadow: 5px 5px 15px rgba(0,0,0,0.5); }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #d0d0e0; border: none; }
      .versa-slide strong { color: #d0a1ea; font-weight: 700; }
      .versa-slide a { color: #d0a1ea; text-decoration: underline; }
      .versa-slide hr { border: none; border-top: 1px solid #444; margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; }
      .versa-slide th { background: #313131; padding: 12px 16px; text-align: left; font-weight: 700; color: #d0a1ea; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #333; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.6; }
      .versa-slide img { max-width: 100%; margin: 12px 0; border-bottom-left-radius: 20%; border-top-right-radius: 20%; }
    `,
  },
  {
    name: "Teal Grid",
    preview: { bg: "#f5f5f5", text: "#1a9e8f", border: "#1a9e8f" },
    css: `
      .versa-slide {
        background: #f5f5f5;
        background-image: linear-gradient(rgba(26,158,143,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,158,143,0.1) 1px, transparent 1px);
        background-size: 28px 28px;
        color: #2d2d2d;
        padding: 64px;
        line-height: 1.7;
      }
      .versa-slide h1 { font-size: 52px; font-weight: 900; margin-bottom: 24px; color: #1a9e8f; text-transform: uppercase; letter-spacing: -1px; }
      .versa-slide h2 { font-size: 38px; font-weight: 800; margin-bottom: 20px; color: #2d2d2d; }
      .versa-slide h3 { font-size: 20px; font-weight: 600; margin-bottom: 14px; color: #1a9e8f; text-transform: uppercase; letter-spacing: 3px; }
      .versa-slide p { font-size: 22px; margin-bottom: 16px; color: #555; }
      .versa-slide ul, .versa-slide ol { font-size: 22px; margin-bottom: 16px; padding-left: 8px; list-style: none; }
      .versa-slide ol { counter-reset: versa-ol; }
      .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
      .versa-slide ul > li::before { content: "\\25B8"; position: absolute; left: 0; font-size: 1.2em; line-height: 1.4; color: #1a9e8f; }
      .versa-slide ol > li { counter-increment: versa-ol; }
      .versa-slide ol > li::before { content: counter(versa-ol); position: absolute; left: 0; font-weight: 800; color: #ffffff; background: #1a9e8f; width: 24px; height: 24px; border-radius: 6px; font-size: 14px; text-align: center; line-height: 24px; top: 3px; }
      .versa-slide li.task-item::before { display: none; }
      .versa-slide li.task-item { padding-left: 0; }
      .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
      .versa-slide blockquote { border: none; padding: 18px 24px; margin: 20px 0; background: #1a9e8f; color: #ffffff; font-style: normal; font-size: 20px; font-weight: 700; border-radius: 40px; display: inline-flex; flex-direction: column; justify-content: center; min-height: 48px; text-align: center; letter-spacing: 1px; text-transform: uppercase; }
      .versa-slide blockquote p { margin: 0; color: #ffffff; }
      .versa-slide code { background: #1a9e8f; color: #ffffff; padding: 3px 10px; border-radius: 6px; font-size: 18px; }
      .versa-slide pre { background: #ffffff; padding: 22px; border-radius: 12px; overflow-x: auto; margin: 16px 0; border: 2px solid #1a9e8f; }
      .versa-slide pre code { background: none; padding: 0; font-size: 16px; color: #2d2d2d; }
      .versa-slide strong { color: #1a9e8f; font-weight: 800; }
      .versa-slide a { color: #1a9e8f; text-decoration: underline; text-decoration-thickness: 2px; font-weight: 700; }
      .versa-slide hr { border: none; border-top: 2px solid rgba(26,158,143,0.2); margin: 28px 0; }
      .versa-slide table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 20px; border: 2px solid #1a9e8f; border-radius: 12px; overflow: hidden; }
      .versa-slide th { background: #1a9e8f; color: #ffffff; padding: 12px 16px; text-align: left; font-weight: 700; }
      .versa-slide td { padding: 12px 16px; border-bottom: 1px solid #e0e0e0; }
      .versa-slide del { text-decoration: line-through; text-decoration-thickness: 2px; opacity: 0.5; }
      .versa-slide img { max-width: 100%; border-radius: 12px; margin: 12px 0; border: 2px solid #1a9e8f; }
    `,
  },
];

/**
 * Get the CSS string for a theme by name.
 * @param {string} name - Theme name
 * @returns {string} CSS rules
 */
export function getCarouselThemeCSS(name) {
  const theme = CAROUSEL_THEMES.find((t) => t.name === name);
  return theme?.css || CAROUSEL_THEMES[0].css;
}

/**
 * Get the preview metadata for a theme.
 * @param {string} name - Theme name
 * @returns {{ bg: string, text: string, border?: string }}
 */
export function getCarouselThemePreview(name) {
  const theme = CAROUSEL_THEMES.find((t) => t.name === name);
  return theme?.preview || CAROUSEL_THEMES[0].preview;
}

export default CAROUSEL_THEMES;
