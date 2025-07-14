import { Button } from "@/components/ui/button.tsx";
import { Code2Icon, GlobeIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel.tsx";

export interface Project {
    id: string,
    name: string
}

export default function ProjectOverview() {
    return (
        <div className={"flex flex-col gap-0 rounded-xl w-96 bg-secondary/50 overflow-clip"}>
            <Carousel className={"group"}>
                <CarouselPrevious className={"left-4 z-100 transition-all -translate-x-12 group-hover:translate-x-0 ease-out duration-100"}/>
                <CarouselContent className={"gap-0 ml-0 relative"}>
                    <CarouselItem className={"pl-0 inset"}>
                        <img src={"/projects/fantasummer/banner_landing.png"} alt={"fantasummer banner"} className="w-full h-auto aspect-video"/>
                    </CarouselItem>
                    <CarouselItem className={"pl-0 inset"}>
                        <img src={"/projects/fantasummer/banner_challenges.png"} alt={"fantasummer banner"} className="w-full h-auto aspect-video"/>
                    </CarouselItem>
                    <CarouselItem className={"pl-0 inset"}>
                        <img src={"/projects/fantasummer/banner_onboarding.png"} alt={"fantasummer banner"} className="w-full h-auto aspect-video"/>
                    </CarouselItem>
                </CarouselContent>
                <CarouselNext className={"right-4 z-100 transition-all translate-x-12 group-hover:translate-x-0 ease-out duration-100"}/>
            </Carousel>
            <div className="flex flex-col gap-4 relative h-full p-3 pt-4 border border-t-0 rounded-b-xl">
                <img draggable={false} src={"/projects/fantasummer/icon.png"} alt={"fantasummer icon"} className="absolute -top-12 left-4 rounded-xl size-16 object-cover shadow-[0px_0px_16px_rgba(0,0,0,0.25)]" />
                <div className="flex flex-col gap-2 p-3">
                    <div className="text-secondary-foreground text-2xl font-bold">fantasummer</div>
                    <div className="text-secondary-foreground text-sm font-regular">
                        alright so this should just be a description of my project i want to write a lot of text so it goes multiline i love yall
                    </div>
                </div>
                <div className="w-full flex flex-row items-end justify-end gap-2">
                    <Button size={"sm"} variant={"outline"}>View source <Code2Icon/></Button>
                    <Button size={"sm"}>Go to Project <GlobeIcon/></Button>
                </div>
            </div>
        </div>
    )
}