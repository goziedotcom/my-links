import { Github, Linkedin, Twitter, FileText, Globe, Hash, ArrowUpRight } from "lucide-react"
import { LinkCard } from "@/components/link-card"
import { ProfileSection } from "@/components/profile-section"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  {
    title: "Portfolio",
    description: "My personal portfolio and projects showcase",
    url: "https://gozieihejirika.com",
    icon: Globe,
  },
  {
    title: "GitHub",
    description: "Open source projects and contributions",
    url: "https://github.com/goziedotcom",
    icon: Github,
  },
  {
    title: "LinkedIn",
    description: "Professional network and experience",
    url: "https://linkedin.com/in/goziedotcom",
    icon: Linkedin,
  },
  {
    title: "Twitter",
    description: "Thoughts, insights, and tech discussions",
    url: "https://twitter.com/goziedotcom",
    icon: Twitter,
  },
  {
    title: "Medium",
    description: "Technical articles and tutorials",
    url: "https://medium.com/@goziedotcom",
    icon: FileText,
  },
  {
    title: "Hashnode",
    description: "Developer blog and tech insights",
    url: "https://goziedotcom.hashnode.dev",
    icon: Hash,
  },
]

const Index = () => {
  return (
    <>
      <ThemeToggle />

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Profile Section */}
          <ProfileSection />

          {/* Links Grid */}
          <div className="space-y-4">
            {links.map((link, index) => (
              <LinkCard
                key={link.title}
                title={link.title}
                description={link.description}
                url={link.url}
                icon={link.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Index