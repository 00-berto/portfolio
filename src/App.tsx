import ProjectOverview, { type Project } from "@/components/ProjectOverview.tsx";

export default function App() {
    const projects: Project[] = [
        {
            id: "fantasummer",
            name: "fantasummer",
            description: "a summer game which you can play with friends by completing challenges and competing for first place in the leaderboards",
            images: [
                "landing",
                "challenges",
                "onboarding"
            ],
            badges: [
                {
                    text: "Closed Beta"
                }
            ]
        },
        {
            id: "sticky",
            name: "Sticky (V2)",
            description: "dumb unfinished sticky note app built with electron and vite (dont ask about v1. we dont talk about v1.)",
            images: [
                "sticky"
            ],
            badges: [
                {
                    text: "Unfinished",
                }
            ],
            sourceLink: "https://github.com/00-berto/sticky-v2"
        }
    ]

    return (
        <div className={"flex flex-row min-h-screen items-center justify-center bg-background"}>
            <div className="flex flex-row gap-3">
                {projects.map((project, index) => (
                    <ProjectOverview key={index} project={project}/>
                ))}
            </div>
        </div>
    )
}