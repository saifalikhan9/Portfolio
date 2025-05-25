import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

const projects = [
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
    link: "https://github.com/saifalikhan9/MCP-Server-of-X",
  },
  {
    title: "MCP Server Project",
    description:
      "This project is a Model Context Protocol (MCP) server that integrates with the Twitter API to allow users to create posts on Twitter directly from the server.",
    imageSrc: "/images/mcp.jpg",
    tags: [
     
      "TypeScript",
      "Twitter API",
      "Model Context Protocol SDK "
    ],
    link: "https://bill-splitter-app-sigma.vercel.app/",
  },
  {
    title: "Python Buddy",
    description:
      "An interactive Python tutor for students, featuring a chatbot that answers questions and a code playground to practice coding directly in the browser.",
    imageSrc: "/images/python.jpg",
    tags: ["React.js", "Prisma-ORM", "PostgresSQL", "Gemini SDK"],
    link: "https://python-tutor-project.onrender.com/",
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
