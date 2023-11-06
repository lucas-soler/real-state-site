"use client";

import { properties } from "@/app/list/page";
import { SessionContext } from "@/context/session-provider";
import { useContext } from "react";
import { Property } from "../PropertyCard";
import { PropertyCarousel } from "../PropertyCarousel";

export function RecentlySeen() {
  const { recentlySeen } = useContext(SessionContext);

  const recentlySeenProperties: Property[] = recentlySeen.map(
    (recentlySeenID) =>
      properties.find((property) => property.id === recentlySeenID)!
  );

  console.log(recentlySeenProperties);

  return recentlySeenProperties.length > 0 ? (
    <>
      <PropertyCarousel
        name="recently-seen"
        properties={recentlySeenProperties}
      />
    </>
  ) : (
    <span>No recently seen properties</span>
  );
}
