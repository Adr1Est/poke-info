import CustomLink from "@/components/shared/CustomLink";
import ThemeSelector from "@/components/shared/ThemeSelector";
import { Home, List } from "lucide-react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }){
  return (
    <div className="w-full min-h-screen flex flex-row">

      <div className="w-1/4 min-h-screen flex flex-col items-start justify-center gap-3 p-5">
        <div className="self-end">
          <ThemeSelector />
        </div>
        
        <CustomLink href="/" styles="flex gap-1">
          <Home/> Home
        </CustomLink>
        <CustomLink href="/dashboard/list" styles="flex gap-1">
          <List /> Poke List
        </CustomLink>
      </div>

      <div className="w-3/4">
        {children}
      </div>
      
    </div>
  )
}