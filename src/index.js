import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


document.addEventListener('DOMContentLoaded', function(){
   
    var elements = document.getElementById('wprap-admin');
    if(typeof elements != 'undefined' && elements != null ){
        ReactDOM.render(<App />, document.getElementById('wprap-admin') );
    }
});
