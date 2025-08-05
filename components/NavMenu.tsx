"use client"
import Link from "next/link";
import { Button } from "./ui/button";

import React, { useState } from "react";

import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { MenuIcon, X } from "lucide-react";
import { NavMenuLinks } from "./NavMenuLinks";
import { ToggleThemeButton } from "./ToggleThemeButton";

export function NavMenu() {

    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = (state = false) => {
        setOpen(state)
    }
    return (
        <header className="sticky top-0 w-[100%] flex p-4 backdrop-blur-lg justify-between z-20 items-center">
            <Link href="/" className="p-3">
                <span className="font-extrabold size-5">RSerrán</span>
            </Link>
            <NavMenuLinks className="hidden sm:flex sm:ml-auto" isDrawerOpen={handleOpen} />

            <ToggleThemeButton className="ml-auto mr-2 sm:mr-0 sm:ml-2 hover:cursor-pointer"></ToggleThemeButton>

            <Drawer direction="right" open={open} dismissible onOpenChange={setOpen} handleOnly >
                <DrawerTrigger className="block sm:hidden" asChild>
                    <Button variant={'outline'} onClick={() => setOpen((state) => !state)}>
                        <MenuIcon />
                    </Button>
                </DrawerTrigger>

                <DrawerContent className="max-w-[200px]" aria-description="menu">
                    <DrawerHeader className="flex flex-col flex-1">
                        <div className="flex flex-row justify-between">
                            <DrawerTitle className="text-center">Menu</DrawerTitle>
                            <DrawerClose asChild>
                                <Button variant="outline"><X /></Button>
                            </DrawerClose>
                        </div>
                        <NavMenuLinks isDrawerOpen={handleOpen} />
                    </DrawerHeader>



                    <DrawerFooter>
                        <ToggleThemeButton className="ml-auto mr-2 sm:mr-0 sm:ml-2 hover:cursor-pointer"></ToggleThemeButton>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </header >
    )

}

