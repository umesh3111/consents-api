# Consent Assignment by Umesh Sharma

## Description

- Using nestjs with typescript
- For database I am using a in memory database
  - @nestjs-addons/in-memory-db
- Implemented Swagger to test the apis
- Implementations
  - Entities are models that interact with the database
  - Repositories contain all the interactions with the databases (files are annotated with .repository.ts)
  - Services contain the business logic (files are annotated with .service.ts)
  - Controllers contain the API routes

## Instructions

- Clone the repository
- Run
  ```
  npm install
  ```
- The project uses a in memory database. All you need to do is run the project and test the apis
- Once All packages installed run the start:dev script using
  ```
  npm run start:dev
  ```
- This starts the backend server on
  ```
  http://localhost:3000
  ```
- To run the swagger docs go on the following url

  ```
  http://localhost:3000/docs
  ```
