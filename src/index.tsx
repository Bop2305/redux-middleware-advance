import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcom";
import SignIn from "./components/auth/SignIn";
import { Provider } from "react-redux";
import store from "./store";
import Feature from "./components/Feature";
import SignOut from "./components/auth/SignOut";
import PostContainer from "./features/post/post.container";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/posts" element={<PostContainer />} />
          </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

