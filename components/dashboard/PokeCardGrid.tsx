import { BookOpenText } from "lucide-react";
import Link from "next/link";

interface Props {
  name: string;
}

export default function PokeCardGrid({name}: Props){
  return(
    <Link 
      href={`/dashboard/list/${name}`} 
      className="flex items-center justify-center border p-3 rounded-xl gap-1 hover:bg-input"
    >
      <BookOpenText />
      <h2>{name}</h2>
    </Link>
  )
}