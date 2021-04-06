## Project Setup

In the project directory, run

### `npm install`

Install necesary depenedcies and packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Testing

An example of a snapshot test and a unit test is added to the code.To run them, run 

### `npm test`

Launches the test runner in the interactive watch mode.\

## Building

For production build, run the following command:

### `npm run build`

Builds the app for production to the `build` folder.\

## Folder Structure For src

```
├── Api
|  └── ApiCalls.js
├── App.css
├── App.js
├── Components
|  ├── Hero
|  |  ├── Cart
|  |  |  ├── Cart.css
|  |  |  ├── Cart.js
|  |  |  ├── CartSummary.css
|  |  |  ├── CartSummary.js
|  |  |  ├── Item.css
|  |  |  └── Item.js
|  |  ├── GridLayout
|  |  |  ├── GridLayout.css
|  |  |  ├── GridLayout.js
|  |  |  ├── ItemCard.css
|  |  |  └── ItemCard.js
|  |  ├── Hero.css
|  |  ├── Hero.js
|  |  └── NavigationBar
|  |     ├── Navbar.css
|  |     └── NavBar.js
|  └── NotFound
|     └── NotFound.js
├── index.css
├── index.js
├── logo.svg
├── Redux
|  ├── Actions
|  |  ├── cartActions.js
|  |  └── modalActions.js
|  ├── ActionTypes
|  |  ├── cartTypes.js
|  |  └── modaltypes.js
|  ├── Helpers
|  |  └── Helpers.js
|  ├── Reducers
|  |  ├── cartReducer.js
|  |  ├── modalReducer.js
|  |  └── rootReducer.js
|  └── Store
|     └── store.js
├── reportWebVitals.js
├── Resources
|  └── companyLogo.png
├── Router
|  └── RoutesHandler.js
├── setupTests.js
└── Tests
   ├── IntegrationTests
   ├── SnapshotTests
   |  └── GridLayout
   |     ├── GridLayout.test.js
   |     └── __snapshots__
   |        └── GridLayout.test.js.snap
   └── UnitTests
      └── NotFound.test.js
   ```