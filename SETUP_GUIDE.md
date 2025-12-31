# Vibin Richard - Portfolio

A modern, modular React portfolio built with Vite, TypeScript, and Tailwind CSS. Ready for [Aceternity UI](https://ui.aceternity.com/components) integration.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see your portfolio!

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📦 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library (ready for Aceternity UI)

## 🎨 Integrating Aceternity UI Components

This project is now **fully configured** to use Aceternity UI components! Here's how to add them:

### Step 1: Browse Components

Visit [Aceternity UI Components](https://ui.aceternity.com/components) and choose a component you like (e.g., Card Hover Effect, Animated Tabs, Floating Navbar, etc.)

### Step 2: Create UI Component Folder

```bash
mkdir src/components/ui
```

### Step 3: Copy Component Code

1. Click on the component you want
2. Copy the component code from the website
3. Create a new file in `src/components/ui/` (e.g., `card-hover-effect.tsx`)
4. Paste the code

### Step 4: Install Additional Dependencies (if needed)

Some components may require additional packages. Common ones:

```bash
npm install clsx tailwind-merge
npm install @tabler/icons-react  # For icon components
npm install class-variance-authority  # For some UI components
```

### Step 5: Use in Your Components

```tsx
import { CardHoverEffect } from './components/ui/card-hover-effect'

function MyComponent() {
  const items = [
    {
      title: "My Project",
      description: "A cool description",
      link: "#"
    }
  ]
  
  return <CardHoverEffect items={items} />
}
```

## 📁 Project Structure

```
vibin-follio/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── Header.tsx/css    - Navigation header
│   │   ├── Home.tsx/css      - Hero section
│   │   ├── About.tsx/css     - About section
│   │   ├── Skills.tsx/css    - Skills showcase
│   │   ├── Projects.tsx/css  - Projects portfolio
│   │   ├── Contact.tsx/css   - Contact information
│   │   └── ui/               - 🎨 Place Aceternity UI components here
│   ├── App.tsx          - Main app component
│   ├── main.tsx         - Entry point
│   └── index.css        - Global styles & animations
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

## ✨ Features

- ✅ Fully modular component structure
- ✅ TypeScript for type safety
- ✅ Tailwind CSS configured & ready
- ✅ Framer Motion installed
- ✅ Responsive design
- ✅ Smooth animations
- ✅ SEO friendly
- ✅ Fast HMR (Hot Module Replacement)

## 🎯 Suggested Aceternity UI Components to Try

Here are some components that would work great with your portfolio:

### For Hero Section (Home.tsx)
- **Text Generate Effect** - Animated text reveal
- **Typewriter Effect** - Typing animation
- **Background Boxes** - Animated background grid
- **Spotlight** - Spotlight effect

### For Projects (Projects.tsx)
- **Card Hover Effect** - 3D card hover animations
- **Bento Grid** - Modern grid layout
- **3D Card Effect** - Interactive 3D cards
- **Parallax Scroll** - Smooth parallax effect

### For Skills (Skills.tsx)
- **Animated Tooltip** - Hover tooltips
- **Progress Bars** - Animated skill bars
- **Card Stack** - Stacked card effect

### For Navigation (Header.tsx)
- **Floating Navbar** - Sticky animated navbar
- **Navbar Menu** - Dropdown menu effect

### For Contact (Contact.tsx)
- **Contact Form** - Animated form inputs
- **Hover Border Gradient** - Gradient border effects

## 🛠️ Utility Setup (Optional but Recommended)

Create a `lib/utils.ts` file for className merging (used by many Aceternity components):

```bash
mkdir src/lib
```

Create `src/lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Install dependencies:

```bash
npm install clsx tailwind-merge
```

## 🎨 Customizing Aceternity Components

Most Aceternity components use Tailwind classes, so you can easily customize them:

1. **Colors**: Update Tailwind classes in the component
2. **Sizes**: Modify width/height classes
3. **Animations**: Adjust Framer Motion props
4. **Timing**: Change animation duration/delay

## 📱 Responsive Design

All components are responsive by default. Test at different breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag & drop the `dist` folder to Netlify
```

### GitHub Pages

Update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/'
})
```

Then:

```bash
npm run build
git subtree push --prefix dist origin gh-pages
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this for your own portfolio

---

**Made with ❤️ by Vibin Richard**

Portfolio: Your awesome projects showcase
Tech Stack: React + TypeScript + Vite + Tailwind + Aceternity UI
