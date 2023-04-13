## Getting started

### Dependencies

If you decide to run the solution locally instead of running in Docker, make sure you:

1. Install PostgreSQL
2. Create a new DB with the same name that you configured in your `ormconfig.json` file


```
npm install
npm run dev
npm run seed:run
```

Using yarn

```
yarn
yarn run dev
yarn run seed:run
```

### Using docker

```
npm run docker:build
npm run docker:start
```

## Running Seed Data

In order to seed some sample data automatically into the DB, please run:

```
yarn run seed-data:run
```

## Design decision and trade-offs

- TypeORM was used to make it easier to run migrations and seed data as well as to keep all the entities well typed
- A sample test was included to test the User Entity and it's endpoints
- Used Faker to make it easier to seed sample data in the DB
- Created a new table `BooksChecked` to keep track of user checkouts even if the user returned the book, that way we have full trackability of what happened with a given book and a given user
- Docker was added as a plus to make it easier to run the project
- Generic error validation was added to handle fallbacks and error exceptions
- Sample migrations were added as a way to see how they work in general
- `/return-book/:userId/:bookIdentificationNumber` endpoint was added to make it possible to for users to return checked out books

## Extras

I've created a Postman collection and exported the JSON that can be found at `./Books API.postman_collection.json`. In order to use it follow the steps below:

1. Open Postman
2. Click Import, click Choose Files and specify `Books API.postman_collection.json`.
3. An import success message should appear and you should be able to see all the endpoints in the collection
