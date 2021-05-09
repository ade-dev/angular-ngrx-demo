# Angular application - NgRx demo


A demo Angular application with tests - Uses an API to display a list of regions, countries and the details of a selected country. NgRx libraries are implemented to manage the state of the app, Jasmine, Karma and Protractor for writing and running tests and Angular Material for presentation.


By [Ade Oyebadejo](https://www.clade.co.uk/adewole)


### Technologies

- [@ngrx/store](https://ngrx.io/guide/store) - RxJS powered state management for Angular apps, inspired by Redux
- [@ngrx/effects](https://ngrx.io/guide/effects) - Side effect model for @ngrx/store
- [@ngrx/store-devtools](https://ngrx.io/guide/store-devtools) - Instrumentation for @ngrx/store enabling time-travel debugging
- [@angular/router](https://angular.io/guide/router) - Angular Router
- [@angular/material](https://github.com/angular/material2) - Angular Material

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

### Installation

```Markdown

# Clone the repository
git clone https://github.com/ade-dev/angular-ngrx-demo.git

# Navigate to the app's root directory
cd angular-ngrx-demo

# Install the dependencies
npm install

# Run the application
ng serve

```

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via Karma.

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via Protractor.
