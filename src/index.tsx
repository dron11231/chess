import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

console.log(store.getState());
console.log(store.subscribe(() => console.log(store.getState())));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
