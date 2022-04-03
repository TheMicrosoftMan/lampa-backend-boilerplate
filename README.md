# 💡 LAMPA Backend Boilerplate

This is boilerplate project for backend project. Feel free to contribute this project. Together we can create the best 🙂.

## 🔗 Table of Contents

-   [Technologies and libraries](#technologies-and-libraries)
-   [How to start the project](#how-to-start-the-project)
-   [How to stop the project](#how-to-stop-the-project)
-   [Contributing](#contributing)

## 📚 Technologies and libraries

The project uses:

-   **Node.js** 🗃️
-   **Express** 🚅
-   **MongoDB** 🪣
-   **JWT** for authorization 🔐
-   **Joi** to requests validation ✔️
-   **Winston** for logging 🧾
-   **Swagger** for API documentation 📕
-   **Eslint** for code checking 🎛️
-   **Prettier** for code formatting 📏
-   **Husky** for Git hooks 🪝

The project has recommended **configurations** for **eslint** and **prettier**. You can suggest your own configuration rules.

The project includes **pre-commit hook** that runs eslint and prettier to check and format your code.

**Swagger docs** are available at http://localhost:3000/api/v1/docs/.

**mongo-express UI** is available at http://localhost:8081/.

## 🚀 How to start the project

1. Install [Docker](https://www.docker.com/products/docker-desktop/);
2. Build and start containers:

    ```sh
    docker-compose --env-file ./development.env up -d
    ```

3. Project started 🎉. Wait a moment and go to http://localhost:3000/api/v1/docs/.

## 🛑 How to stop the project

1.  Stop the project:

        ```sh
        docker-compose stop
        ```

2.  Project stopped.

## 🤝Contributing

Please contribute using our Git flow. Create a branch, add commits, and open a pull request.
