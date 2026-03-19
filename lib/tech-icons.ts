const TECH_ICON_MAP: Record<string, string> = {
    // Frontend
    'React': 'react',
    'Vue': 'vuejs',
    'Nuxt': 'nuxtjs',
    'Nuxtjs': 'nuxtjs',
    'Next.js': 'nextjs',
    'Nextjs': 'nextjs',
    'Javascript': 'js',
    'JavaScript': 'js',
    'Typescript': 'typescript',
    'TypeScript': 'typescript',
    'Tailwind': 'tailwindcss',
    'shadcn/ui': 'shadcnui',
    'ShadCN': 'shadcnui',
    'Redux': 'redux',
    'GraphQL': 'graphql',
    'React Native': 'reactnative',
    'TanStack Query': 'tanstack',
    'TanStack Router': 'tanstack',
    'ReactQuery': 'reactquery',
    'Bootstrap': 'bootstrap5',
    'Vuetify': 'vuetify',
    'jQuery': 'jquery',
    // Backend
    'NodeJS': 'nodejs',
    'Node.js': 'nodejs',
    'Express': 'expressjs',
    'Laravel': 'laravel',
    'PHP': 'php',
    'Python': 'python',
    'Deno': 'deno',
    'Socket.io': 'socketio',
    'Java': 'java',
    // Database
    'MySQL': 'mysql',
    'MongoDB': 'mongodb',
    'Supabase': 'supabase',
    'Prisma': 'prisma',
    'PostgreSQL': 'postgresql',
    'Redis': 'redis',
    // DevOps / Tooling
    'Docker': 'docker',
    'Jest': 'jest',
    'Cypress': 'cypress',
    'AWS': 'aws',
    'Git': 'git',
    'Github': 'github',
    // UX/UI
    'Figma': 'figma',
    'Photoshop': 'photoshop',
    'Illustrator': 'adobeillustrator',
    // Misc
    'HTML': 'html5',
    'CSS': 'css3',
    'Cloudflare': 'cloudflare',
    'zod': 'zod',
    'Vercel': 'vercel',
}

export function getTechIconName(tech: string): string | undefined {
    return TECH_ICON_MAP[tech]
}
