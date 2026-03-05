import CustomInput from "@/components/dashboard/CustomInput"

export default function FindGrid(){
  return(
    <div className="relative flex flex-col items-center justify-center w-full p-2 md:p-0 md:w-9/10 gap-1">
      <CustomInput />
      <p>/find</p>
    </div>
  )
}