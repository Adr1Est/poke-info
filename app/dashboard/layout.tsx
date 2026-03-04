import CustomLink from "@/components/shared/CustomLink";
import ThemeSelector from "@/components/shared/ThemeSelector";
import { Home, Info, List, Search } from "lucide-react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }){
  return (
    <div className="w-full min-h-screen flex flex-col-reverse md:flex-row">

      <div className="w-full md:w-1/6 md:min-h-screen flex md:flex-col items-center md:items-start justify-center gap-3 p-5">
        <div className="md:self-end">
          <ThemeSelector />
        </div>
        
        <CustomLink href="/" styles="flex gap-1">
          <Home/> <span className="sr-only md:not-sr-only">Home</span>
        </CustomLink>
        <CustomLink href="/dashboard" styles="flex gap-1">
          <Info /> <span className="sr-only md:not-sr-only">Start</span>
        </CustomLink>
        <CustomLink href="/dashboard/list" styles="flex gap-1">
          <List /> <span className="sr-only md:not-sr-only">Poke list</span>
        </CustomLink>
        <CustomLink href="/dashboard/find" styles="flex gap-1">
          <Search /> <span className="sr-only md:not-sr-only">Poke finder</span>
        </CustomLink>
      </div>

      <div className="w-5/6">
        {children}
      </div>
      
    </div>
  )
}