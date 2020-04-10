import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {Helmet} from "react-helmet";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* <Helmet>
            
        <script src="./vendor/jquery/jquery.min.js"></script>
        <script src="./vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        
       
        <script src="./vendor/jquery-easing/jquery.easing.min.js"></script>

      
        <script src="./js/sb-admin-2.min.js"></script>

       
        <script src="./vendor/chart.js/Chart.min.js"></script>

       
        <script src="./js/demo/chart-area-demo.js"></script>
        <script src="./js/demo/chart-pie-demo.js"></script>
       </Helmet> */}
       <BrowserRouter >
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
