"use client"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ThemeSelector from "@/components/shared/ThemeSelector"

export function NavBar() {
  return (
    <NavigationMenu className="max-h-15">
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Options
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/dashboard" className="bg-popover">Dashboard</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/" className="bg-popover">Team</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <ThemeSelector/>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}
