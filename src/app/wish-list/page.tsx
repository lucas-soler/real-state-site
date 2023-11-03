"use client";
import { PropertyCard } from "@/components/PropertyCard";
import { useContext } from "react";
import { properties } from "../list/page";
import { SessionContext } from "../session-provider";

export default function WishList() {
  const { wishList } = useContext(SessionContext);

  return (
    <main className="flex min-h-screen max-w-5xl m-auto py-8 px-4 flex-col justify-between space-y-8">
      {wishList.map((propertyID) => {
        const property = properties.find(
          (property) => property.id === propertyID
        )!;

        return (
          <PropertyCard property={property} key={`property-${property.id}`} />
        );
      })}
    </main>
  );
}
