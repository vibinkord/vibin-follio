import './Header.css'
import { TextHoverEffect } from './ui/text-hover-effect'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <TextHoverEffect text="PORTFOLIO" />
      </div>
      <nav className="navbar">
        <a href="#home" style={{ '--i': 1 } as React.CSSProperties} className="active">
          HOME
        </a>
        <a href="#about" style={{ '--i': 2 } as React.CSSProperties}>
          ABOUT ME
        </a>
        <a href="#skills" style={{ '--i': 3 } as React.CSSProperties}>
          SKILLS
        </a>
        <a href="#portfolio" style={{ '--i': 4 } as React.CSSProperties}>
          PORTFOLIO
        </a>
        <a href="#projects" style={{ '--i': 4 } as React.CSSProperties}>
          Projects
        </a>
        <a href="#contact" style={{ '--i': 5 } as React.CSSProperties}>
          CONTACT
        </a>
      </nav>
    </header>
  )
}

export default Header
