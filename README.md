<h1 align="center"><img src="./src/assets/leanix-logo.png" alt="" width="auto" height="25" />Coding Challange Ferhat<img src="./src/assets/leanix-logo.png" alt="" width="auto" height="25" /></h1>


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.
##
<div align="center">
<img src="https://img.shields.io/badge/Made_with-TypeScript-blue?logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Angular-v16.2.3-black?logo=angular&logoColor=red&labelColor=white">
<img src="https://img.shields.io/badge/RxJS-v7.8.0-black?logo=reactivex&logoColor=red&labelColor=white">
<img src="https://img.shields.io/badge/GraphQL-v16-%23E10098?logo=graphql&logoColor=%23E10098&labelColor=white">
<img src="https://img.shields.io/badge/last%20commit-this%20month-orange?logo=github&logoColor=black&labelColor=white">
<img src="https://img.shields.io/badge/NodeJS-v16.20.2-blue?logo=nodedotjs&labelColor=white">
</div>

##
## Contents:
 - [Categories](#categories)
      - [Video](#video)
      - [About](#about-project)
      - [Used Packages And Modules](#used-packages-and-modules)
      - [Getting Started](#getting-started)
      - [Server](#server)
      - [Prerequisites](#prerequisites)
      - [Installation](#installation)
      - [Contact](#contact)

## Video




## About Project
You will build a web application using Angular that allows users to browse public GitHub repositories given a personal access token https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token After logging in with the personal access token, public GitHub repositories are listed on the screen and the user can page through the list**.** When selecting a repository, the user is navigated to a details page. It displays additional information about the repository (feel free to choose what information makes sense to you here) and contains a list of issues related to that repository. The issues that have the most comments shall be listed first. The user can page through the list of issues.
**Further requirements:**

 

- Necessary routing is implemented using the Angular Router

   

- Verifies that the provided API token is valid before navigating to the repository list using a test request to verify that.

   

    - If the test request returns an error in the response, you should display a meaningful error message next to the input element.

       

- The user can jump back to the entry route by clicking on a “Change API token” link in the top right of the application. By submitting the form again, they can change the token that the Angular application is using to make requests against GitHub.

   

- The API token is not persisted in anything like localStorage. Upon doing a full page reload, the user needs to enter their API token anew.

   

- Use the latest version of the Angular CLI to create your angular project. Feel free to make use of the latest Angular features - also as a learning opportunity for you.

   

- Use any stylesheet format you prefer. We use SCSS at LeanIX.

   

 

**Links to documentation of the GitHub API:**

 

- Entry point of the API documentation: https://docs.github.com/en/rest


## Used Packages And Modules

- Angular v16
- Angular Material
- RxJS
- Angular Router
- HttpClientModule
- ReactiveFormsModule
- TailwinCSS
- Apollo Client
- GraphQL
- Google Fonts

## Getting Started

:rocket: Run `npm i or npm install` to install all packages then You should use `ng serve ` or `npm run start`.



## Prerequisites
- NodeJS v16
- npm
- Angular 16
- Vs Code

## Installation
1. Clone the repo
```sh
git clone https://github.com/YadavRavi/coding-challenge-ferhat.git
```
2. Install NPM packages
```sh
npm install
```
3. Run Angular Project
```sh
npm run start
```

## license

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Ferhat ASLAN - [Linkedin](https://linkedin.com/in/aslanferhat) - aslanferhat16@gmail.com

Project Link: [https://github.com/YadavRavi/coding-challenge-ferhat.git](https://github.com/YadavRavi/coding-challenge-ferhat.git)

[linkedin-url]: https://linkedin.com/in/aslanferhat