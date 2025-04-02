"use client"
import Link from "next/link";
import { Button } from "./ui/button";

import React from "react";

import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { MenuIcon } from "lucide-react";
import { NavMenuLinks } from "./NavMenuLinks";

export function NavMenu() {
    return (
        <header className="sticky top-0 w-[100%] flex p-4 backdrop-blur-lg justify-between z-20 items-center">
            <Link href="/" className="p-3">
                <span className="font-extrabold size-5">RSerrán</span>
            </Link>
            <NavMenuLinks className="hidden sm:flex" />

            {/* <Button>contact</Button> */}
            <Drawer direction="right" >
                <DrawerTrigger className="block sm:hidden" asChild>
                    <Button variant={'outline'}>
                        <MenuIcon />
                    </Button>
                </DrawerTrigger>
                <DrawerContent >
                    <DrawerHeader>
                        <DrawerTitle>Menu</DrawerTitle>
                        <DrawerDescription hidden>Where do you want to go?</DrawerDescription>
                        {/* <ul>
                            <ListItem href="/" title="Hello" >Nothing</ListItem>
                            <ListItem href="/skills" title="Skills" >Nothing</ListItem>
                        </ul> */}

                        <NavMenuLinks className="max-w-auto w-[100%]" />
                    </DrawerHeader>


                    <DrawerFooter>
                        {/* footer */}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </header >
    )

}

