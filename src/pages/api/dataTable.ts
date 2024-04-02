import { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';

faker.seed(1);

export type Person = {
  firstName: string;
  lastName: string;
  fullName: string;
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
  idInvoice: number;
  idIdentity: number;
  salePrice: number;
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
  fullName: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  payment: parseFloat(faker.finance.amount()),
  paymentProcess: faker.finance.transactionType(),
  datePayment: faker.date.recent().toDateString(),
  detail: faker.lorem.paragraph(),
  status: faker.datatype.boolean(),
  typeEvent: faker.helpers.arrayElement([
    'Festival',
    'Seminar & Workshop',
    'Konser',
    'Teater & komerdi',
    'Atraksi',
    'Olahraga',
  ]),
  typeEventOl: faker.helpers.arrayElement(['online', 'offline', 'hybrid']),
  eventName: faker.helpers.fake(['Parade Sihir - {{location.cityName}}']),
  dateEvent: faker.date.future().toDateString(),
  genre: faker.music.genre(),
  format: faker.helpers.arrayElement(['Online', 'Offline']),
  banner: faker.helpers.fake('Image_Parade_Sihir_{{random.numeric}}'),
  idInvoice: faker.number.int({ min: 10, max: 1_000_000_000 }),
  idIdentity: faker.number.int({ min: 10, max: 1_000_000_000_000_000 }),
  salePrice: parseFloat(faker.finance.amount({ min: 100, max: 200, dec: 2 })),
}));

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Person[]>
) {
  res.status(200).json(tableData);
}
