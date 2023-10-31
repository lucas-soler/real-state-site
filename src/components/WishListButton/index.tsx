"use client";

import { Heart } from "@phosphor-icons/react";
import { useState } from "react";

export function WishListButton() {
  const [clicks, setClicks] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

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
    setClicks(clicks + 1);

    handleResponse();
  }

  return (
    <>
      <button
        className="border border-gray-300 rounded-xl p-2 hover:bg-blue-100"
        onClick={handleClick}
      >
        <Heart size={24} weight="bold" /> {clicks}
      </button>
      <span>{errorMessage}</span>
    </>
  );
}
