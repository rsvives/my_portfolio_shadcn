'use client'
import StackIcon, { IconName } from 'tech-stack-icons'
import { Badge } from '@/components/ui/badge'
import { getTechIconName } from '@/lib/tech-icons'
import { cn } from '@/lib/utils'

type TechBadgeProps = {
    tech: string
    label?: string
    variant?: 'default' | 'outline' | 'secondary'
    active?: boolean
    onClick?: () => void
    className?: string
}

export function TechBadge({ tech, label, variant = 'outline', active = false, onClick, className }: TechBadgeProps) {
    const iconName = getTechIconName(tech)

    return (
        <Badge
            variant={active ? 'default' : variant}
            className={cn(
                'rounded-full flex items-center gap-1',
                onClick && 'cursor-pointer',
                className
            )}
            onClick={onClick}
        >
            {iconName && (
                <span className="w-3.5 h-3.5 inline-flex shrink-0 items-center">
                    <StackIcon name={iconName as IconName} />
                </span>
            )}
            {label ?? tech}
        </Badge>
    )
}
