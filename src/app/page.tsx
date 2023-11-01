"use client";

import { PropertyCard } from "@/components/PropertyCard";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { properties } from "./list/page";

export default function Home() {
  const [slider] = useKeenSlider({
    slides: {
      perView: 5,
      spacing: 48,
    },
    breakpoints: {
      "(max-width: 640px)": {
        slides: {
          perView: 1,
        },
      },
      "(min-width:640px) and (max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 48,
        },
      },
      "(min-width:767px) and (max-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 48,
        },
      },
      "(min-width:1024px) and (max-width: 1280px)": {
        slides: {
          perView: 4,
          spacing: 48,
        },
      },
    },
  });

  return (
    <main className="flex min-h-screen flex-col space-y-20 max-w-screen-2xl m-auto py-8 px-4 justify-center">
      <div className="flex flex-col space-y-10 h-2/5">
        <h2 className="capitalize font-semibold text-xl">
          featured properties
        </h2>
        <section className="keen-slider" ref={slider}>
          {properties.concat(properties).map((property, index) => (
            <PropertyCard
              property={property}
              key={`property-${property.id}`}
              isSimplified
              isSlide
              order={index}
            />
          ))}
        </section>
      </div>
      <div className="flex flex-col space-y-10 h-2/5">
        <h2 className="capitalize font-semibold text-xl">recently seen</h2>
        <section className="keen-slider" ref={slider}>
          {properties.concat(properties).map((property, index) => (
            <PropertyCard
              property={property}
              key={`property-${property.id}`}
              isSimplified
              isSlide
              order={index}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
