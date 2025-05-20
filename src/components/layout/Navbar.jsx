"use client";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className="bg-white shadow-sm px-6 py-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-2">
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/dashboard"
                                aria-current="page"
                                className="px-4 py-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition"
                            >
                                Dashboard
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/job"
                                className="px-4 py-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition"
                            >
                                Jobs
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="/profile.jpg" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    {pathname !== "/job/create" && (
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md font-semibold">
                            <Link href="/job/create">Create Job</Link>
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
}
