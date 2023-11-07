"use client";
import { PropertyCard } from "@/components/PropertyCard";
import { useContext } from "react";
import { SessionContext } from "../../context/session-provider";
import { properties } from "../list/page";

export default function WishList() {
  const { wishList } = useContext(SessionContext);

  return (
    <main className="flex min-h-screen max-w-5xl m-auto py-8 px-4 flex-col justify-between space-y-8">
      {wishList.length > 0 ? (
        wishList.map((propertyID) => {
          const property = properties.find(
            (property) => property.id === propertyID
          )!;

          return (
            <PropertyCard property={property} key={`property-${property.id}`} />
          );
        })
      ) : (
        <h2 className="self-center font-medium">No favorite properties</h2>
      )}
    </main>
  );
}
