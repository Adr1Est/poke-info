import { NavBar } from "@/components/shared/NavBar";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center flex-wrap">
      <header className="w-full">
        <h1 className="w-full text-5xl md:text-8xl text-center p-5">Poke Info</h1>
      </header>
      <NavBar/>
    </div>
  );
}
