function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b);

  let i: number = 0;
  let j: number = people.length - 1;
  let boats: number = 0;

  while (i <= j) {
    boats++;

    if (people[i] + people[j] <= limit) {
      i++;
    }

    j--;
  }

  return boats;
}
