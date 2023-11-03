"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Property, PropertyCard } from "../PropertyCard";

interface PropertyCarouselProps {
  properties: Property[];
}

export function PropertyCarousel({ properties }: PropertyCarouselProps) {
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
    <section className="keen-slider" ref={slider}>
      {properties.concat(properties).map((property, index) => (
        <PropertyCard
          property={property}
          key={`property-${property.id}`}
          type="mini"
          isSlide
          order={index}
        />
      ))}
    </section>
  );
}
