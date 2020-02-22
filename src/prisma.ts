import { Prisma } from 'prisma-binding';
import faker from 'faker';

const fName = faker.name.findName();
const fMail = fName + '@pm.me';
const fZip = faker.address.zipCode();
const fText = faker.random.words();
const fTitle = faker.random.word();

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4468'
});

// async/await test
// 1. create twitter with specific user
// 2. show specific user with tweets list
const createTweetforUser = async (authorId: string | number) => {
  const newTwitter = await createTweetByUserId(authorId);
  const userList = await userWithTweetsList(authorId);
  return userList;
};

const createTweetByUserId = (uID: string | number) => {
  return prisma.mutation
    .createTweet(
      {
        data: {
          text: fText,
          title: fTitle,
          published: false,
          owner: { connect: { id: uID } }
        }
      },
      '{ id title text owner { id name } }'
    )
    .catch(error => {
      console.log(`ceate twitter error: ${error}`);
    });
};

const userWithTweetsList = (uID: string | number) => {
  return prisma.query
    .user(
      { where: { id: uID } },
      '{ id email name tweets { title, text, published, createdAt } } '
    )
    .catch(error => {
      console.log(`query error: ${error}`);
    });
};

createTweetforUser('100').then(data => {
  console.log(
    `a specific user with new twitter list: ${JSON.stringify(
      data,
      undefined,
      2
    )}`
  );
});

// Retrieve `name` of a specific user
// prisma.query
//   .user(
//     { where: { id: 'ck6xch8oe0a6x0891jo6a475a' } },
//     '{ name email country zipcode }'
//   )
//   .then(data => {
//     console.log(`specific user: ${JSON.stringify(data, undefined, 2)}`);
//   })
//   .catch(info => {
//     console.log(`another info: ${info}`);
//   });

// Retrieve `id` and `name` of all users
// prisma.query.users(undefined, '{ id name email }').then(data => {
//   console.log(`query users: ${JSON.stringify(data, undefined, 2)}`);
// });

// Create new user called `Sarah` and retrieve the `id`
// prisma.mutation
//   .createUser(
//     { data: { name: fName, email: fMail } },
//     '{ id name email country createdAt tweets { title text } }'
//   )
//   .then(data => {
//     console.log(`new user: ${JSON.stringify(data, undefined, 2)}`);
//   })
//   .catch(error => {
//     console.log(`error: ${error}`);
//   });
