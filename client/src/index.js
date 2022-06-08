import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from 'react-service-worker';
import { QueryClient, QueryClientProvider } from 'react-query';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
import ScrollToTop from './components/utils/scrollToTop';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const localStoragePersistor = createWebStoragePersistor({storage: window.localStorage})

persistQueryClient({

  queryClient,

  persistor: localStoragePersistor,

})

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <ScrollToTop/>
      <App />
    </HashRouter>
  </QueryClientProvider>,
  document.getElementById('root')
);

registerServiceWorker
