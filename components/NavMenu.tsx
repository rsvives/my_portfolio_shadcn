"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { MenuIcon } from "lucide-react";

export function NavMenu() {
    return (
        <header className="sticky top-0 w-[100%] flex p-4 backdrop-blur-sm justify-between z-20 items-center">
            <Link href="/" className="p-3">
                <span className="font-extrabold size-5">RSerrán</span>
            </Link>
            <NavigationMenu className="hidden sm:block">
                <NavigationMenuList>

                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Hello
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem >
                        <NavigationMenuTrigger>About me</NavigationMenuTrigger>
                        <NavigationMenuContent >
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                <ListItem href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/skills" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Skills
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* <NavigationMenuItem>
                        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>All the projects listed</NavigationMenuLink>
                            <Link href="/projects" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    see all
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuContent>
                    </NavigationMenuItem> */}

                </NavigationMenuList>
            </NavigationMenu>

            {/* <Button>contact</Button> */}
            <Drawer direction="right">
                <DrawerTrigger className="block sm:hidden">
                    <Button variant={'outline'}>
                        <MenuIcon />
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Menu</DrawerTitle>
                        <DrawerDescription>Where do you want to go?</DrawerDescription>
                        {/* <ul>
                            <ListItem href="/" title="Hello" >Nothing</ListItem>
                            <ListItem href="/skills" title="Skills" >Nothing</ListItem>
                        </ul> */}
                        <NavigationMenu  >
                            <NavigationMenuList className="flex flex-col" >

                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Hello
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem >
                                    <NavigationMenuTrigger>About me</NavigationMenuTrigger>
                                    <NavigationMenuContent >
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            <ListItem href="/docs" title="Introduction">
                                                Re-usable components built using Radix UI and Tailwind CSS.
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/skills" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Skills
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                {/* <NavigationMenuItem>
                        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>All the projects listed</NavigationMenuLink>
                            <Link href="/projects" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    see all
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuContent>
                    </NavigationMenuItem> */}

                            </NavigationMenuList>
                        </NavigationMenu>

                    </DrawerHeader>


                    <DrawerFooter>
                        footer
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </header >
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