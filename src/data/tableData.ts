import { faker } from '@faker-js/faker';

faker.seed(1);

export type Person = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  payment: number;
  paymentProcess: string;
  datePayment: string;
  detail: string;
  status: boolean;
  typeEvent: string;
  eventName: string;
  dateEvent: string;
  genre: string;
  banner: string;
  typeEventOl: string;
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
  datePayment: faker.date.recent().toDateString(),
  detail: faker.lorem.paragraph(),
  status: faker.datatype.boolean(),
  typeEvent: faker.helpers.arrayElement(['Festival', 'Seminar', 'Konser']),
  typeEventOl: faker.helpers.arrayElement(['online', 'offline', 'hybrid']),
  eventName: faker.helpers.fake(['Parade Sihir - {{location.cityName}}']),
  dateEvent: faker.date.future().toDateString(),
  genre: faker.music.genre(),
  format: faker.helpers.arrayElement(['Online', 'Offline']),
  banner: faker.helpers.fake('Image_Parade_Sihir_{{random.numeric}}'),
}));

// console.log(tableData);
// const hello = faker.helpers.fake('Image_Parade_Sihir_{{person.firstName}}!');
// const hello2 = faker.helpers.fake('Image_Parade_Sihir_{{random.numeric}}!');

// console.log(hello);
// console.log(hello2);
// console.log(hello);
