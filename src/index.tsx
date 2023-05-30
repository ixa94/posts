import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'react-toastify/dist/ReactToastify.css';
import 'assets/index.scss';
import App from 'App';

const config = configureStore();
export const { store, persistor } = config;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
