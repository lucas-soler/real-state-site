"use client";

import { SessionContext } from "@/app/session-provider";
import { Heart } from "@phosphor-icons/react";
import { useContext, useState } from "react";

interface WishListProps {
  propertyID: string;
}

export function WishListButton({ propertyID }: WishListProps) {
  const { wishList, setWishList } = useContext(SessionContext);
  const [errorMessage, setErrorMessage] = useState("");

  const propertyIsAlreadyInWishList = wishList.includes(propertyID);

  async function handleResponse() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");

      const breeds = await response.json();

      if (breeds.status === "success") {
        console.log(breeds);
      } else {
        throw Error(breeds.message);
      }
    } catch (error: any) {
      setErrorMessage(`${error?.message}`);
    }
  }

  function handleClick() {
    if (!propertyIsAlreadyInWishList) {
      setWishList([...wishList, propertyID]);
    } else {
      setWishList(wishList.filter((id) => id !== propertyID));
    }
  }

  return (
    <>
      <button
        className="border border-gray-300 rounded-xl p-2 hover:bg-blue-100"
        onClick={handleClick}
      >
        <Heart
          size={24}
          weight={propertyIsAlreadyInWishList ? "fill" : "bold"}
        />
      </button>
      <span>{errorMessage}</span>
    </>
  );
}
