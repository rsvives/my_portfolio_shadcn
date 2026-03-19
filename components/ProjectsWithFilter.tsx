'use client'
import { useState } from 'react'
import { Project } from '@/lib/definitions'
import { TechBadge } from '@/components/TechBadge'
import { ProjectListItem } from '@/components/ProjectListItem'

export function ProjectsWithFilter({ projects }: { projects: Project[] }) {
    const [selectedTechs, setSelectedTechs] = useState<Set<string>>(new Set())

    const allTechs = Array.from(new Set(projects.flatMap(p => p.techStack))).sort()

    function toggleTech(tech: string) {
        setSelectedTechs(prev => {
            const next = new Set(prev)
            if (next.has(tech)) next.delete(tech)
            else next.add(tech)
            return next
        })
    }

    const filtered = selectedTechs.size === 0
        ? projects
        : projects.filter(p => p.techStack.some(t => selectedTechs.has(t)))

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-wrap gap-2">
                {allTechs.map(tech => (
                    <TechBadge
                        key={tech}
                        tech={tech}
                        active={selectedTechs.has(tech)}
                        onClick={() => toggleTech(tech)}
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {filtered.map(p => (
                    <ProjectListItem key={p.name} project={p} showLinks={false} />
                ))}
            </div>
        </div>
    )
}
