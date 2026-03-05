import Link from "next/link"

export default function Dashboard(){
  const appRoutes = [
    {
      id: 1,
      name: "Poke List",
      route: "/dashboard/list"
    },
    {
      id: 2,
      name: "Poke finder",
      route: "/dashboard/find"
    }
  ]

  return (
    <section className="relative flex flex-col items-center md:items-start justify-center w-full md:w-9/10 gap-3">
      <h1 className="font-semibold text-4xl">Welcome to Poke Info</h1>

      <div className="flex flex-col gap-2 ml-5">
        <h2 className="font-medium text-3xl">Navigation</h2>
        <ul className="list-disc list-inside">
          {
            appRoutes.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.route}
                >
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}