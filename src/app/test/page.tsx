import { Property, PropertyCard } from "@/components/PropertyCard";
import { v4 as uuidv4 } from "uuid";

function generatePropertySlug(this: Property) {
  return (
    this.description.replaceAll(" ", "-").replaceAll(",", "") + "_id_" + this.id
  );
}

function generateCitySlug(this: Property) {
  return this.address.city.replaceAll(" ", "-");
}

export const properties: Property[] = [
  {
    id: uuidv4(),
    slug: generatePropertySlug,
    pictures: [
      {
        id: uuidv4(),
        isMain: true,
        order: 1,
        url: "https://resizedimgs.vivareal.com/fit-in/870x653/named.images.sp/f97a58fe76031c9b324457cb18c2bb8d/%7Bdescription%7D.jpg",
        alternativeText: "property balcony",
      },
    ],
    description: "3 beds, 2 baths apartment for sale, 79 m²",
    condoFee: 180,
    price: 750000,
    characteristics: [
      {
        order: 1,
        description: "m2",
        size: 79,
      },
      {
        order: 2,
        description: "bedrooms",
        size: 3,
      },
      {
        order: 3,
        description: "bathrooms",
        size: 2,
      },
      {
        order: 4,
        description: "parking",
        size: 1,
      },
    ],
    features: [
      {
        order: 1,
        description: "pool",
      },
      {
        order: 2,
        description: "elevator",
      },
      {
        order: 3,
        description: "pets allowed",
      },
      {
        order: 4,
        description: "playground",
      },
      {
        order: 5,
        description: "balcony",
      },
      {
        order: 6,
        description: "party room",
      },
      {
        order: 7,
        description: "air-conditioner",
      },
    ],
    address: {
      street: "tucano street, 1",
      neighborhood: "palmas do arvoredo",
      city: "governador celso ramos",
      citySlug: generateCitySlug,
      state: "sc",
    },
    phoneNumber: 47988220990,
    whatsappNumber: 47988220990,
    email: "lucas.p.soler@gmail.com",
  },
  {
    id: uuidv4(),
    slug: generatePropertySlug,
    pictures: [
      {
        id: uuidv4(),
        isMain: true,
        order: 1,
        url: "https://resizedimgs.vivareal.com/fit-in/870x653/named.images.sp/de4b20c045e1a3c537f3ead9afc28b00/%7Bdescription%7D.jpg",
        alternativeText: "property restroom",
      },
    ],
    description: "2 beds, 2 baths apartment for sale, 62 m²",
    price: 690000,
    characteristics: [
      {
        order: 1,
        description: "m2",
        size: 62,
      },
      {
        order: 2,
        description: "bedrooms",
        size: 2,
      },
      {
        order: 3,
        description: "bathrooms",
        size: 2,
      },
      {
        order: 4,
        description: "parking",
        size: 1,
      },
    ],
    features: [
      {
        order: 1,
        description: "bike parking",
      },
      {
        order: 2,
        description: "elevator",
      },
      {
        order: 3,
        description: "fully furnished",
      },
      {
        order: 4,
        description: "electronic gate",
      },
    ],
    address: {
      neighborhood: "palmas do arvoredo",
      city: "governador celso ramos",
      citySlug: generateCitySlug,
      state: "sc",
    },
    phoneNumber: 47988220990,
    whatsappNumber: 47988220990,
    email: "lucas.p.soler@gmail.com",
  },
  {
    id: uuidv4(),
    slug: generatePropertySlug,
    pictures: [],
    description: "4 beds, 3 baths apartment for sale, 101 m²",
    price: 1490000,
    characteristics: [
      {
        order: 1,
        description: "m2",
        size: 101,
      },
      {
        order: 2,
        description: "bedrooms",
        size: 4,
      },
      {
        order: 3,
        description: "bathrooms",
        size: 3,
      },
      {
        order: 4,
        description: "parking",
        size: 2,
      },
    ],
    features: [
      {
        order: 1,
        description: "bike parking",
      },
      {
        order: 2,
        description: "elevator",
      },
      {
        order: 3,
        description: "fully furnished",
      },
      {
        order: 4,
        description: "electronic gate",
      },
    ],
    address: {
      street: "avenida caravelas",
      neighborhood: "praia grande",
      city: "governador celso ramos",
      citySlug: generateCitySlug,
      state: "sc",
    },
    phoneNumber: 47988220990,
    whatsappNumber: 47988220990,
    email: "lucas.p.soler@gmail.com",
  },
];

console.log(properties);

export default function Test() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 space-y-4">
      {properties.map((property) => (
        <PropertyCard property={property} key={`property-${property.id}`} />
      ))}
    </main>
  );
}
