import { ExternalLink, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface LinkCardProps {
  title: string
  description: string
  url: string
  icon: LucideIcon
  className?: string
  delay?: number
}

export function LinkCard({ title, description, url, icon: Icon, className, delay = 0 }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block p-6 bg-glass border border-glass backdrop-blur-glass rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-slide-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl" />
      
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex-shrink-0 p-3 bg-gradient-primary rounded-lg shadow-purple group-hover:animate-glow">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
            {description}
          </p>
        </div>
        
        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
      </div>
      
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  )
}