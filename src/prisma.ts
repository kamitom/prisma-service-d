import { Prisma } from 'prisma-binding';
import faker from 'faker';

const fName = faker.name.findName();
const fMail = fName + '@pm.me';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4468'
});

// Retrieve `name` of a specific user
prisma.query
  .user(
    { where: { id: 'ck6xch8oe0a6x0891jo6a475a' } },
    '{ name email country zipcode }'
  )
  .then(data => {
    console.log(`specific user: ${JSON.stringify(data, undefined, 2)}`);
  })
  .catch(info => {
    console.log(`another info: ${info}`);
  });

// Retrieve `id` and `name` of all users
prisma.query.users(undefined, '{ id name email }').then(data => {
  console.log(`query users: ${JSON.stringify(data, undefined, 2)}`);
});

// Create new user called `Sarah` and retrieve the `id`
prisma.mutation
  .createUser(
    { data: { name: fName, email: fMail } },
    '{ id name email country createdAt tweets { title text } }'
  )
  .then(data => {
    console.log(`new user: ${JSON.stringify(data, undefined, 2)}`);
  })
  .catch(error => {
    console.log(`error: ${error}`);
  });
