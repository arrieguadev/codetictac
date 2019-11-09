<p align="center">
  <a href="" rel="noopener">
 <img src=".github/assets/Logo.png" alt="Project logo"></a>
</p>

<h3 align="center">CodeTicTac</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/arrieguadev/codetictac.svg)](https://github.com/arrieguadev/codetictac/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/arrieguadev/codetictac.svg)](https://github.com/arrieguadev/codetictac/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Monitor your code time and your development team from WakaTime.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Contributing](#contributing)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This project aims to create a client platform for WakaTime. With the data obtained through the API, charts, estimates and more can be generated. This platform will have both a web and a mobile application. Have a good time!

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
You will need install node and yarn (or npm but yarn preferred)
You will need have access to a mongodb server
```

### Installing

After install prerequisites, follow these steps:

```
cd codetictac-server
yarn
cd ../codetictac-web
yarn
```

Now, on codetictac-server, you have to copy and past .env.example to .env and populate with your environment data.
Note that ```WAKATIME_CLIENT_ID``` and ``` WAKATIME_APP_SECRET``` must be obtained in https://wakatime.com/apps, creating a wakatime APP, and ```WAKATIME_REDIRECT_URL``` must to be http://localhost:3000/success and tha URL must be added on your app in https://wakatime.com/apps.

After that, to run backend:

```
cd codetictac-server
yarn dev
```

and to run web frontend:

```
cd codetictac-web
yarn start
```

## 🔧 Running the tests <a name = "tests"></a>

Tests are implemented only in server-side (you can help, contributing with frontend tests :) ). To run the tests:

```
cd codetictac-server
yarn test
```

## Contributing <a name = "contributing"></a>

### Contribution Guidelines

Read about our [Contribution Guidelines](/.github/CONTRIBUTING.md).

## ✍️ Authors <a name = "authors"></a>

- [@igorclaudino](https://github.com/igorclaudino) - Idea & Initial work

See also the list of [contributors](https://github.com/arrieguadev/codetictac/contributors) who participated in this project.
