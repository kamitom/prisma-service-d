import faker from 'faker';
import { prisma, TweetPromise } from '../generated/prisma-client';

const fName = faker.name.findName();
const fZip = faker.address.zipCode();
const fText = faker.random.words();
const fTitle = faker.random.word();

console.log(`faker zip: ${fZip}`);

// async awiat test:
const createTweetforUser = async (authorId: string | number) => {
  const creTweetsById = await creTweetById(authorId);
  const targetUserwithTweets = await tweetsById(authorId);
  console.log(
    `target tweets by user id ${authorId} : ${JSON.stringify(targetUserwithTweets, undefined, 2)}`
  );
  return targetUserwithTweets;
};

const creTweetById = (uID: string | number): TweetPromise => {
  return prisma.createTweet({
    title: fTitle,
    text: fText,
    published: true,
    owner: { connect: { id: uID } }
  });
};

const tweetsById = (uID: string | number) => {
  const targetTest = prisma.tweets({ where: { owner: { id: uID } } });

  return targetTest;
};

createTweetforUser('ck6vs1ch101z40891nhu9iflj');

// create Tweet by User: 999
// prisma
//   .createTweet({
//     title: fTitle,
//     text: fText,
//     published: false,
//     owner: { connect: { id: 999 } }
//   })
//   .then(data => {
//     console.log(`create Tweet: ${JSON.stringify(data, undefined, 2)}`);
//     return prisma.tweets();
//   })
//   .then(data => {
//     console.log(
//       `after create tweet, query all tweets: ${JSON.stringify(
//         data,
//         undefined,
//         2
//       )}`
//     );
//   });

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
