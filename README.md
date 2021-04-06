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

## Api

Contains all the data fetching requests.

### Functions

1. apicalls.js

##### Parameters:None 
##### Functionality: Calls an external api GET endpoint and fetches data.

## Components
Contains all the react components used in this project

##### Hero
Main source of all the components that have been used.

#### Folder Structure
```
├── Cart
|  ├── Cart.css
|  ├── Cart.js
|  ├── CartSummary.css
|  ├── CartSummary.js
|  ├── Item.css
|  └── Item.js
├── GridLayout
|  ├── GridLayout.css
|  ├── GridLayout.js
|  ├── ItemCard.css
|  └── ItemCard.js
├── Hero.css
├── Hero.js
└── NavigationBar
   ├── Navbar.css
   └── NavBar.js
```
#### GridLayout
Display Items available at the store, interact with the products and redux calls.

##### Functions

1. handleAddToCart()
###### Parameters:None 
###### Functionality: Interact with the redux store to add an item to the cart.
2. handleIncreaseOrder()
###### Parameters:None 
###### Functionality: Interact with the redux store to increase the number of items ordered.
3. handleDecreaseOrder()
###### Parameters:None 
###### Functionality: Interact with the redux store to decrease the number of items ordered.

##### Redux

#### Folder Structure
```
├── Actions
|  ├── cartActions.js 
|  └── modalActions.js
├── ActionTypes       
|  ├── cartTypes.js
|  └── modaltypes.js
├── Helpers
|  └── Helpers.js
├── Reducers
|  ├── cartReducer.js
|  ├── modalReducer.js
|  └── rootReducer.js
└── Store
   └── store.js
```

#### Helper Functions

1. LoadCart()
###### Parameters:None 
###### Functionality: Loads the cart from store
2. CheckItemInCart(id)
###### Parameters: id of the intended item 
###### Functionality: Checks the quantity of the target item
3. GetTotalLength()
###### Parameters:None 
###### Functionality: Gets the total number of items from cart.
4. GetModalState()
###### Parameters:None 
###### Functionality: Used to toggle modal open/close
5. SubTotalCalculator()
###### Parameters:price and quantity of the item 
###### Functionality: Calculates the sub-total cost for the item
6. TotalCalculator()
###### Parameters: none
###### Functionality: Calculates the sub-total cost for all the items







