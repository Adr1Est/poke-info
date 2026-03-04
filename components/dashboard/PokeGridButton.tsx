import { ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  direction: "l" | "r";
  onClick: () => void;
}

export default function PokeGridButton({direction, onClick}: Props){
  return(
    <button
      onClick={onClick}
      className="border rounded-full p-1 hover:bg-input"
    >
      {
        direction === "l"
          ? <ChevronLeft />
          : <ChevronRight />
      }
    </button>
  )
}