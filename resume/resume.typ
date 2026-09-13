// Inter configuration matching the website
#set text(
  font: "Inter",
  size: 10pt,
  weight: 400,
  features: (
    "cv02", // open tailed lowercase a
    "cv03", // open lowercase g
    "cv04", // open lowercase f
    "cv11", // single-storey lowercase l
  ),
)

#show link: underline

// Uncomment the following lines to adjust the size of text
// The recommend resume text size is from `10pt` to `12pt`
// #set text(
//   size: 11pt,
// )

// Feel free to change the margin below to best fit your own CV
#set page(
  margin: (x: 0.7cm, y: 0.65cm),
)

// For more customizable options, please refer to official reference: https://typst.app/docs/reference/

#set par(justify: true)

#let chiline() = {v(-3pt); line(length: 100%); v(-5pt);}

= Anik Das

#link("anikdas0811@gmail.com")[anikdas0811\@gmail.com] •
#link("tel:+91-9123813973")[+91-9123813973] •
#link("https://www.linkedin.com/in/sadn1ck/")[linkedin.com/in/sadn1ck] •
#link("https://github.com/sadn1ck")[github.com/sadn1ck] • #link("https://anikd.com")[anikd.com]

*Languages:* TypeScript, JavaScript, HTML, CSS, Kotlin \
*Tools:* Vite, Webpack, Rspack, ProseMirror, Docker, Kubernetes, Git \
*Libraries:* React, TailwindCSS, React Query, Zod, Framer Motion

#let chiline() = line(
  length: 100%,
  stroke: 0.5pt + rgb("#d9dad5"),
)

#let work-history = (
  (
    company: [udaan.com],
    roles: (
      (
        title: [Software Engineer (L3)],
        dates: [August 2026 - present],
        bullets: (
          [[L3 responsibilities and impact to be added.]],
        ),
      ),
      (
        title: [Software Engineer (L2)],
        dates: [March 2025 - July 2026],
        bullets: (
          [Refactored a legacy internal build wrapper to support Webpack 5, leveraging the architectural overhaul to integrate Rspack - slashing build times by *90%* (6m -> 30s) while maintaining a seamless migration path.],
          [Diagnosed and resolved a critical memory leak in a Kotlin service causing frequent OOM restarts, tracing the root cause to `ThreadLocal` object retention in custom coroutine scopes. This fix enabled a *50% reduction* in pod resources for the service.],
          [Built the "Streaks" tracking system to drive agent focus toward private labels aligning with agent incentives as well as business goals - which drove a *~10% increase* in private label sales.],
        ),
      ),
    ),
  ),
  (
    company: [Chronicle],
    roles: (
      (
        title: [Software Engineer],
        dates: [June 2023 - February 2025],
        bullets: (
          [Architected and launched the mentions experience in the Chronicle web application, a major feature of our initial launch to around *5,000 users* - by building a custom ProseMirror mentions plugin, ensuring pixel-perfect alignment across headers, cards, and image captions.],
          [Slashed document load time by *~80%* (5s -> \<1s) enabling near-instant document editability by coming up with a local-first hydration strategy. Leveraged IndexedDB to pre-fill Y.js state vectors, forcing a delta-only network sync that reduced initial WebSocket payloads. #link("https://anikd.com/blog/optimizing-yjs-first-load/")[blog]],
          [Improved HMR performance by *5x* for the Vite development server after thorough profiling and flamegraph analysis. #link("https://anikd.com/blog/debugging-slow-hmr-vite/")[blog]],
        ),
      ),
      (
        title: [Software Engineer Intern],
        dates: [June 2022 - March 2023],
        bullets: (
          [Built the brand page, analytics, and waitlist flow for chroniclehq.com, reaching *20,000+ views* in the first week and *50,000 total signups*.],
        ),
      ),
    ),
  ),
  (
    company: [Google Summer of Code 2022],
    roles: (
      (
        title: [Open Source Contributor],
        dates: [May 2022 - September 2022],
        bullets: (
          [Migrated a create-react-app project to a custom Webpack 5 project with an optimized production build leading to a *20% bundle size reduction*.],
        ),
      ),
    ),
  ),
)

#let render-role(role) = {
  grid(
    columns: (1fr, auto),
    gutter: 12pt,
    text(style: "italic")[#role.title],
    text(fill: rgb("#6b6e66"))[#role.dates],
  )

  for bullet in role.bullets {
    [- #bullet]
  }

  v(2pt)
}

#let render-company(job) = {
  text(weight: 650, size: 10pt)[#job.company]

  for role in job.roles {
    render-role(role)
  }

  v(4pt)
}

== Work Experience

#chiline()

#for job in work-history {
  render-company(job)
}

== Education

#chiline()

*B.Tech in Information Technology* #h(1fr) 2019 - 2023 \
IIEST Shibpur \
CGPA: 9.13 / 10
