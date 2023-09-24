import { faker } from "@faker-js/faker";

export type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  stock: number;
  category: "smartphones" | "mobilephones";
  images: string;
  createdAt: Date;
};

export const makeProduct = (): Product => {
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    rating: faker.number.int(10),
    stock: faker.number.int(100),
    category: faker.helpers.arrayElement(["smartphones", "mobilephones"]),
    images: faker.image.url(),
    createdAt: faker.date.anytime(),
  };
};
