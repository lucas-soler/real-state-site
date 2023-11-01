"use client";
import { Buildings } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();

  return (
    <section
      className="flex flex-1 justify-center md:grow-0 md:justify-normal items-center hover:cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Buildings size={40} color="white" weight="bold" />
      <span className="mx-4 font-logo font-extrabold text-2xl">
        RealStateSite
      </span>
    </section>
  );
}
