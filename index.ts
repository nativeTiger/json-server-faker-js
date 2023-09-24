import { writeFileSync } from "fs";
import { Person, makePerson } from "./models/person";
import { Product, makeProduct } from "./models/product";

const range = (length: number) => {
  const array: number[] = [];
  for (let i = 0; i < length; i++) {
    array.push(i);
  }
  return array;
};

function makeData<T>(createObjects: () => T, length: number): T[] {
  const makeDataLevel = (): T[] => {
    return range(length).map((item): T => {
      return createObjects();
    });
  };
  return makeDataLevel();
}

const mockData = JSON.stringify({
  persons: makeData<Person>(makePerson, 5),
  products: makeData<Product>(makeProduct, 5),
});

writeFileSync("mockData.json", mockData, "utf-8");
