import React, {Suspense} from 'react'
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/index';


import App from './App';

import './i18next';
import './styles/style.css';



reactDOM.render(
    <Suspense fallback={(<div>~~~~~~</div>)}>
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <App />
      </PersistGate>
    </Provider>
  </Suspense>,
  document.getElementById('root'))
