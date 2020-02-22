// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateComment {
  count: Int!
}

type AggregateTweet {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Comment {
  id: ID!
  text: String!
  createdAt: DateTime!
  author: User!
  tweet: Tweet!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  id: ID
  text: String!
  author: UserCreateOneInput!
  tweet: TweetCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutTweetInput {
  create: [CommentCreateWithoutTweetInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutTweetInput {
  id: ID
  text: String!
  author: UserCreateOneInput!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
}

type CommentPreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  text: String
  author: UserUpdateOneRequiredInput
  tweet: TweetUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateManyDataInput {
  text: String
}

input CommentUpdateManyMutationInput {
  text: String
}

input CommentUpdateManyWithoutTweetInput {
  create: [CommentCreateWithoutTweetInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutTweetInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutTweetInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateWithoutTweetDataInput {
  text: String
  author: UserUpdateOneRequiredInput
}

input CommentUpdateWithWhereUniqueWithoutTweetInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutTweetDataInput!
}

input CommentUpsertWithWhereUniqueWithoutTweetInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutTweetDataInput!
  create: CommentCreateWithoutTweetInput!
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  author: UserWhereInput
  tweet: TweetWhereInput
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createTweet(data: TweetCreateInput!): Tweet!
  updateTweet(data: TweetUpdateInput!, where: TweetWhereUniqueInput!): Tweet
  updateManyTweets(data: TweetUpdateManyMutationInput!, where: TweetWhereInput): BatchPayload!
  upsertTweet(where: TweetWhereUniqueInput!, create: TweetCreateInput!, update: TweetUpdateInput!): Tweet!
  deleteTweet(where: TweetWhereUniqueInput!): Tweet
  deleteManyTweets(where: TweetWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  tweet(where: TweetWhereUniqueInput!): Tweet
  tweets(where: TweetWhereInput, orderBy: TweetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tweet]!
  tweetsConnection(where: TweetWhereInput, orderBy: TweetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TweetConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  tweet(where: TweetSubscriptionWhereInput): TweetSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tweet {
  id: ID!
  createdAt: DateTime!
  title: String!
  text: String!
  published: Boolean!
  owner: User!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  location: String
}

type TweetConnection {
  pageInfo: PageInfo!
  edges: [TweetEdge]!
  aggregate: AggregateTweet!
}

input TweetCreateInput {
  id: ID
  title: String!
  text: String!
  published: Boolean!
  owner: UserCreateOneWithoutTweetsInput!
  comments: CommentCreateManyWithoutTweetInput
  location: String
}

input TweetCreateManyWithoutOwnerInput {
  create: [TweetCreateWithoutOwnerInput!]
  connect: [TweetWhereUniqueInput!]
}

input TweetCreateOneWithoutCommentsInput {
  create: TweetCreateWithoutCommentsInput
  connect: TweetWhereUniqueInput
}

input TweetCreateWithoutCommentsInput {
  id: ID
  title: String!
  text: String!
  published: Boolean!
  owner: UserCreateOneWithoutTweetsInput!
  location: String
}

input TweetCreateWithoutOwnerInput {
  id: ID
  title: String!
  text: String!
  published: Boolean!
  comments: CommentCreateManyWithoutTweetInput
  location: String
}

type TweetEdge {
  node: Tweet!
  cursor: String!
}

enum TweetOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  published_ASC
  published_DESC
  location_ASC
  location_DESC
}

type TweetPreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String!
  text: String!
  published: Boolean!
  location: String
}

input TweetScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  published: Boolean
  published_not: Boolean
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  AND: [TweetScalarWhereInput!]
  OR: [TweetScalarWhereInput!]
  NOT: [TweetScalarWhereInput!]
}

type TweetSubscriptionPayload {
  mutation: MutationType!
  node: Tweet
  updatedFields: [String!]
  previousValues: TweetPreviousValues
}

input TweetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TweetWhereInput
  AND: [TweetSubscriptionWhereInput!]
  OR: [TweetSubscriptionWhereInput!]
  NOT: [TweetSubscriptionWhereInput!]
}

input TweetUpdateInput {
  title: String
  text: String
  published: Boolean
  owner: UserUpdateOneRequiredWithoutTweetsInput
  comments: CommentUpdateManyWithoutTweetInput
  location: String
}

input TweetUpdateManyDataInput {
  title: String
  text: String
  published: Boolean
  location: String
}

input TweetUpdateManyMutationInput {
  title: String
  text: String
  published: Boolean
  location: String
}

input TweetUpdateManyWithoutOwnerInput {
  create: [TweetCreateWithoutOwnerInput!]
  delete: [TweetWhereUniqueInput!]
  connect: [TweetWhereUniqueInput!]
  set: [TweetWhereUniqueInput!]
  disconnect: [TweetWhereUniqueInput!]
  update: [TweetUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [TweetUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [TweetScalarWhereInput!]
  updateMany: [TweetUpdateManyWithWhereNestedInput!]
}

input TweetUpdateManyWithWhereNestedInput {
  where: TweetScalarWhereInput!
  data: TweetUpdateManyDataInput!
}

input TweetUpdateOneRequiredWithoutCommentsInput {
  create: TweetCreateWithoutCommentsInput
  update: TweetUpdateWithoutCommentsDataInput
  upsert: TweetUpsertWithoutCommentsInput
  connect: TweetWhereUniqueInput
}

input TweetUpdateWithoutCommentsDataInput {
  title: String
  text: String
  published: Boolean
  owner: UserUpdateOneRequiredWithoutTweetsInput
  location: String
}

input TweetUpdateWithoutOwnerDataInput {
  title: String
  text: String
  published: Boolean
  comments: CommentUpdateManyWithoutTweetInput
  location: String
}

input TweetUpdateWithWhereUniqueWithoutOwnerInput {
  where: TweetWhereUniqueInput!
  data: TweetUpdateWithoutOwnerDataInput!
}

input TweetUpsertWithoutCommentsInput {
  update: TweetUpdateWithoutCommentsDataInput!
  create: TweetCreateWithoutCommentsInput!
}

input TweetUpsertWithWhereUniqueWithoutOwnerInput {
  where: TweetWhereUniqueInput!
  update: TweetUpdateWithoutOwnerDataInput!
  create: TweetCreateWithoutOwnerInput!
}

input TweetWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  published: Boolean
  published_not: Boolean
  owner: UserWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  AND: [TweetWhereInput!]
  OR: [TweetWhereInput!]
  NOT: [TweetWhereInput!]
}

input TweetWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String
  zipcode: Int
  country: String
  updatedAt: DateTime!
  createdAt: DateTime!
  tweets(where: TweetWhereInput, orderBy: TweetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tweet!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String
  zipcode: Int
  country: String
  tweets: TweetCreateManyWithoutOwnerInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTweetsInput {
  create: UserCreateWithoutTweetsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTweetsInput {
  id: ID
  name: String!
  email: String
  zipcode: Int
  country: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  zipcode_ASC
  zipcode_DESC
  country_ASC
  country_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String
  zipcode: Int
  country: String
  updatedAt: DateTime!
  createdAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  zipcode: Int
  country: String
  tweets: TweetUpdateManyWithoutOwnerInput
}

input UserUpdateInput {
  name: String
  email: String
  zipcode: Int
  country: String
  tweets: TweetUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  zipcode: Int
  country: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutTweetsInput {
  create: UserCreateWithoutTweetsInput
  update: UserUpdateWithoutTweetsDataInput
  upsert: UserUpsertWithoutTweetsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTweetsDataInput {
  name: String
  email: String
  zipcode: Int
  country: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutTweetsInput {
  update: UserUpdateWithoutTweetsDataInput!
  create: UserCreateWithoutTweetsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  zipcode: Int
  zipcode_not: Int
  zipcode_in: [Int!]
  zipcode_not_in: [Int!]
  zipcode_lt: Int
  zipcode_lte: Int
  zipcode_gt: Int
  zipcode_gte: Int
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  tweets_every: TweetWhereInput
  tweets_some: TweetWhereInput
  tweets_none: TweetWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  name: String
}
`