# Modern Portfolio Website

A beautiful, responsive portfolio website built with modern web technologies.

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Features

- Modern, clean design
- Fully responsive
- Beautiful UI components from shadcn/ui
- Ready for dark mode implementation
- Fast performance with Next.js
- TypeScript for type safety
- SEO optimized

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles with Tailwind
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   └── ui/            # shadcn/ui components
├── lib/               # Utility functions
└── public/            # Static assets
```

## Customization

1. **Personal Information:** Update the content in `app/page.tsx`
2. **Styling:** Modify `app/globals.css` and Tailwind classes
3. **Components:** Add new shadcn/ui components as needed
4. **Metadata:** Update SEO information in `app/layout.tsx`

## Deployment

This project is ready to deploy on Vercel, Netlify, or any other platform that supports Next.js.

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Adding More Components

To add more shadcn/ui components:

```bash
npx shadcn-ui@latest add [component-name]
```

## License

This project is open source and available under the [MIT License](LICENSE).
