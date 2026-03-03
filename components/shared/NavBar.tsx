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
              <Link href="/">Home</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">LINK 2</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">LINK 3</Link>
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
