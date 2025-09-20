import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  linkText: string
  href?: string
  onClick?: () => void
}

export function ProjectCard({ title, description, linkText, href, onClick }: ProjectCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Card className="group hover:bg-card/80 transition-all duration-300 border-border/50">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <button
          onClick={handleClick}
          className="text-primary hover:text-primary/80 cursor-pointer inline-flex items-center text-sm transition-colors"
          aria-label={`${linkText} for ${title}`}
        >
          {linkText} <ExternalLink className="ml-1 h-3 w-3" />
        </button>
      </CardContent>
    </Card>
  )
}
