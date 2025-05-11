import { Badge } from "./ui/badge";

export function SkillsSection() {
  const skills = [
    "C++","Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "MongoDB",
    "Express.js",
    "Node.js",
    "TailwindCSS",
    "TypeScript",
    "Next.js",
    "SQL",
    "Prisma-ORM",
    "CI/CD",
    "AWS",
    "Docker"
  ];
  return (
    <div className="container mx-auto ">
      <h2 className="mb-10">Skills</h2>
      {skills.map((v, i) => (
        <Badge
          key={i}
          variant={"outline"}
          className="bg-muted/70 mx-1 m-1 p-1 font-bold"
        >
          {v}
        </Badge>
      ))}
    </div>
  );
}
