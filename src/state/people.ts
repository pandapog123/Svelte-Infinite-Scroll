import { get, writable } from "svelte/store";
import { createPerson, type Person } from "../models/person";

export const peopleStore = writable<Person[]>([], (set) => {
  let emptyArray = new Array(12).fill(null);

  set(emptyArray.map(createPerson));
});

export function loadNewPeople() {
  peopleStore.update((previousPeopleArray) => {
    let emptyArray = new Array(12).fill(null);

    return [...previousPeopleArray, ...emptyArray.map(createPerson)];
  });
}
