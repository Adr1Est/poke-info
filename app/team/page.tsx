import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import styles from "./team.module.css"

const leadDeveloper: {
  name: string
  role: string
  bio: string
  avatar: string
  image?: string
  color: string
  links: {
    github: string
    linkedin: string
    portfolio: string
  }
} = {
  name: "Adrián Estévez",
  role: "Front-end developer",
  bio: "Front-end developer passionate about React, TypeScript, and creating exceptional user experiences.",
  avatar: "AE",
  image: "https://avatars.githubusercontent.com/u/100156445?v=4",
  color: "from-red-500 to-orange-500",
  links: {
    github: "https://github.com/Adr1Est",
    linkedin: "https://www.linkedin.com/in/adrianestevezsalamanca/",
    portfolio: "https://www.adrianestevezs.dev/"
  }
}

const socialIcons = {
  github: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  portfolio: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/>
    </svg>
  )
}

export default function TeamPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-background">
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-linear-to-br from-primary/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-linear-to-tl from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className={`relative z-10 w-full max-w-md ${styles.animateSlideUp}`}>
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-medium tracking-widest uppercase bg-primary/10 text-primary rounded-full">
            The Team
          </span>
        </div>

        <div className="relative p-8 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm shadow-xl">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-2xl" />
          
          <div className="relative flex flex-col items-center text-center">
            {leadDeveloper.image ? (
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image
                  src={leadDeveloper.image}
                  alt={leadDeveloper.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            ) : (
              <div className={`w-24 h-24 rounded-2xl bg-linear-to-br ${leadDeveloper.color} flex items-center justify-center text-white font-black text-3xl shadow-lg mb-6`}>
                {leadDeveloper.avatar}
              </div>
            )}
            
            <h2 className="text-2xl font-bold text-foreground mb-1">
              {leadDeveloper.name}
            </h2>
            <p className="text-sm font-medium text-primary/80 mb-4">
              {leadDeveloper.role}
            </p>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              {leadDeveloper.bio}
            </p>
            
            <div className="flex items-center gap-2 mb-6">
              <a
                href={leadDeveloper.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                {socialIcons.github}
              </a>
              <a
                href={leadDeveloper.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                {socialIcons.linkedin}
              </a>
              <a
                href={leadDeveloper.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Portfolio"
              >
                {socialIcons.portfolio}
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">
                  Home
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/dashboard">
                  Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Built with care using Next.js, TypeScript & Tailwind
        </p>
      </div>
    </div>
  )
}
