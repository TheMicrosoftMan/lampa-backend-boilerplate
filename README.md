# π‘ LAMPA Backend Boilerplate

This is boilerplate project for backend project. Feel free to contribute this project. Together we can create the best π.

## π Table of Contents

-   [Technologies and libraries](#technologies-and-libraries)
-   [How to start the project](#how-to-start-the-project)
-   [How to stop the project](#how-to-stop-the-project)
-   [Contributing](#contributing)

## π Technologies and libraries

The project uses:

-   **Node.js** ποΈ
-   **Express** π
-   **MongoDB** πͺ£
-   **JWT** for authorization π
-   **Joi** to requests validation βοΈ
-   **Winston** for logging π§Ύ
-   **Swagger** for API documentation π
-   **Eslint** for code checking ποΈ
-   **Prettier** for code formatting π
-   **Husky** for Git hooks πͺ

The project has recommended **configurations** for **eslint** and **prettier**. You can suggest your own configuration rules.

The project includes **pre-commit hook** that runs eslint and prettier to check and format your code.

**Swagger docs** are available at http://localhost:3000/api/v1/docs/.

**mongo-express UI** is available at http://localhost:8081/.

## π How to start the project

1. Install [Docker](https://www.docker.com/products/docker-desktop/);
2. Build and start containers:

    ```sh
    docker-compose --env-file ./development.env up -d
    ```

3. Project started π. Wait a moment and go to http://localhost:3000/api/v1/docs/.

## π How to stop the project

1.  Stop the project:

    ```sh
    docker-compose stop
    ```

2.  Project stopped.

## π€Contributing

Please contribute using our Git flow. Create a branch, add commits, and open a pull request.
