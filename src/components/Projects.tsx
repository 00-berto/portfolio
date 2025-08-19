import ProjectOverview, {
  type Project,
} from "@/components/ProjectOverview.tsx";

export default function Projects() {
  const projects: Project[] = [
    {
      id: "fantasummer",
      name: "fantasummer",
      description:
        "A summer game which you can play with friends by completing challenges and competing for first place in the leaderboards.",
      images: ["landing", "challenges", "onboarding"],
      badges: [
        {
          text: "Unfinished",
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
      description:
        "This very website! In here I showcase all my work and show the world who I really am.",
      images: ["landing"],
      sourceLink: "https://github.com/00-berto/portfolio",
      projectLink: "https://00berto.vercel.app",
      libraries: ["vite", "shadcn"],
    },
    {
      id: "tunepilot",
      name: "tunepilot",
      description: "A simple music player for local files.",
      images: ["maze", "handyman", "cosby"],
      badges: [
        {
          text: "Unfinished",
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
