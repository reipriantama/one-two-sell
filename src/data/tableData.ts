import { faker } from '@faker-js/faker';

faker.seed(1);

export type Person = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  payment: number;
  paymentProcess: string;
  date: string;
  detail: string;
};

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

export const tableData: Person[] = [...Array(30)].map(() => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.middleName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  payment: parseFloat(faker.finance.amount()),
  paymentProcess: faker.finance.transactionType(),
  date: faker.date.recent().toDateString(),
  detail: faker.lorem.paragraph(),
}));
