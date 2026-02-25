/**
 * Blog post data for Versa.
 * Each post is a static object — no CMS, no API, just JSX-ready content.
 *
 * Fields:
 *   slug        — URL slug (/blog/:slug)
 *   title       — H1 / display title
 *   metaTitle   — <title> tag (≤ 60 chars ideal)
 *   metaDesc    — <meta description> (≤ 155 chars)
 *   date        — publish date string
 *   readTime    — estimated read time
 *   category    — grouping label
 *   sections    — array of { heading?, paragraphs: string[] }
 */

const BLOG_POSTS = [
  /* ─────────────── Post 1 ─────────────── */
  {
    slug: "create-linkedin-carousel-from-markdown",
    title: "How to Create a LinkedIn Carousel from Markdown",
    metaTitle: "Create a LinkedIn Carousel from Markdown — Versa Guide",
    metaDesc:
      "Convert Markdown into a LinkedIn-ready carousel PDF in minutes. Step-by-step guide with tips for higher engagement.",
    date: "February 24, 2026",
    readTime: "6 min read",
    category: "LinkedIn",
    sections: [
      {
        paragraphs: [
          "LinkedIn carousels are one of the highest-engagement formats on the platform. They let you tell a story slide-by-slide, and studies show carousel posts get 1.6× more reach than single-image posts. The problem? Most carousel tools force you into clunky drag-and-drop editors or lock basic features behind a paywall.",
          "Versa takes a different approach. If you can write a README, you can build a carousel. Here's how.",
        ],
      },
      {
        heading: "Step 1 — Write Your Content in Markdown",
        paragraphs: [
          "Open the Versa editor and start typing in Markdown. Use standard syntax: # for headings, **bold** for emphasis, - for bullet lists. Everything you'd normally write in a Markdown file works here.",
          "To create slide breaks, use a horizontal rule: --- on its own line. Each section between horizontal rules becomes one slide. Versa's auto-pagination also splits long sections automatically, so if you forget a break, your content won't overflow — it flows into the next slide naturally.",
        ],
      },
      {
        heading: "Step 2 — Choose a Theme and Font",
        paragraphs: [
          "Click the theme picker in the toolbar. Versa ships with 8 handcrafted themes — from clean white to bold gradients — all designed specifically for the 1080×1080 LinkedIn carousel format.",
          "Next, pick a font. Versa gives you access to the entire Google Fonts library — over 1,600 typefaces. Search by name, preview how your slides look, and apply with a single click. Want Inter for body text? Playfair Display for headings? Go for it.",
        ],
      },
      {
        heading: "Step 3 — Preview and Adjust",
        paragraphs: [
          "The right panel shows a live preview of your carousel. Navigate between slides to check layout, spacing, and readability. Every edit you make on the left is reflected instantly on the right.",
          "Tip: LinkedIn recommends keeping text large and concise. Aim for 3–5 key points per slide. Use headings to create visual hierarchy and white space to let your content breathe.",
        ],
      },
      {
        heading: "Step 4 — Export as PDF",
        paragraphs: [
          "When you're happy with your carousel, click the export button. Versa generates a high-resolution PDF where each slide is a separate page — exactly what LinkedIn expects when you upload a document post.",
          "The entire process happens in your browser. No server round-trips, no waiting. Your content never leaves your machine.",
        ],
      },
      {
        heading: "Tips for Higher Engagement",
        paragraphs: [
          "Start with a hook. Your first slide is the thumbnail people see in their feed — make it bold, make it count. Use a provocative question, a surprising stat, or a clear promise.",
          "End with a call-to-action. The last slide should tell people what to do next: follow you, comment, share, or visit a link. Don't let them swipe through and move on.",
          "Keep slides scannable. Big text, short sentences, visual hierarchy. People scroll fast — reward them for stopping.",
        ],
      },
    ],
  },

  /* ─────────────── Post 2 ─────────────── */
  {
    slug: "linkedin-carousel-templates-markdown",
    title: "10 LinkedIn Carousel Templates You Can Copy & Paste",
    metaTitle: "LinkedIn Carousel Templates | Markdown Examples — Versa",
    metaDesc:
      "Ready-to-use LinkedIn carousel templates in Markdown. Copy, paste into Versa, export as PDF, and post.",
    date: "February 24, 2026",
    readTime: "8 min read",
    category: "Templates",
    sections: [
      {
        paragraphs: [
          "Creating a LinkedIn carousel from scratch every time is exhausting. That's why we put together 10 proven templates you can copy, paste into Versa, customize in minutes, and export as a polished PDF.",
          "Each template below uses standard Markdown syntax. Slide breaks are marked with ---. Just paste the text into the Versa editor, pick a theme and font, and you're ready to publish.",
        ],
      },
      {
        heading: "1. The Listicle",
        paragraphs: [
          "A numbered list of tips, tools, or lessons. Start with a bold title slide, then one item per slide. End with a summary + CTA. Example: \"7 Productivity Hacks I Wish I Knew Earlier\".",
          "This format works because it sets expectations upfront — people know exactly how many slides to expect, and that commitment drives completion rates.",
        ],
      },
      {
        heading: "2. The Step-by-Step Tutorial",
        paragraphs: [
          "Walk your audience through a process. Number each step clearly. Use code blocks for technical tutorials or bold text for key actions. Example: \"How to Deploy a React App in 5 Minutes\".",
          "Tutorials position you as an expert and tend to get saved and shared — both signals LinkedIn's algorithm loves.",
        ],
      },
      {
        heading: "3. The Myth Buster",
        paragraphs: [
          "\"5 Myths About [Topic] — Debunked.\" Each slide tackles one myth with a short, punchy rebuttal. Contrarian content drives comments because people love to agree or argue.",
        ],
      },
      {
        heading: "4. The Before / After",
        paragraphs: [
          "Show a transformation. Before: messy code, bad design, weak copy. After: clean, polished, effective. Two-slide pairs work beautifully. This format is visual and immediately compelling.",
        ],
      },
      {
        heading: "5. The Quote Collection",
        paragraphs: [
          "Curate quotes from industry leaders, books, or your own experience. One quote per slide, large text, minimal design. Use Versa's blockquote syntax (> ) to style them automatically.",
        ],
      },
      {
        heading: "6. The Framework",
        paragraphs: [
          "Introduce a mental model. Slide 1: name and hook. Slides 2–5: each component explained. Final slide: how to apply it. Examples: \"The 3 Pillars of Developer Branding\".",
        ],
      },
      {
        heading: "7. The Data Story",
        paragraphs: [
          "Present data or research findings slide-by-slide. Use tables (Markdown tables work in Versa) or bold numbers for impact. End with an insight or takeaway, not just raw data.",
        ],
      },
      {
        heading: "8. The Personal Story",
        paragraphs: [
          "Narrative-driven. Start with a hook (\"I got fired and it was the best thing that happened to me\"), tell the story across slides, end with a lesson. Authenticity wins on LinkedIn.",
        ],
      },
      {
        heading: "9. The Cheat Sheet",
        paragraphs: [
          "Condense a topic into a reference card. Git commands, CSS properties, SQL syntax — anything people would want to save. High save rates boost your post's reach.",
        ],
      },
      {
        heading: "10. The Comparison",
        paragraphs: [
          "\"X vs Y — Which Should You Use?\" Compare two tools, approaches, or ideas. Use a table or side-by-side slides. End with a clear recommendation. People love opinionated takes.",
        ],
      },
      {
        heading: "How to Use These Templates",
        paragraphs: [
          "Pick a template, open versa, paste or type your content using Markdown, separate slides with ---, choose a theme and font that matches your brand, and export as PDF. Upload to LinkedIn as a document post. Done.",
        ],
      },
    ],
  },

  /* ─────────────── Post 3 ─────────────── */
  {
    slug: "markdown-to-pdf-with-custom-fonts",
    title: "How to Convert Markdown to PDF with Custom Fonts & Themes",
    metaTitle: "Markdown to PDF with Custom Fonts & Themes — Versa",
    metaDesc:
      "Learn how to export styled Markdown to PDF using 1,600+ Google Fonts and 8 themes. Free, no sign-up required.",
    date: "February 24, 2026",
    readTime: "5 min read",
    category: "Guide",
    sections: [
      {
        paragraphs: [
          "Most Markdown-to-PDF converters give you a plain, unstyled document. That's fine for internal notes, but if you're sharing content externally — as a carousel, report, resume, or ebook — presentation matters.",
          "Versa bridges the gap between Markdown's simplicity and the visual polish of design tools. Here's how to make it work for you.",
        ],
      },
      {
        heading: "Why Fonts and Themes Matter",
        paragraphs: [
          "Typography sets the tone before anyone reads a word. A resume in Inter feels modern and professional. A carousel in Space Grotesk feels bold and techy. A report in Merriweather feels editorial and trustworthy.",
          "Versa's theme system pairs colors, spacing, and typography defaults so your content looks cohesive with zero design effort. But you can override the font anytime with any of the 1,600+ typefaces from Google Fonts.",
        ],
      },
      {
        heading: "Choosing the Right Theme",
        paragraphs: [
          "Versa ships with 8 themes. Clean White for professional documents. Dark Minimal for developer content. Gradient Pop for eye-catching social posts. Bold Statement for when you want to be noticed.",
          "Preview each theme in real-time — switch between them and watch your content reflow instantly. No re-exporting, no waiting.",
        ],
      },
      {
        heading: "Picking a Font",
        paragraphs: [
          "Open the font picker and start typing. The search filters the entire Google Fonts library in real-time. Click a font to preview it on your slides. Double-click to apply.",
          "Pro tip: stick to one or two fonts. A bold display font for headings and a clean sans-serif for body text is a timeless combination.",
        ],
      },
      {
        heading: "Exporting Your Styled PDF",
        paragraphs: [
          "Once your content, theme, and font are set, click Export. Versa renders each slide as a high-resolution image and bundles them into a PDF document.",
          "The output is pixel-perfect: fonts are embedded, colors are accurate, and layout is preserved exactly as you see it in the preview. Upload to LinkedIn, attach to an email, or print — it just works.",
        ],
      },
    ],
  },

  /* ─────────────── Post 4 ─────────────── */
  {
    slug: "turn-blog-posts-into-carousels",
    title: "Turn Your Blog Posts into LinkedIn Carousels in 3 Steps",
    metaTitle: "Blog Posts to LinkedIn Carousels — Quick Guide | Versa",
    metaDesc:
      "Repurpose existing blog content into engaging LinkedIn carousel PDFs. 3-step workflow using Markdown.",
    date: "February 24, 2026",
    readTime: "4 min read",
    category: "LinkedIn",
    sections: [
      {
        paragraphs: [
          "You already have the content. It's sitting in your blog, your newsletter archive, your notes app. The hard part is done — now you just need to reformat it for LinkedIn's carousel format.",
          "Here's the fastest workflow.",
        ],
      },
      {
        heading: "Step 1 — Extract Key Points",
        paragraphs: [
          "Take your blog post and distill it into 5–10 key takeaways. Each takeaway becomes one slide. Write them as short, punchy statements — not full paragraphs.",
          "A 2,000-word blog post can become a 7-slide carousel. You're not copying the whole article — you're creating a highlight reel that drives people to the full post.",
        ],
      },
      {
        heading: "Step 2 — Format as Markdown",
        paragraphs: [
          "Open Versa and type your takeaways in Markdown. Use ## for slide headings, **bold** for emphasis, and --- between slides. Add a title slide at the top and a CTA slide at the end.",
          "The entire process takes 5–10 minutes if you already know what you want to say. And since you wrote the blog post, you do.",
        ],
      },
      {
        heading: "Step 3 — Theme, Font, Export",
        paragraphs: [
          "Pick a theme that matches your personal brand. Choose a font. Export as PDF. Upload to LinkedIn as a document post.",
          "Link to the full blog post in your LinkedIn caption. The carousel hooks people; the blog post delivers the depth. It's a content flywheel.",
        ],
      },
      {
        heading: "Why This Works",
        paragraphs: [
          "LinkedIn's algorithm rewards engagement, and carousels generate more of it than almost any other format. By repurposing content you've already created, you multiply your reach without multiplying your workload.",
          "One blog post can become a carousel, a Twitter thread, a newsletter issue, and a YouTube script. Start with the carousel — it's the fastest win.",
        ],
      },
    ],
  },

  /* ─────────────── Post 5 ─────────────── */
  {
    slug: "export-readme-to-pdf",
    title: "Export README.md to a Polished PDF Manual",
    metaTitle: "Export README to PDF — Styled Markdown to PDF | Versa",
    metaDesc:
      "Convert README.md into printable PDF manuals with themes and 1,600+ fonts. Free and open source.",
    date: "February 24, 2026",
    readTime: "5 min read",
    category: "Developer",
    sections: [
      {
        paragraphs: [
          "Your README is the front door to your project. On GitHub it looks fine, but what about when you need to share it as a standalone document? Email it to a client, include it in a proposal, or distribute it as printed documentation?",
          "Versa converts your README into a professionally styled PDF with custom fonts and themes — no design skills required.",
        ],
      },
      {
        heading: "When You Need a PDF Version of Your README",
        paragraphs: [
          "Client deliverables that need to look polished. Conference handouts for open-source projects. Internal documentation for teams that don't use GitHub. Grant proposals that require formatted attachments.",
          "GitHub renders Markdown beautifully for the web, but PDFs need different treatment: proper page breaks, print-friendly fonts, and consistent spacing.",
        ],
      },
      {
        heading: "How to Do It",
        paragraphs: [
          "Copy your README.md content and paste it into Versa. Everything — headings, code blocks, tables, images, task lists — renders correctly in the preview.",
          "Choose a theme. Clean White works well for professional documentation. Dark Minimal is great for developer-facing handouts. Pick a monospace-friendly font like JetBrains Mono or Fira Code if your README is code-heavy.",
          "Export as PDF. Each page is sized at 1080×1080 by default (carousel format), but the content flows naturally across pages. The result is a clean, branded document you can send anywhere.",
        ],
      },
      {
        heading: "Bonus: Version Your Docs",
        paragraphs: [
          "Since your source is Markdown, you can keep your README in version control and regenerate the PDF whenever the docs change. It's the same workflow you'd use for code — but for documentation.",
        ],
      },
    ],
  },

  /* ─────────────── Post 6 ─────────────── */
  {
    slug: "create-resume-from-markdown",
    title: "Create a Professional Resume from Markdown in 5 Steps",
    metaTitle: "Resume from Markdown — Export as PDF | Versa",
    metaDesc:
      "Build and style a resume in Markdown, export a print-ready PDF with custom fonts and themes. Free, no sign-up.",
    date: "February 24, 2026",
    readTime: "5 min read",
    category: "Personal",
    sections: [
      {
        paragraphs: [
          "Resume builders are either too rigid or too complex. Versa offers a middle ground: write your resume in Markdown — a format that's portable, version-controllable, and simple — then export a beautifully styled PDF.",
        ],
      },
      {
        heading: "Step 1 — Structure Your Content",
        paragraphs: [
          "Use # for your name, ## for section headers (Experience, Education, Skills), and - for bullet points under each role. Keep it clean and scannable.",
        ],
      },
      {
        heading: "Step 2 — Add the Details",
        paragraphs: [
          "Under each role, list 2–4 achievements. Use **bold** for company names and metrics. Keep descriptions to one line each — recruiters scan, they don't read.",
        ],
      },
      {
        heading: "Step 3 — Pick a Theme",
        paragraphs: [
          "Clean White is the safe choice for most industries. Soft Pastel adds a subtle creative touch. Brand Blue works well for corporate environments.",
        ],
      },
      {
        heading: "Step 4 — Choose Your Font",
        paragraphs: [
          "Inter, Source Sans Pro, and Nunito are excellent resume fonts — modern, clean, highly legible at small sizes. Avoid decorative fonts for resumes — save those for creative portfolios.",
        ],
      },
      {
        heading: "Step 5 — Export and Send",
        paragraphs: [
          "Click Export. Your resume is rendered as a crisp PDF. Send it, upload it, print it. Since everything runs locally, your personal information never touches a server.",
          "Pro tip: keep your resume source file in a GitHub repo or local folder. When you need to update it, edit the Markdown, re-export, done. No wrestling with Word or Google Docs formatting.",
        ],
      },
    ],
  },

  /* ─────────────── Post 7 ─────────────── */
  {
    slug: "create-course-slides-from-markdown",
    title: "Create Course Slides & Handouts from Markdown",
    metaTitle: "Course Slides from Markdown — Export to PDF | Versa",
    metaDesc:
      "Turn lecture notes into polished slides and printable handouts using Markdown. 1,600+ fonts, themes, free.",
    date: "February 25, 2026",
    readTime: "6 min read",
    category: "Education",
    sections: [
      {
        paragraphs: [
          "PowerPoint is overkill for most lectures. You spend more time fiddling with alignment and bullet animations than writing the actual content. If your teaching material is primarily text, code, or structured information, Markdown is a faster, cleaner authoring format — and Versa turns it into presentation-ready slides you can project or print.",
        ],
      },
      {
        heading: "Why Markdown Works for Educators",
        paragraphs: [
          "Markdown is plain text. It opens anywhere, versions easily with Git, and doesn't lock you into proprietary formats. You can write lecture notes in any text editor — VS Code, Obsidian, Notion, or even Notepad — and paste them directly into Versa.",
          "For STEM subjects, Markdown handles code blocks, tables, and structured lists natively. No more screenshotting code into slides.",
        ],
      },
      {
        heading: "Structuring a Lecture as Markdown",
        paragraphs: [
          "Use # for the lecture title and ## for each topic or section heading. Separate slides with --- (horizontal rule). Each section between rules becomes one slide in the exported PDF.",
          "Keep slides focused: one concept per slide, 3–5 bullet points maximum. Students should be able to glance at a slide and grasp the key idea in seconds.",
          "For code-heavy lectures, use fenced code blocks (```) — Versa renders them with proper monospace formatting and theme-appropriate styling. Blockquotes (>) work well for definitions or key theorems you want to visually emphasize.",
        ],
      },
      {
        heading: "Choosing a Theme for Readability",
        paragraphs: [
          "Projection environments need high contrast. Dark Minimal and Ember Dark work well in dimly lit lecture halls. Clean White and Teal Grid are ideal for printed handouts where ink usage matters.",
          "Pick a legible font — Inter, Nunito Sans, or Source Sans Pro for body text. Fira Code or JetBrains Mono for code-heavy slides. Font size is handled automatically by Versa's themes, so text stays readable at projection scale.",
        ],
      },
      {
        heading: "Exporting Slides and Handouts",
        paragraphs: [
          "Click Export to generate a PDF. Each slide becomes a separate page. Project it directly from any PDF viewer, upload it to your LMS, or print copies as handouts.",
          "Since Versa is browser-based and has no backend, you can use it on university computers without installing anything. Students can use the same tool to create study guides or project presentations from their own notes.",
        ],
      },
      {
        heading: "Reuse and Iterate",
        paragraphs: [
          "Save your Markdown source files alongside your course materials. Next semester, update the content, re-export, and you have a fresh set of slides without rebuilding from scratch. Version control your lectures the same way you version code — because your source material is just text.",
        ],
      },
    ],
  },

  /* ─────────────── Post 8 ─────────────── */
  {
    slug: "create-product-one-pager-pdf-from-markdown",
    title: "Create a Product One-Pager PDF from Markdown for Sales Outreach",
    metaTitle: "Product One-Pager from Markdown — PDF Export | Versa",
    metaDesc:
      "Build sales one-pagers and product briefs in Markdown. Export branded PDFs with custom fonts and themes.",
    date: "February 25, 2026",
    readTime: "5 min read",
    category: "Professional",
    sections: [
      {
        paragraphs: [
          "Sales teams need one-pagers that look professional, stay on brand, and can be updated in minutes — not days. Most teams either rely on a designer (slow) or wrestle with Canva templates that don't quite fit (frustrating). Markdown offers a faster path: write the content, style it with a theme, and export a polished PDF.",
        ],
      },
      {
        heading: "What Makes a Good One-Pager",
        paragraphs: [
          "A product one-pager should answer three questions in under 60 seconds: What is it? Why should I care? What do I do next? Structure your Markdown accordingly: a bold headline, 2–3 value propositions, a short feature list, and a clear call-to-action.",
          "Use **bold** for metrics and outcomes (\"Reduces onboarding time by 40%\"). Use blockquotes for customer quotes or social proof. Keep paragraphs to 1–2 sentences.",
        ],
      },
      {
        heading: "Writing the One-Pager in Markdown",
        paragraphs: [
          "Start with your product name as an H1 heading and a tagline as a paragraph. Use H2 headings for sections: Problem, Solution, Key Features, Social Proof, and Next Steps.",
          "Feature lists work well as bullet points. If you have comparison data, use a Markdown table — Versa renders tables with clean borders and themed headers that look great in print.",
          "For multi-page briefs, use --- to create page breaks. A 2–3 page product brief can replace a full slide deck for early-stage sales conversations.",
        ],
      },
      {
        heading: "Branding with Themes and Fonts",
        paragraphs: [
          "Choose a theme that matches your company's tone. Brand Blue and Corporate Duo are designed for B2B materials. Bold Statement and Gradient Pop work for consumer-facing products.",
          "Select a font that aligns with your brand guidelines. If your company uses a specific Google Font, search for it in Versa's font picker — with 1,600+ options, it's almost certainly available. Consistent typography across your website, emails, and PDFs builds brand recognition.",
        ],
      },
      {
        heading: "Export and Distribute",
        paragraphs: [
          "Export as PDF and attach directly to sales emails, upload to your CRM, or share via Slack. The PDF is self-contained — fonts and styling are embedded, so it looks identical on any device.",
          "Since everything runs in the browser, there's no data going to a server. Confidential pricing, unreleased features, and customer data stay on your machine. That's not just convenient — for regulated industries, it's a compliance advantage.",
        ],
      },
      {
        heading: "Iterating Quickly",
        paragraphs: [
          "Sales content changes constantly — new features, updated pricing, fresh case studies. Because your source is Markdown, updates take minutes instead of hours. Edit the text, re-export, and the new version is ready to send. No designer needed, no template wrestling.",
        ],
      },
    ],
  },
];

export default BLOG_POSTS;
