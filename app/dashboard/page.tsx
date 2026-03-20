import Link from "next/link"

export default function Dashboard(){

  const appRoutes = [
    {
      id: 1,
      name: "Poke List",
      description: "Browse a complete list of Pokémon, including their types, abilities, and evolutions.",
      gradient: "bg-linear-to-tr from-neutral-900 to-red-900",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" id="Pokeball--Streamline-Tabler" height="200" width="200">
          <desc>
            Pokeball Streamline Icon: https://streamlinehq.com
          </desc>
          <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0" strokeWidth="2"></path>
          <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0" strokeWidth="2"></path>
          <path d="M3 12h6" strokeWidth="2"></path>
          <path d="M15 12h6" strokeWidth="2"></path>
        </svg>
      ),
      route: "/dashboard/list"
    },
    {
      id: 2,
      name: "Poke finder",
      description: "Search for your favourite Pokemon.",
      gradient: "bg-linear-to-tr from-neutral-900 to-emerald-900",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" className="bi bi-search" viewBox="0 0 16 16" id="Search--Streamline-Bootstrap" height="150" width="150">
          <desc>
            Search Streamline Icon: https://streamlinehq.com
          </desc>
          <path d="M11.742 10.344a6.5 6.5 0 1 0 -1.397 1.398h-0.001q0.044 0.06 0.098 0.115l3.85 3.85a1 1 0 0 0 1.415 -1.414l-3.85 -3.85a1 1 0 0 0 -0.115 -0.1zM12 6.5a5.5 5.5 0 1 1 -11 0 5.5 5.5 0 0 1 11 0" strokeWidth="1"></path>
        </svg>
      ),
      route: "/dashboard/find"
    }
  ]

  return (
    <section 
      className="relative flex flex-col items-center md:justify-center w-full md:w-auto gap-3"
    >
      <h1 className="font-semibold text-4xl bg-linear-to-r from-neutral-400 to-neutral-500 bg-clip-text text-transparent">
        Welcome to Poke Info
      </h1>

      <div className="flex flex-col items-center justify-center md:flex-row gap-2">

        {
          appRoutes.map((item) => (
            <Link
              key={item.id}
              className={`relative group w-70 h-70 p-3 rounded-2xl border border-neutral-900 overflow-hidden text-stone-50 ${item.gradient}`}
              href={item.route}
            >
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-justify mt-3">{item.description}</p>
                <div className="absolute opacity-10 top-30 left-30 rotate-20 group-hover:rotate-0 transition-all delay-100 duration-300 group-hover:scale-200 group-hover:opacity-35 ">
                  {item.icon}
                </div>
            </Link>
          ))
        }

      </div>
    </section>
  )
}