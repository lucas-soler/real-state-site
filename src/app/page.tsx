import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "./list/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start space-y-20 max-w-screen-2xl m-auto py-8 px-4 justify-center">
      <div className="flex flex-col space-y-10 h-2/5">
        <h2 className="capitalize font-semibold text-xl">
          featured properties
        </h2>
        <section className="flex flex-row">
          {properties.concat(properties).map((property) => (
            <PropertyCard
              property={property}
              key={`property-${property.id}`}
              isSimplified
            />
          ))}
        </section>
      </div>
      <div className="flex flex-col space-y-10 h-2/5">
        <h2 className="capitalize font-semibold text-xl">recently seen</h2>
        <section className="flex flex-row">
          {properties.concat(properties).map((property) => (
            <PropertyCard
              property={property}
              key={`property-${property.id}`}
              isSimplified
            />
          ))}
        </section>
      </div>
    </main>
  );
}
