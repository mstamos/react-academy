export const getBigSalaries = (people) => {
  return people.filter(person => person.salary > 1500);
}
export const sumSalaries = (people) => {
  if (people.length === 0) {
    return 0;
  }

  return people.reduce((sum, person) => {
    return sum + person.salary;
  }, 0);
}
