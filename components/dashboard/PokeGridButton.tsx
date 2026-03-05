import { ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  direction: "l" | "r";
  onClick: () => void;
  isDisabled: boolean;
}

export default function PokeGridButton({direction, onClick, isDisabled}: Props){
  return(
    <button
      onClick={onClick}
      className={`border rounded-full p-1 ${!isDisabled && "hover:bg-input"}`}
      disabled={isDisabled}
    >
      {
        direction === "l"
          ? <ChevronLeft className={`${isDisabled && "text-stone-700"}`}/>
          : <ChevronRight className={`${isDisabled && "text-stone-700"}`}/>
      }
    </button>
  )
}