# Extreme Privacy Website

A premium, responsive static homepage for **Extreme Privacy**, the specialized privacy-oriented construction and building-performance division of Robert Martin Koehler Contractor Business.

## Brand structure

Extreme Privacy is the specialized privacy-oriented construction and building-performance division of Robert Martin Koehler Contractor Business.

## Homepage implementation

The root homepage is implemented as a lightweight static site:

- `index.html` — homepage structure, SEO metadata, accessible navigation, content sections, inquiry form, and footer.
- `styles.css` — responsive visual system using deep navy, mineral off-white, architectural teal, and warm gold.
- `script.js` — mobile navigation and a front-end inquiry confirmation flow.

## Content planning

- `website/Extreme_Privacy_Website_Outline.md` — sitemap, page strategy, service architecture, SCIF-capable planning guidance, agent-ready quote intake, forms, SEO, analytics, and launch phases.
- `website/Extreme_Privacy_Homepage_Wireframe_and_Copy.md` — exact homepage layout, responsive behavior, section copy, calls to action, form specification, metadata, and launch acceptance checklist.

## Positioning principles

The website should emphasize discreet construction, measurable electromagnetic attenuation, privacy-oriented building design, secure-room planning, and documented commissioning.

The website should not make medical claims, promise absolute invisibility, claim to stop every surveillance method, or imply that a building system replaces cybersecurity, access control, operational security, or formal SCIF accreditation.

## Form behavior

The public inquiry form currently demonstrates the front-end interaction only. It prevents a page reload and displays a confirmation message in the browser. Production deployment should connect it to an approved form endpoint, CRM, or serverless function with appropriate privacy, spam prevention, data retention, and notification controls.

## Deployment

The project is intentionally dependency-light and can be deployed as a static site through Vercel or another static hosting service. Configure the deployment with the repository root as the project root and use no build command for the current plain HTML/CSS/JavaScript implementation.
