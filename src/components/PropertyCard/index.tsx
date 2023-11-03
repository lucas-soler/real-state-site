import Image from "next/image";
import Link from "next/link";
import { WishListButton } from "../WishListButton";
import noImage from "/public/no-image.jpg";

interface PropertyPicture {
  id: string;
  isMain: boolean;
  order: number;
  url: string;
  alternativeText: string;
}

interface PropertyCharacteristic {
  order: number;
  description: string;
  size: number;
}

interface PropertyFeature {
  order: number;
  description: string;
}

interface PropertyAddress {
  street?: string;
  neighborhood: string;
  city: string;
  citySlug: string;
  state: string;
}

export interface Property {
  id: string;
  slug: string;
  pictures: PropertyPicture[];
  description: string;
  price: number;
  condoFee?: number;
  characteristics: PropertyCharacteristic[];
  features: PropertyFeature[];
  address: PropertyAddress;
  phoneNumber: number;
  whatsappNumber: number;
  email: string;
}

interface PropertyCardProps {
  property: Property;
  type?: "mini" | "full";
  isSlide?: boolean;
  order?: number;
}

export function PropertyCard({
  property,
  type = "full",
  isSlide = false,
  order,
}: PropertyCardProps) {
  const mainPicture = property.pictures.find((picture) => picture.isMain);
  property.characteristics.sort((a, b) => a.order - b.order);
  property.features.sort((a, b) => a.order - b.order);

  const propertyURL = `/property/${property.address.city
    .toLowerCase()
    .replaceAll(" ", "-")}/${property.address.state
    .toLowerCase()
    .replaceAll(" ", "-")}/${property.slug}`;

  let containerStyle =
    "flex flex-1 flex-col border border-gray-300 rounded-sm grow-0";

  if (isSlide) {
    containerStyle = `border border-gray-300 rounded-sm keen-slider__slide number-slide${order} grow-0`;
  }

  return (
    <section className={containerStyle}>
      <Link href={propertyURL}>
        <header className="h-48 relative overflow-hidden rounded-t-sm">
          <Image
            src={mainPicture ? mainPicture.url : noImage}
            fill={true}
            style={{ objectFit: mainPicture ? "cover" : "contain" }}
            alt={mainPicture ? mainPicture.alternativeText : "no image"}
          />
        </header>
        <main className="flex flex-col space-y-6 p-4">
          <header className="flex flex-col">
            <span className="text-xl font-medium">
              {property.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
              })}
            </span>
            {property.condoFee ? (
              <div className="text-sm first-letter space-x-1">
                <span>Condomínio:</span>
                <span className="font-medium">
                  {property.condoFee.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>
            ) : (
              ""
            )}
          </header>
          <article className="flex text-sm space-x-3 ">
            {property.characteristics.map((characteristic) => {
              return (
                <div
                  className="flex space-x-1"
                  key={`characteristic-${characteristic.order}`}
                >
                  <span className="font-light">{characteristic.size}</span>
                  <span>{characteristic.description}</span>
                </div>
              );
            })}
          </article>
          {type === "full" ? (
            <article className="flex flex-row flex-wrap max-h-16 truncate text-sm capitalize text-gray-400 font-normal">
              {property.features.map((feature) => {
                return (
                  <span
                    className="bg-neutral-200 p-1.5 rounded-xl max-w-[180px] m-1 truncate"
                    key={`feature-${feature.order}`}
                  >
                    {feature.description}
                  </span>
                );
              })}
            </article>
          ) : (
            ""
          )}
          <article className="flex flex-col text-sm space-y-1 text-gray-500">
            <span>{property.description}</span>
            <address className="truncate capitalize">
              {property.address.street} - {property.address.neighborhood},
              {property.address.city}, {property.address.state}
            </address>
          </article>
        </main>
      </Link>
      {type === "full" ? (
        <footer className="flex flex-row p-4 items-center justify-between text-sm text-blue-500">
          <section className="flex space-x-5">
            <button className="uppercase">telefone</button>
            <button className="uppercase">mensagem</button>
            <button className="uppercase">whatsapp</button>
          </section>
          <section className="flex">
            <WishListButton propertyID={property.id} />
          </section>
        </footer>
      ) : (
        ""
      )}
    </section>
  );
}
