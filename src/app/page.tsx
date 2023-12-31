import { PropertyCarousel } from "@/components/PropertyCarousel";
import { RecentlySeen } from "@/components/RecentlySeen";
import Image from "next/image";
import { poppins } from "./layout";
import { properties } from "./list/page";
import realtyImage from "/public/realty.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-10 max-w-screen-2xl m-auto py-8 px-4 md:px-20">
      <div className="flex flex-col space-y-4">
        <h2 className={`${poppins.className} text-3xl text-sky-700 font-bold`}>
          Find here your new home!
        </h2>
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
      </div>
      <div className="flex"></div>
      <div className="flex flex-col space-y-10 h-2/5">
        <h2 className="capitalize font-semibold text-xl">
          featured properties
        </h2>
        <PropertyCarousel
          name="featured"
          properties={properties.concat(properties)}
        />
      </div>

      <div className="flex flex-col space-y-10 h-2/5">
        <h2 className="capitalize font-semibold text-xl">recently seen</h2>
        <RecentlySeen />
      </div>
    </main>
  );
}
