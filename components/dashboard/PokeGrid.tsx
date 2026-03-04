"use client"
import PokeCardGrid from "./PokeCardGrid";
import PokeGridButton from "./PokeGridButton";

export default function PokeGrid(){
  return(
    <div className="relative flex flex-row items-center justify-center w-9/10 gap-1">

      <PokeGridButton direction="l" onClick={() => console.log("l")}/>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
        <PokeCardGrid name="pepe"/>
      </div>

      <PokeGridButton direction="r" onClick={() => console.log("r")}/>

    </div>
  )
}