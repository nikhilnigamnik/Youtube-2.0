import React from "react";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="px-6">
        <Head />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
