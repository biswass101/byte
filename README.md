# ByteSpace

An online course platform where learners discover courses and creators publish educational content. Built as a responsive, production-ready landing page with authentication flows.

## Tech Stack

- **Framework:** Next.js 16.3 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 + custom CSS
- **React:** v19

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Landing page (/)
│   ├── globals.css         # All styles
│   ├── login/page.tsx      # Login page (/login)
│   └── signup/page.tsx     # Signup page (/signup)
├── components/
│   ├── auth/
│   │   ├── auth-page.tsx   # Shared auth layout (login/signup)
│   │   ├── auth-form.tsx   # Auth form with validation
│   │   └── auth-collage.tsx# Decorative card collage
│   ├── home/
│   │   ├── home-page.tsx   # Composes all landing sections
│   │   ├── header.tsx      # Site navigation
│   │   ├── hero.tsx        # Hero with search, floating cards
│   │   ├── trusted-brands.tsx # Logo strip
│   │   ├── course-library.tsx # Course grid with filters
│   │   ├── learning-paths.tsx # Category grid
│   │   ├── growth-section.tsx # Growth/creator feature sections
│   │   ├── creator-cta.tsx # Creator call-to-action
│   │   ├── community-section.tsx # Testimonials
│   │   └── footer.tsx      # Site footer with newsletter
│   └── shared/
│       ├── course-card.tsx # Reusable course card
│       ├── testimonial-card.tsx # Testimonial card
│       ├── info-card.tsx   # Generic info card wrapper
│       └── partner-logo.tsx# Partner logo component
└── public/
    ├── card/               # Course preview images
    ├── logo.png            # ByteSpace logo
    ├── people-1.png        # Avatar photo
    └── *.png               # Decorative shapes (spirals, donuts, cones)
```

## Pages

| Route     | Description                                      |
| --------- | ------------------------------------------------ |
| `/`       | Landing page with hero, courses, growth, testimonials |
| `/signup` | Account creation with decorative collage         |
| `/login`  | Sign-in with social auth options                 |

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm start`     | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Deploy on Vercel

The easiest way to deploy this Next.js app is on [Vercel](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## License

Private project.
