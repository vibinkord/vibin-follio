# Aceternity UI Integration Example

## Quick Start: Adding Your First Component

Let's add the **Card Hover Effect** component to your Projects section as an example.

### Step 1: Install Required Dependencies

```bash
npm install clsx tailwind-merge
```

### Step 2: Create the Component

Create `src/components/ui/card-hover-effect.tsx` and paste the component code from Aceternity UI.

### Step 3: Update Your Projects Component

Replace your Projects.tsx with:

```tsx
import { HoverEffect } from '../ui/card-hover-effect'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Language Translator Platform',
      description: 'Developed a web-based translation solution bridging Tamil and English for academic, professional, and daily needs.',
      link: '#',
    },
    {
      title: 'Hotel Menu QR Scanner (Patent)',
      description: 'Designed and co-invented a patented QR-based digital menu system for the hospitality industry.',
      link: '#',
    },
    // ... more projects
  ]

  return (
    <section id="projects" className="projects-section">
      <h2>Main Projects</h2>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  )
}

export default Projects
```

## Other Recommended Components

### 1. Text Generate Effect (for Home section)

```tsx
import { TextGenerateEffect } from './components/ui/text-generate-effect'

// In your Home component
<TextGenerateEffect words="Hello, I'm Vibin Richard" />
```

### 2. Floating Navbar (replace Header)

```tsx
import { FloatingNav } from './components/ui/floating-navbar'

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
]

<FloatingNav navItems={navItems} />
```

### 3. Spotlight (background effect for Home)

```tsx
import { Spotlight } from './components/ui/spotlight'

// In your Home component
<section className="home" id="home">
  <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />
  {/* ... rest of your content */}
</section>
```

## Tips

1. **Always check dependencies** - Each component page on Aceternity UI lists required packages
2. **Customize with Tailwind** - All components use Tailwind CSS classes
3. **Adjust animations** - Modify Framer Motion props to suit your needs
4. **Test responsiveness** - Check on mobile, tablet, and desktop

## Resources

- [Aceternity UI Components](https://ui.aceternity.com/components)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
