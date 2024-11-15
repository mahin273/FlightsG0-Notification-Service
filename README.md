# Base Node.js Project Template

Welcome to the Base Node.js Project Template! This template follows coding principles and project management recommendations to help you kickstart your Node.js projects. Feel free to customize it to suit your specific needs.

## Project Structure

Inside the `src` folder, you will find the following directories:

- `config`: This folder is used for configuring libraries and modules. You can set up environment variables, logging libraries, and more in this directory.

- `routes`: Register your routes and define the corresponding middleware and controllers in this folder.

- `middlewares`: Intercept incoming requests with validators, authenticators, and other interceptors in this directory.

- `controllers`: Controllers receive incoming requests and data, passing them to the business layer. They structure the API response and send the output back.

- `repositories`: Interact with the database by writing raw queries or using an ORM in this folder.

- `services`: Implement the business logic and interact with repositories to fetch data from the database in this directory.

- `utils`: Store helper methods, error classes, and other utility functions in this folder.

## Getting Started

To set up the project, follow these steps:

1. Download the template from GitHub and open it in your favorite text editor.
2. Navigate to the project's root directory and run `npm install` to install the dependencies.
3. Create a `.env` file in the root directory and add the required environment variables, such as the desired port number (`PORT`).
4. Inside the `src` folder, run `npx sequelize init` to initialize the migrations, seeders, and a `config.json` file.
5. Update the `config.json` file with the appropriate database credentials and dialect for your development, test, or production environment.
6. Run the server using `npm run dev`.

That's it! You're now ready to start building your Node.js project using this template.
