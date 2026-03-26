import Image from "next/image"
import { MapPin } from "lucide-react"

const AIRPORTS = [
  {
    city: "London",
    code: "LHR",
    price: 150,
    image: "/images/airport-london.jpg",
  },
  {
    city: "Paris",
    code: "CDG",
    price: 120,
    image: "/images/airport-paris.jpg",
  },
  {
    city: "Frankfurt",
    code: "FRA",
    price: 150,
    image: "/images/airport-frankfurt.jpg",
  },
  {
    city: "New York",
    code: "JFK",
    price: 150,
    image: "/images/airport-jfk.jpg",
  },
  {
    city: "Dubai",
    code: "DXB",
    price: 180,
    image: "/images/airport-dubai.jpg",
  },
  {
    city: "Singapore",
    code: "SIN",
    price: 200,
    image: "/images/airport-singapore.jpg",
  },
]

export function PopularAirports() {
  return (
    <section className="bg-secondary py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-5">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Top Destinations
          </p>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Popular Airports
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {AIRPORTS.map((airport) => (
            <a
              key={airport.code}
              href={`/airports/${airport.code.toLowerCase()}`}
              className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-24 w-24 overflow-hidden rounded-xl border-2 border-border shadow-sm transition-shadow duration-200 group-hover:shadow-lg group-hover:border-gold md:h-28 md:w-28">
                <Image
                  src={airport.image}
                  alt={`${airport.city} ${airport.code} airport`}
                  width={112}
                  height={112}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col items-center gap-0.5 text-center">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-gold" />
                  <span className="text-xs font-bold text-foreground md:text-sm">
                    {airport.city}{" "}
                    <span className="font-semibold text-muted-foreground">
                      {airport.code}
                    </span>
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  from{" "}
                  <span className="font-bold text-gold">
                    ${airport.price}
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
