import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import MyButton from './MyButton';
import MyInput from "./MyInput";
import MyList from './MyList';
import HigherOrder from "./HigherOrder";

const items = [
  {id: 0, name: "First"},
  {id: 1, name: "Second"},
  {id: 2, name: "Third"},
  {id: 3, name: "Fourth"},
  {id: 4, name: "Fifth"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <MyButton> Hello Button </MyButton>
    <hr/>
    <MyInput />
    <hr/>
    <MyList items={items} />
    <hr/>
    <HigherOrder />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
