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
      className="md:w-40 h-15 flex items-center justify-center border p-3 rounded-xl gap-1 hover:bg-input"
    >
      <BookOpenText />
      <h2>{capitalize(name)}</h2>
    </Link>
  )
}