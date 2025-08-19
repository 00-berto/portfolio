import ProjectOverview, {
  type Project,
} from "@/components/ProjectOverview.tsx";

export default function Projects() {
  const projects: Project[] = [
    {
      id: "fantasummer",
      name: "fantasummer",
      description:
        "Gioco estivo in cui completi sfide per raggiungere il primo posto nelle classifiche, superando tutti i tuoi amici.",
      images: ["landing", "challenges", "onboarding"],
      badges: [
        {
          text: "Non Finito",
        },
      ],
      libraries: [
        "next",
        "nextauth",
        "redux",
        "prisma",
        "postgresql",
        "shadcn",
      ],
    },
    // {
    //   id: "sticky",
    //   name: "Sticky (V2)",
    //   description:
    //     "dumb unfinished sticky note app built with electron and vite (dont ask about v1. we dont talk about v1.)",
    //   images: ["sticky"],
    //   badges: [
    //     {
    //       text: "Unfinished",
    //     },
    //   ],
    //   sourceLink: "https://github.com/00-berto/sticky-v2",
    //   libraries: ["vite", "electron", "redux", "shadcn"],
    // },
    {
      id: "portfolio",
      name: "Portfolio",
      description: "Proprio questo sito!",
      images: ["landing"],
      sourceLink: "https://github.com/00-berto/portfolio",
      projectLink: "https://berto.life",
      libraries: ["vite", "shadcn"],
    },
    {
      id: "tunepilot",
      name: "tunepilot",
      description: "Semplice app per ascoltare musica locale.",
      images: ["maze", "handyman", "cosby"],
      badges: [
        {
          text: "Non Finito",
        },
      ],
      sourceLink: "https://github.com/00-berto/tunepilot",
      downloadLink: "https://github.com/00-berto/tunepilot/releases",
      libraries: ["vite", "electron", "redux"],
    },
  ];

  return (
    <div className="gap-3 justify-start w-full pt-12 p-3 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid">
      {projects.map((project, index) => (
        <ProjectOverview key={index} project={project} />
      ))}
    </div>
  );
}
