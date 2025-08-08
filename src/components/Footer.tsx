import Quotes, { friendQuotes } from "@/components/Quotes.tsx";
import SpotifyIcon from "@/components/icons/SpotifyIcon.tsx";
import InstagramIcon from "@/components/icons/InstagramIcon.tsx";
import GithubIcon from "@/components/icons/GithubIcon.tsx";

export default function Footer() {
  return (
    <div className="w-full sm:flex hidden flex-col backdrop-blur-xl">
      <div className="bg-accent/50 px-4 py-6 flex flex-row items-center justify-between border-t border-black/20 dark:border-white/20">
        <div className="flex flex-row gap-3 items-center">
          <img
            alt={"berto memoji"}
            src={"/memoji.png"}
            className={"size-12 select-none"}
          />
          <div className="flex flex-col gap-0">
            <div
              className={"text-xl text-primary font-extrabold sm:block hidden"}
            >
              berto
            </div>
            {/*<div className={"uppercase font-black text-xs text-black/30 dark:text-white/30 sm:block hidden"}>portfolio</div>*/}
          </div>
        </div>

        <div className="flex flex-row gap-5 text-accent-foreground">
          <a
            href={"https://github.com/00-berto"}
            target={"_blank"}
            className={"clickable"}
          >
            <GithubIcon
              className={"size-8 transition-all ease-out duration-100"}
            />
          </a>
          <a
            href={"https://instagram.com/albertocornacchia_"}
            target={"_blank"}
            className={"clickable"}
          >
            <InstagramIcon
              className={"size-8 transition-all ease-out duration-100"}
            />
          </a>
          <a
            href={
              "https://open.spotify.com/user/31f2s2nnbfnjtab5cr77ofnwvdna?si=8d29e6b79c164b3a"
            }
            target={"_blank"}
            className={"clickable"}
          >
            <SpotifyIcon
              className={"size-8 transition-all ease-out duration-100"}
            />
          </a>
        </div>
      </div>

      <div className=" flex flex-col gap-12 bg-background px-4 py-6 text-black/50 dark:text-white/50 font-bold text-sm">
        <div className="sm:w-2/3 w-full">
          <Quotes quotes={friendQuotes} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="uppercase">
            {/*©*/}
            2025 NAUPLIA. tutti i diritti riservati.
          </div>
          {/*<div className="flex flex-row gap-5 items-center sm:text-sm text-xs">*/}
          {/*  <button*/}
          {/*    className={*/}
          {/*      "hover:text-black/70 dark:hover:text-white/70 transition-all ease-out duration-100 clickable"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    Crediti*/}
          {/*  </button>*/}
          {/*  <button*/}
          {/*    className={*/}
          {/*      "hover:text-black/70 dark:hover:text-white/70 transition-all ease-out duration-100 clickable"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    Contattaci*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}
