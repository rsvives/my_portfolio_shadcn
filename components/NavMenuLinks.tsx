import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function NavMenuLinks({ className }: { className: string }) {
    const fullWidthMobile = useIsMobile() ? "text-left" : ""

    return (
        <NavigationMenu className={className} >
            <NavigationMenuList className={cn(fullWidthMobile, "flex flex-col sm:flex-row")} >

                <NavigationMenuItem className={fullWidthMobile}>
                    <Link href="/" legacyBehavior passHref className={fullWidthMobile}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>

                            Hello

                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

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

                <NavigationMenuItem>
                    <Link href="/skills" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Skills
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/projects" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Projects
                        </NavigationMenuLink>
                    </Link>
                    {/* <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                <NavigationMenuContent className=" w-[400px]">
                    <NavigationMenuLink>All the projects listed</NavigationMenuLink>
                    <Link href="/projects" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            see all
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuContent> */}
                </NavigationMenuItem>

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