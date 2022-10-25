import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import { compose } from "redux";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducer, composeEnhancers());

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

store.subscribe(() => console.log(store.getState()));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
