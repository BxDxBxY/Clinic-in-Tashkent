import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/Store/index";
import Example from "./Pages/example";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<div>This is home</div>} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </Provider>
  );
};

export default App;
