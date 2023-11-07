import { properties } from "@/app/list/page";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { RecentlySeen } from "../components/RecentlySeen";

export const revalidate = 120; // it will revalidate the entire page after 2 minutes (2 * 60 = 120 seconds)
// when a user access this page after 2 minutes from the last generation he will see the previous page generated
// while NextJS generates the new version on the background

interface PageProps {
  params: { slug: string[] };
}

export default function PropertyPage({ params: { slug } }: PageProps) {
  const propertySlug = slug[2] ? slug[2] : slug[1];

  let slugPropertyID = propertySlug.split("_id_")[1];

  const property = properties.find(
    (property) => property.id === slugPropertyID
  );

  if (!property) {
    notFound();
  }

  return (
    <>
      <RecentlySeen propertyID={slugPropertyID} />
      <h1>{property.description}</h1>
      <footer>{uuidv4()}</footer>
    </>
  );
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: [property.address.city, property.address.state],
  }));
}

export async function generateMetadata(
  { params: { slug } }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const propertySlug = slug[2] ? slug[2] : slug[1];

  let slugPropertyID = propertySlug.split("_id_")[1];

  const property = properties.find(
    (property) => property.id === slugPropertyID
  )!;

  return {
    title: property.description,
    description: property.description,
    openGraph: {
      images: property.pictures,
    },
  };
}
