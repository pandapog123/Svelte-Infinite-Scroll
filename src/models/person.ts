import { faker } from "@faker-js/faker";

export interface Person {
  name: string;
  bio: string;
  age: number;
  imageURL: string;
}

export function createPerson(): Person {
  return {
    name: faker.person.fullName(),
    bio: faker.person.bio(),
    age: faker.number.int(100),
    imageURL: faker.image.url({ width: 300, height: 300 }),
  };
}
