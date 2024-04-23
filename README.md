# PayEngine Merchant Onboarding Demo

Demonstrates a Merchant Onboarding website that stores and retrieves created Merchant IDs to query PayEngine payment onboarding interface.

## Prerequisites

- [Docker v25.0.3](https://www.docker.com/)
- Docker Desktop v4.28 (Optional)
- Kubernetes v1.29.1
- Node v20.12.2
- Npm v10.5.0
- ~3GB storage capacity
- A Browser

## Launch

The system is divided into 3 environments: Client (Front End), Server (Back End), and the Database (PostgreSQL) each having their own docker image.

To launch the containerised docker images, install Docker and use `docker-compose` to run the container:

```
docker-compose up
```

Then navigate to: `localhost:3001` to preview the webpage.

To terminate, simply kill the terminal session and let it shutdown. Remember to purge any images to recover storage space.

## Selecting Different Merchants

Upon launch, the database is seeded with 3 merchant information. Each merchant was created separately in the PayEngine sandbox and the Merchant Name, Email Address, and Merchant ID were stored in the PostgreSQL database.

The 3 merchants have onboarded with different progress, and upon switching between merchants, the PayEngine widget will display the last onboarding step which the merchant left off.

To toggle between merchants, append the parameter `merchant=${id}` to the URL, for instance:

```
localhost:3000?merchant=1
```

or

```
localhost:3000/?merchant=1
```

Valid `${id}` values are: 1, 2, and 3, for the purpose of this demonstration. If the value is otherwise, an empty/clean PayEngine onboarding form will be presented. The PayEngine `merchant_id` value will also be displayed on the page title, if available.

## Behind The Scenes

Each individual image or codes can be executed separately without Docker if you prefer to run the system on your own workspace or sandbox.

### Client

The client contains a single page React application, developed with JavaScript. It uses the additional packages:

- axios (to call Express server endpoint)
- PayEngine onboarding widget (required)

To launch the client:

```
npm install
npm start
```

Then navigate to `localhost:3001` on your preferred web browser. 

Upon page load, the application will attempt to retrieve any existing merchant onboarding information (and its progress) from the backend if a `merchant` URL parameter value is provided. See: [Selecting Different Merchants](#selecting-different-merchants).

### Server

The Express server uses a few additional packages to fulfil backend functionality:

- nodemon (for auto restart)
- body-parser (for request parsing)
- cors (for cross origin sharing)
- knex (for query building)
- pg (for querying database)

To launch the server and populate database, ensure that PostgreSQL database is running first:

```
npm install
npm run migrate
npm run seed
npm start
```

This will populate the database with 3 merchant entries for demonstration. Navigate to `localhost:3000/merchant/${id}` to preview the database entries.

#### Migration 

The database migration creates a `merchants` table in the `postgres` database with the columns: `id`, `name`, `email`, `merchant_id`.

#### Seeds

The database seeds the `merchants` table with 3 data entries that were previously created using the PayEngine sandbox.

### Database 

You may use any instance of PostgreSQL database of your choice, but the target host is set to: `postgresdb` for Docker demonstration. Change this value as needed.

The code is set up to use the database named `postgres` on port `5432`. The parameters mentioned above along with the user ID and password are all defined in the `knexfile.js`. 

## References
- [Overview | PayEngine Developer Docs](https://docs.payengine.co/payengine-developer-docs)
- [Introduction | PayEngine API Reference](https://docs.payengine.co/payengine-api-reference)
- [Embedded Onboarding UI | PayEngine Developer Docs](https://docs.payengine.co/payengine-developer-docs/merchant-onboarding/embedded-onboarding-ui)

v1.0  
April 22, 2024