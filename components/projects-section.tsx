import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

const projects = [
  {
    title: "Resume Roaster",
    description:
      "A Next.js app that humorously roasts resumes using OpenAI and Gemini LLMs. Features smart resume parsing, a clean Tailwind CSS UI, and witty, context-aware feedback that makes resume reviews fun and engaging.",
    imageSrc: "/images/resumeRoast.png",
    tags: ["Next.js", "Node.js", "Express.js", "Gemini SDK", "Redis"],
    link: "https://roast-resume-frontend.vercel.app/",
  },
  {
    title: "Bill Splitting Tool",
    description:
      "A tool to fairly divide electricity bills among flats based on meter readings, ensuring transparent and accurate cost sharing with a user-friendly interface.",
    imageSrc: "/images/Bill.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma-ORM",
      "PostgresSQL",
      "Shadcn UI",
    ],
    link: "https://bill-splitter-app-sigma.vercel.app/",
  },
  {
    title: "MCP Server Project",
    description:
      "This project is a Model Context Protocol (MCP) server that integrates with the Twitter API to allow users to create posts on Twitter directly from the server.",
    imageSrc: "/images/mcp.jpg",
    tags: ["TypeScript", "Twitter API", "Model Context Protocol SDK "],
    link: "https://github.com/saifalikhan9/MCP-Server-of-X",
  },

  {
    title: "Chrome Extention",
    description:
      "Chrome extension provides AI-powered hints and code suggestions directly on LeetCode, helping users solve problems more efficiently with real-time, in-browser assistance.",
    imageSrc: "/images/extention.jpg",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "OpenAI",
      "TypeScript",
      "TaitwindCSS",
    ],
    link: "https://github.com/saifalikhan9/Extention",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/10 rounded">
      <div className="container">
        <SectionHeading
          title="Selected Projects"
          subtitle="Showcasing my recent work and creative solutions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
