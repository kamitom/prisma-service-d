import faker from 'faker';
import { prisma } from '../generated/prisma-client';

const fName = faker.name.findName();
const fZip = faker.address.zipCode();

console.log(`zip: ${fZip}`);

// update user by ID
prisma
  .updateUser({ data: { name: fName, zipcode: +fZip }, where: { id: 100 } })
  .then(data => {
    console.log(`update User: ${JSON.stringify(data, undefined, 2)}`);
  });

// query by email
const test = prisma
  .users({ where: { email: 'Rachael Haley V@test.me' } })
  .then(data => {
    console.log(`by email: ${JSON.stringify(data, undefined, 2)}`);
  });

// prisma.query.all.users
// prisma.users().then(data => {
//   console.log(`all users: ${JSON.stringify(data, undefined, 2)}`);
// });

// create a user
// prisma
//   .createUser({
//     email: `${fName}@test.me`,
//     name: fName
//   })
//   .then(data => {
//     console.log(`create user: ${JSON.stringify(data, undefined, 2)}`);
//   })
//   .catch(error => {
//     console.log(`error: ${JSON.stringify(error, undefined, 2)}`);
//   });
