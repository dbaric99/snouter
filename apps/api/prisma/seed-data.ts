import { Role } from '@prisma/client';
import { encodePassword } from '../src/utils/bcrypt';

const { hash, salt } = encodePassword('admin-test');
const { hash: hashUser, salt: saltUser } = encodePassword('user-test');

const users = [
  {
    id: 0,
    username: 'admin',
    email: 'tech@snouter.com',
    password: hash,
    salt: salt,
    role: Role.ADMIN,
  },
  {
    id: 1,
    username: 'testUser',
    email: 'test-mail@gmail.com',
    password: hashUser,
    salt: saltUser,
    role: Role.USER,
  },
];

const counties = [
  { id: 0, name: 'Bjelovarsko-bilogorska' },
  { id: 1, name: 'Brodsko-posavska' },
  { id: 2, name: 'Dubrovačko-neretvanska' },
  { id: 3, name: 'Istarska' },
  { id: 4, name: 'Karlovačka' },
  { id: 5, name: 'Koprivničko-križevačka' },
  { id: 6, name: 'Krapinsko-zagorska' },
  { id: 7, name: 'Ličko-senjska' },
  { id: 8, name: 'Međimurska' },
  { id: 9, name: 'Osječko-baranjska' },
  { id: 10, name: 'Požeško-slavonska' },
  { id: 11, name: 'Primorsko-goranska' },
  { id: 12, name: 'Sisačko-moslavačka' },
  { id: 13, name: 'Splitsko-dalmatinska' },
  { id: 14, name: 'Šibensko-kninska' },
  { id: 15, name: 'Varaždinska' },
  { id: 16, name: 'Virovitičko-podravska' },
  { id: 17, name: 'Vukovarsko-srijemska' },
  { id: 18, name: 'Zadarska' },
  { id: 19, name: 'Zagrebačka' },
  { id: 20, name: 'Grad Zagreb' },
  { id: 21, name: 'EU' },
  { id: 22, name: 'Outside EU' },
];

const cities = [
  { id: 0, name: 'Bjelovar', countyId: 0, zip: '43000' },
  { id: 1, name: 'Daruvar', countyId: 0, zip: '43500' },
  { id: 2, name: 'Slavonski Brod', countyId: 1, zip: '35000' },
  { id: 3, name: 'Nova Gradiška', countyId: 1, zip: '35400' },
  { id: 4, name: 'Dubrovnik', countyId: 2, zip: '20000' },
  { id: 5, name: 'Metković', countyId: 2, zip: '20350' },
  { id: 6, name: 'Pula', countyId: 3, zip: '52100' },
  { id: 7, name: 'Poreč', countyId: 3, zip: '52440' },
  { id: 8, name: 'Karlovac', countyId: 4, zip: '47000' },
  { id: 9, name: 'Ozalj', countyId: 4, zip: '47280' },
  { id: 10, name: 'Koprivnica', countyId: 5, zip: '48000' },
  { id: 11, name: 'Krizevci', countyId: 5, zip: '48260' },
  { id: 12, name: 'Krapina', countyId: 6, zip: '49000' },
  { id: 13, name: 'Pregrada', countyId: 6, zip: '49218' },
  { id: 14, name: 'Gospić', countyId: 7, zip: '53000' },
  { id: 15, name: 'Otočac', countyId: 7, zip: '53220' },
  { id: 16, name: 'Čakovec', countyId: 8, zip: '40000' },
  { id: 17, name: 'Mursko Središće', countyId: 8, zip: '40315' },
  { id: 18, name: 'Osiijek', countyId: 9, zip: '31000' },
  { id: 19, name: 'Đakovo', countyId: 9, zip: '31400' },
  { id: 20, name: 'Požega', countyId: 10, zip: '34000' },
  { id: 21, name: 'Pakrac', countyId: 10, zip: '34550' },
  { id: 22, name: 'Rijeka', countyId: 11, zip: '51000' },
  { id: 23, name: 'Opatija', countyId: 11, zip: '51410' },
  { id: 24, name: 'Sisak', countyId: 12, zip: '44000' },
  { id: 25, name: 'Kutina', countyId: 12, zip: '44320' },
  { id: 26, name: 'Split', countyId: 13, zip: '21000' },
  { id: 27, name: 'Solin', countyId: 13, zip: '21210' },
  { id: 28, name: 'Šibenik', countyId: 14, zip: '22000' },
  { id: 29, name: 'Knin', countyId: 14, zip: '22300' },
  { id: 30, name: 'Varaždin', countyId: 15, zip: '42000' },
  { id: 31, name: 'Ludbreg', countyId: 15, zip: '42230' },
  { id: 32, name: 'Virovitica', countyId: 16, zip: '33000' },
  { id: 33, name: 'Slatina', countyId: 16, zip: '33520' },
  { id: 34, name: 'Vukovar', countyId: 17, zip: '32000' },
  { id: 35, name: 'Vinkovci', countyId: 17, zip: '32100' },
  { id: 36, name: 'Zadar', countyId: 18, zip: '23000' },
  { id: 37, name: 'Benkovac', countyId: 18, zip: '23420' },
  { id: 38, name: 'Zagreb', countyId: 20, zip: '10000' },
];

const categorySpecs = [
  { id: 0, name: 'Brand', categoryId: 0 },
  { id: 1, name: 'Model', categoryId: 0 },
  { id: 2, name: 'Year of production', categoryId: 0 },
  { id: 3, name: 'Mileage', categoryId: 0 },
  { id: 4, name: 'Fuel type', categoryId: 0 },
  { id: 5, name: 'Engine capacity', categoryId: 0 },
];

const categories = [{ id: 0, name: 'Vehicles' }];

const subcategories = [
  { id: 0, name: 'Used cars', categoryId: 0 },
  { id: 1, name: 'New cars', categoryId: 0 },
  { id: 2, name: 'Motorcycles', categoryId: 0 },
];

export const SeedData = {
  counties,
  users,
  cities,
  categories,
  subcategories,
  categorySpecs,
};
