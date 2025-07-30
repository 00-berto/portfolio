import ProjectOverview, {
  type Project,
} from "@/components/ProjectOverview.tsx";
import GithubIcon from "@/components/icons/GithubIcon.tsx";
import InstagramIcon from "@/components/icons/InstagramIcon.tsx";
import SpotifyIcon from "@/components/icons/SpotifyIcon.tsx";
import { ArrowDownIcon } from "lucide-react";
// import Cursor from "@/components/Cursor.tsx";
import AnimatedSubtitle from "@/components/AnimatedSubtitle.tsx";
import Footer from "@/components/Footer.tsx";

export default function App() {
  const projects: Project[] = [
    {
      id: "fantasummer",
      name: "fantasummer",
      description:
        "a summer game which you can play with friends by completing challenges and competing for first place in the leaderboards",
      images: ["landing", "challenges", "onboarding"],
      badges: [
        {
          text: "Closed Beta",
        },
      ],
    },
    {
      id: "sticky",
      name: "Sticky (V2)",
      description:
        "dumb unfinished sticky note app built with electron and vite (dont ask about v1. we dont talk about v1.)",
      images: ["sticky"],
      badges: [
        {
          text: "Unfinished",
        },
      ],
      sourceLink: "https://github.com/00-berto/sticky-v2",
    },
    {
      id: "portfolio",
      name: "Portfolio",
      description:
        "This very website! In here I showcase all my work and show the world who I really am.",
      images: ["landing"],
    },
    {
      id: "tunepilot",
      name: "tunepilot",
      description: "A music player for local files, with Discord integration.",
      images: ["maze", "handyman", "cosby"],
      badges: [
        {
          text: "Unfinished",
        },
      ],
      sourceLink: "https://github.com/00-berto/tunepilot",
      downloadLink: "https://github.com/00-berto/tunepilot/releases",
    },
  ];

  return (
    <>
      {/*<Cursor />*/}
      <div
        className={
          "flex flex-col min-h-screen items-center justify-center bg-background selection:bg-accent-foreground selection:text-background"
        }
      >
        <div className="h-screen w-screen flex flex-row p-0 gap-0 relative">
          <div className="w-1/2 h-full flex items-center justify-start p-32">
            <div className="clickable flex flex-col gap-12 items-start text-left">
              <div className="flex flex-col gap-2 items-start text-left">
                <div className="text-7xl text-foreground font-black">berto</div>
                <AnimatedSubtitle />
              </div>
              <div className="flex flex-row gap-4">
                <a
                  href={"https://github.com/00-berto"}
                  target={"_blank"}
                  className="clickable hover:underline flex flex-row gap-1 items-center justify-start text-foreground text-lg font-bold"
                >
                  <GithubIcon className={"size-5 my-auto"} />
                  github
                </a>

                <a
                  href={"https://instagram.com/albertocornacchia_"}
                  target={"_blank"}
                  className="clickable hover:underline flex flex-row gap-1 items-center justify-start text-foreground text-lg font-bold"
                >
                  <InstagramIcon className={"size-5 my-auto"} />
                  instagram
                </a>

                <a
                  href={
                    "https://open.spotify.com/user/31f2s2nnbfnjtab5cr77ofnwvdna?si=8d29e6b79c164b3a"
                  }
                  target={"_blank"}
                  className="clickable hover:underline flex flex-row gap-1 items-center justify-start text-foreground text-lg font-bold"
                >
                  <SpotifyIcon className={"size-5 my-auto"} />
                  spotify
                </a>
              </div>
            </div>
          </div>

          <div className="w-1/2 h-full flex items-center justify-center">
            <img
              draggable={false}
              src={"/memoji.png"}
              alt={"berto memoji"}
              className={"size-64 aspect-square object-cover"}
            />
          </div>

          <div className="absolute left-0 right-0 bottom-8 items-center justify-center flex">
            <ArrowDownIcon
              className={"size-8 text-foreground animate-bounce"}
            />
          </div>
        </div>
        <div className="flex-row gap-3 justify-start w-full pt-12 p-3 grid-cols-3 grid">
          {projects.map((project, index) => (
            <ProjectOverview key={index} project={project} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
