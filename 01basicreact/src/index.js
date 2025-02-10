import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chai from './chai';


const anotherElement = ( 
    <a href='https://google.com' target='_blank'>it expect a html element</a>

      );

const evaulatedExpress = " evaluted expression";  
const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Way to create React element',
  evaulatedExpress
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App/>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

