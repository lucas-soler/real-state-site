import { properties } from "@/app/list/page";
import { capitalizeSentence } from "@/lib/utils";
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
    manifest: "/manifest.json",
    category: `real state`,
    title: capitalizeSentence(`${property.title}`),
    description: `${property.description}`,
    applicationName: capitalizeSentence(`${property.title}`),
    authors: [
      {
        name: capitalizeSentence(`${process.env.DEVELOPERS_NAME}`),
        url: `${process.env.DEVELOPERS_SITE}`,
      },
    ],
    alternates: {
      canonical: "/",
      languages: {
        "en-US": `${process.env.EN_DOMAIN}`,
      },
    },
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    colorScheme: "light",
    creator: capitalizeSentence(`${process.env.DEVELOPERS_NAME}`),
    publisher: capitalizeSentence(`${process.env.DEVELOPERS_NAME}`),
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: capitalizeSentence(`${property.title}`),
      description: `${property.description}`,
      url: `${process.env.EN_DOMAIN}`,
      siteName: capitalizeSentence(`${property.title}`),
      images: property.pictures,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "app",
      title: capitalizeSentence(`${property.title}`),
      description: "",
      creator: "@nextjs",
      images: property.pictures,
      app: {
        name: "twitter_app",
        id: {
          iphone: "twitter_app://iphone",
          ipad: "twitter_app://ipad",
          googleplay: "twitter_app://googleplay",
        },
        url: {
          iphone: "https://iphone_url",
          ipad: "https://ipad_url",
        },
      },
    },
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "white" },
    ],
    verification: {
      google: "google",
      yahoo: "yahoo",
      other: {
        me: [
          `${process.env.DEVELOPERS_EMAIL}`,
          `${process.env.DEVELOPERS_SITE}`,
        ],
      },
    },
  };
}
