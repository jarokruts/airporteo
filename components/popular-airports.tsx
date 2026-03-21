import Image from "next/image"
import { MapPin } from "lucide-react"

const AIRPORTS = [
  {
    city: "London",
    code: "HTR",
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
    image: "/images/airport-newyork.jpg",
  },
]

export function PopularAirports() {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue">
            Top Destinations
          </p>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Popular Airports
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {AIRPORTS.map((airport) => (
            <a
              key={airport.code}
              href="#"
              className="group flex flex-col items-center gap-3 transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-[174px] w-[174px] overflow-hidden rounded-2xl border-2 border-border shadow-sm transition-shadow duration-200 group-hover:shadow-lg group-hover:border-blue">
                <Image
                  src={airport.image}
                  alt={`${airport.city} ${airport.code} airport`}
                  width={174}
                  height={174}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-blue" />
                  <span className="text-sm font-bold text-foreground">
                    {airport.city}{" "}
                    <span className="font-semibold text-muted-foreground">
                      {airport.code}
                    </span>
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  from{" "}
                  <span className="font-bold text-blue">
                    {airport.price} USD
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
