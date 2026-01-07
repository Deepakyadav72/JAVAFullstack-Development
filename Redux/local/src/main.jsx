import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { Provider } from 'react-redux';
import { myOwnStore } from './App/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={myOwnStore}>
    <App />
  </Provider>
);