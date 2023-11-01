import { PropertyCarousel } from "@/components/PropertyCarousel";
import Image from "next/image";
import { properties } from "./list/page";
import realtyImage from "/public/realty.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-10 max-w-screen-2xl m-auto py-8 px-4 md:px-20">
      <div className="flex h-52 md:h-80">
        <Image
          src={realtyImage}
          alt="realty image"
          className="rounded-lg"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex"></div>
      <div className="flex flex-col space-y-10 h-2/5">
        <h2 className="capitalize font-semibold text-xl">
          featured properties
        </h2>
        <PropertyCarousel properties={properties} />
      </div>
      <div className="flex flex-col space-y-10 h-2/5">
        <h2 className="capitalize font-semibold text-xl">recently seen</h2>
        <PropertyCarousel properties={properties} />
      </div>
    </main>
  );
}
