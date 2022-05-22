import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals






let a = [
    {
        name:   'Viktor',
        age:    22,
        address:{
            city:'Kirov',
            country:'Russia'
        }
    },
    {
        name:   'Danil',
        age:    12,
        address:{
            city:'Balashikha',
            country:'Russia'
        }
    }
]

console.log(a[1].address.city)
