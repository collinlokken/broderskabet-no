import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';

/*import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
import { QueryClient, QueryClientProvider } from 'react-query';
import { persistWithLocalStorage } from 'react-query/persist-localstorage-experimental';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

persistWithLocalStorage(queryClient);
*/
ReactDOM.render(
  //<QueryClientProvider client={queryClient}>
    //<App />,
    <h3>hello</h3>,
  //</QueryClientProvider>,
  document.getElementById('root')
);

//serviceWorkerRegistration.register();
