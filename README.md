# DevSecOps Academy

Modern DevSecOps documentation platform built with Next.js, TypeScript, TailwindCSS, and MDX.

## Features

- 🚀 **Modern Stack**: Next.js 15, React 19, TypeScript
- 🎨 **Beautiful UI**: TailwindCSS + shadcn/ui components
- 🌙 **Dark Mode**: System-aware theme switching
- 📝 **MDX Content**: Rich documentation with code highlighting
- 🔍 **Global Search**: Find modules, labs, commands, and more
- ⚡ **Fast Performance**: Optimized builds and lazy loading
- 📱 **Responsive Design**: Mobile-first approach
- ♿ **Accessible**: WCAG compliant components
- 🎭 **Animations**: Smooth Framer Motion transitions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Dev-Ops/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── modules/           # Module pages
│   ├── roadmap/           # Roadmap page
│   ├── labs/              # Labs pages
│   ├── projects/          # Projects pages
│   ├── interview/         # Interview questions
│   ├── mcqs/              # Multiple choice questions
│   ├── commands/          # Command references
│   ├── cheatsheets/       # Cheat sheets
│   ├── resources/         # Resources page
│   └── glossary/          # Glossary page
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components (Header, Footer, Sidebar)
│   ├── home/              # Homepage sections
│   ├── module/            # Module-specific components
│   ├── search/            # Search components
│   └── shared/            # Reusable components
├── content/
│   └── modules/           # MDX module content
├── lib/
│   ├── mdx.ts            # MDX utilities
│   ├── search.ts         # Search logic
│   └── utils.ts          # Utility functions
├── types/
│   └── index.ts          # TypeScript types
├── hooks/
│   └── use-*.ts          # Custom React hooks
├── styles/
│   └── globals.css       # Global styles
├── public/
│   └── images/           # Static images
├── data/
│   ├── modules.ts        # Module definitions
│   ├── roadmap.ts        # Roadmap data
│   └── navigation.ts     # Navigation structure
└── docs/                 # Original markdown docs (to be migrated)
```

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Content**: [MDX](https://mdxjs.com/)
- **Syntax Highlighting**: [Shiki](https://shiki.matsu.io/)
- **Diagrams**: [Mermaid](https://mermaid.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## Development

### Running the Development Server

```bash
npm run dev
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Node.js:

- **Netlify**: Configure build command `npm run build` and publish directory `.next`
- **AWS Amplify**: Connect your GitHub repository
- **Railway**: One-click deploy from GitHub
- **Docker**: Build and run the production image

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ by DevSecOps Academy**
