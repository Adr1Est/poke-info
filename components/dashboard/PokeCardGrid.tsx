import { capitalize } from "@/lib/capitalize";
import { BookOpenText } from "lucide-react";
import Link from "next/link";

interface Props {
  name: string;
}

export default function PokeCardGrid({name}: Props){
  return(
    <Link 
      href={`/dashboard/list/${name}`} 
      className="relative group md:w-40 h-20 flex items-center justify-center border p-3 rounded-xl gap-1 hover:bg-linear-to-r from-input-700 to-orange-500 overflow-hidden"
    >
      <div className="absolute opacity-10 right-20 rotate-20 group-hover:opacity-35 group-hover:rotate-0 transition-all duration-500">
        <BookOpenText size={100}/>
      </div>
      <h2 className="font-semibold">{capitalize(name)}</h2>
    </Link>
  )
}