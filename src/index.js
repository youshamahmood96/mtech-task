import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './Redux/Store/store'
import App from './App';
import './index.css'
import {QueryClient,QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

