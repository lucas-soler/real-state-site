"use client";
import { SessionContext } from "@/context/session-provider";
import { useContext, useEffect } from "react";

interface RecentlySeenProps {
  propertyID: string;
}

export function RecentlySeen({ propertyID }: RecentlySeenProps) {
  const { recentlySeen, setRecentlySeen } = useContext(SessionContext);

  useEffect(() => {
    // it removes the propertyID which the user is accessing from the previous list in case
    // the user has already accessed it before
    const newRecentlySeen = recentlySeen.filter(
      (recentlySeenID) => recentlySeenID != propertyID
    );

    setRecentlySeen([propertyID, ...newRecentlySeen]);
  }, []);

  return <></>;
}
