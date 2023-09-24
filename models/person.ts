import { faker } from "@faker-js/faker";

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: "relationship" | "complicated" | "single";
  createdAt: Date;
};

export const makePerson = (): Person => {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    createdAt: faker.date.anytime(),
    status: faker.helpers.arrayElement([
      "relationship",
      "complicated",
      "single",
    ]),
  };
};
