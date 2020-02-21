import faker from 'faker';
import { prisma } from '../generated/prisma-client';

const fName = faker.name.findName();
const fZip = faker.address.zipCode();
const fText = faker.random.words();
const fTitle = faker.random.word();

console.log(`faker zip: ${fZip}`);

// create Tweet by User: 999
prisma
  .createTweet({
    title: fTitle,
    text: fText,
    published: false,
    owner: { connect: { id: 999 } }
  })
  .then(data => {
    console.log(`create Tweet: ${JSON.stringify(data, undefined, 2)}`);
    return prisma.tweets();
  })
  .then(data => {
    console.log(
      `after create tweet, query all tweets: ${JSON.stringify(
        data,
        undefined,
        2
      )}`
    );
  });

// update user NAME and Zipcode by ID
// prisma
//   .updateUser({ data: { name: fName, zipcode: +fZip }, where: { id: 100 } })
//   .then(data => {
//     console.log(`update User: ${JSON.stringify(data, undefined, 2)}`);
//   });

// query by email
// const test = prisma
//   .users({ where: { email: 'Rachael Haley V@test.me' } })
//   .then(data => {
//     console.log(`by email: ${JSON.stringify(data, undefined, 2)}`);
//   });

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
