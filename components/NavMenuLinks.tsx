import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
// import { DrawerClose } from "./ui/drawer";

type Props = {
    className?: string,
    isDrawerOpen: (state: boolean) => void
}
export function NavMenuLinks(props: Props) {
    const fullWidthMobile = useIsMobile() ? "width-100 text-left" : ""

    const links = [
        {
            text: 'Hello',
            href: '/'
        },
        {
            text: 'About me',
            href: '/about'
        },
        {
            text: 'Skills',
            href: '/skills'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
    ]
    // className={cn(props.className, 'flex-col')}
    // className={cn(fullWidthMobile, "w-100 flex flex-col items-stretch sm:flex-row sm:justify-end")} 

    const orientation = useIsMobile() ? 'vertical' : 'horizontal'
    return (
        <NavigationMenu className={cn(props.className, 'w-full max-w-none justify-center sm:justify-end mt-auto sm:mt-0')} orientation={orientation}>
            <NavigationMenuList asChild className="flex flex-col max-w-none items-center sm:flex-row sm:justify-end w-full ">
                <div className="w-100 flex">

                    {links.map(l =>

                        <NavigationMenuItem key={l.text} onClick={() => props.isDrawerOpen(false)} >
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()} >
                                <Link href={l.href} className={cn('active:bg-accent/50', fullWidthMobile)}>
                                    {l.text}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )}
                </div>



                {/* <NavigationMenuItem >
                    <NavigationMenuTrigger>About me</NavigationMenuTrigger>
                    <NavigationMenuContent className="top-0 right-0 left-auto" >
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            <ListItem href="/docs" title="Academic">
                            </ListItem>
                            <ListItem href="/docs" title="Work Expercience">
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem> */}
            </NavigationMenuList>
        </NavigationMenu >
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"