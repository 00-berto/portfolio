import GithubIcon from "@/components/icons/GithubIcon.tsx";
import InstagramIcon from "@/components/icons/InstagramIcon.tsx";
import SpotifyIcon from "@/components/icons/SpotifyIcon.tsx";
import { ArrowDownIcon } from "lucide-react";
import AnimatedSubtitle from "@/components/AnimatedSubtitle.tsx";
import Footer from "@/components/Footer.tsx";
import Projects from "@/components/Projects.tsx";

export default function App() {
  return (
    <>
      <div
        className={
          "flex flex-col min-h-screen items-center justify-center bg-background selection:bg-accent-foreground selection:text-background"
        }
      >
        <div className="h-screen w-full flex flex-row p-0 gap-0 relative">
          <div className="w-full h-full flex items-center justify-start p-32">
            <div className="clickable flex flex-col gap-12 items-start text-left">
              <div className="flex flex-col gap-2 items-start text-left">
                <div className="text-7xl text-foreground font-black">
                  berto™
                </div>
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

          <div className="w-full h-full flex items-center justify-center">
            <img
              draggable={false}
              src={"/memoji.png"}
              alt={"berto memoji"}
              className={"size-64 aspect-square object-cover select-none"}
            />
          </div>

          <div className="absolute left-0 right-0 bottom-8 items-center justify-center flex">
            <ArrowDownIcon
              className={"size-8 text-foreground animate-bounce"}
            />
          </div>
        </div>
        <Projects />
        <Footer />
      </div>
    </>
  );
}
