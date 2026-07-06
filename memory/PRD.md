# PRD — Gaurav Malik 3D Interactive Portfolio

## Original Problem Statement
User wants a 3D interactive portfolio website for Gaurav Malik.
Provided: GitHub (Whopie29), LinkedIn (gauravmalik29), LeetCode (Whopie), GFG (gauravmallz0v), Codolio (JNePbOod), resume PDF.

User choices (Iteration 1):
- 3D Style: Immersive 3D scene with floating objects/planets
- Theme: Dark futuristic + Cosmic/space
- Sections: Hero, About, Skills, Projects, Experience, Achievements, Contact
- Contact form: send emails via Emergent-managed Resend
- Resume PDF download enabled

## Architecture
- **Frontend**: React 19 + Tailwind + Framer Motion + React Three Fiber v9 + drei v9 + Three.js + Lenis-ready + react-fast-marquee + lucide-react + sonner (toasts)
- **Backend**: FastAPI + Motor (MongoDB) + httpx (async email calls) + Pydantic v2
- **Email**: Emergent-managed Resend proxy (`integrations.emergentagent.com/api/v1/email/send`)
- **Storage**: MongoDB `contact_messages` collection (persistence of every submission)

## User Personas
- **Recruiter** — lands, scans hero, downloads resume, reads projects, contacts.
- **Peer / Collaborator** — checks GitHub/LeetCode/GFG links, opens project cards.
- **Casual visitor** — enjoys the 3D scene and animations.

## Core Requirements (static)
1. Immersive 3D hero (AI-node icosahedron + orbiting planets + starfield + dust).
2. Full sections: Hero, About, Skills (categorized + marquee), Projects (bento cards w/ metrics), Achievements (LeetCode/GFG/Contest + certs), Experience (timeline), Contact.
3. Resume PDF download from navbar, hero, footer.
4. Contact form submits to `/api/contact`; owner gets HTML email; visitor gets ack email.
5. Social links: GitHub, LinkedIn, LeetCode, GFG, Codolio.
6. Cosmic/dark-futuristic aesthetic — no generic purple gradients. Cyan (#00E5FF) + Gold (#FFB800) accents on deep obsidian (#020617).
7. Every interactive element has `data-testid`.

## Implemented (2025-12)
- Backend endpoints: GET `/api/`, GET `/api/profile`, POST `/api/contact`, GET/POST `/api/status`.
- Owner + visitor acknowledgement emails via Emergent Resend proxy.
- 7 sections + navbar + footer, all with framer-motion reveal.
- Resume PDF hosted at `/Gaurav_Malik_Resume.pdf` (public folder).
- Data-testid coverage across nav, hero, projects, contact, footer.

## Backlog / Next
- **P1**: Add a "Codolio-style" live coding stats card (fetch LeetCode/GFG counts).
- **P1**: Blog / notes section (MDX).
- **P2**: Custom cursor + Lenis smooth scroll wiring.
- **P2**: Case-study deep-dive pages for each project.
- **P2**: Dark/light toggle (cosmic + starlit-light variant).
- **P3**: Analytics + visitor heatmap.
