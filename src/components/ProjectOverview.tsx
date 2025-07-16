import { Button } from "@/components/ui/button.tsx";
import { Code2Icon, GlobeIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.tsx";
import clsx from "clsx";
import { Badge } from "@/components/ui/badge.tsx";

export interface Project {
  id: string;
  name: string;
  description?: string;
  sourceLink?: string;
  projectLink?: string;
  images: string[];
  darkMode?: boolean;
  badges?: {
    text: string;
    variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | null
      | undefined;
    className?: string;
  }[];
}

export default function ProjectOverview({ project }: { project: Project }) {
  return (
    <div
      className={
        "flex flex-col gap-0 rounded-xl w-96 bg-secondary/50 overflow-clip"
      }
    >
      {project.images.length > 1 ? (
        <Carousel className={"group"}>
          <CarouselPrevious
            className={
              "left-4 z-100 transition-all -translate-x-12 group-hover:translate-x-0 ease-out duration-100"
            }
          />
          <CarouselContent className={"gap-0 ml-0 relative"}>
            {project.images.map((image, index) => (
              <CarouselItem key={index} className={"pl-0 inset"}>
                <img
                  draggable={false}
                  src={`/projects/${project.id}/banner_${image}${project.darkMode ? "_dark" : ""}.png`}
                  alt={`${project.name} banner, image ${image}`}
                  className="w-full h-auto aspect-video select-none"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext
            className={
              "right-4 z-100 transition-all translate-x-12 group-hover:translate-x-0 ease-out duration-100"
            }
          />
        </Carousel>
      ) : (
        <img
          draggable={false}
          src={`/projects/${project.id}/banner_${project.images[0]}.png`}
          alt={`${project.name} banner, image ${project.images[0]}`}
          className="w-full h-auto aspect-video select-none"
        />
      )}
      <div className="flex flex-col gap-4 relative h-full p-3 pt-4 border border-t-0 rounded-b-xl">
        <img
          draggable={false}
          src={`/projects/${project.id}/icon${project.darkMode ? "_dark" : ""}.png`}
          alt={`${project.name} icon`}
          className={clsx(
            {
              "shadow-[0px_0px_16px_rgba(256,256,256,0.25)]": project.darkMode,
            },
            { "shadow-[0px_0px_16px_rgba(0,0,0,0.25)]": !project.darkMode },
            "absolute -top-12 left-4 rounded-xl size-16 object-cover select-none aspect-square",
          )}
        />
        <div className="flex flex-col gap-2 p-3">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-secondary-foreground text-2xl font-bold">
              {project.name}
            </div>
            <div className="flex flex-row gap-1">
              {project.badges &&
                project.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant={badge.variant}
                    className={badge.className}
                  >
                    {badge.text}
                  </Badge>
                ))}
            </div>
          </div>
          <div
            className={clsx(
              { italic: !project.description },
              "text-secondary-foreground text-sm font-regular",
            )}
          >
            {project.description ?? "No description provided."}
          </div>
        </div>
        {(project.sourceLink || project.projectLink) && (
          <div className="w-full flex flex-row items-end justify-end gap-2">
            {project.sourceLink && (
              <Button size={"sm"} variant={"outline"} asChild>
                <a href={project.sourceLink}>
                  Source code
                  <Code2Icon />
                </a>
              </Button>
            )}
            {project.projectLink && (
              <Button size={"sm"} asChild>
                <a href={project.projectLink}>
                  Go to Project <GlobeIcon />
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
