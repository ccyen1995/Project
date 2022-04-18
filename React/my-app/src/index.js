//ES6
import react from "react";
import reactdom from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

reactdom.render(
  <react.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </react.StrictMode>,
  document.querySelector("#root")
);

// function App(){
//   return react.createElement('h1',null,'hello')
// }

// 假設要放入多個元素
// function app(){
//   return react.createElement('div',null,[
//     react.createElement('h1',{style:{color:'red'}},'hiiiiii'),
//     react.createElement('button',null,'a button')
//   ])
// }

// 用JSX
// function App(){
//   return (<div>
//     <h1>my profile</h1>
//     <p>my name is haha</p>
//   </div>)
// }
// 任何一個function只能回傳一個值而以，因此要用一個頭尾標籤將所有內容裝起來，例如div
// reactdom.render(react.createElement(app),document.querySelector('#root'));
// reactdom.render(App(),document.querySelector('#root'));

// JSX
// javascript extension, write javascript that look like html
// Babel
// is javascript compiler JSX into regular javascript
