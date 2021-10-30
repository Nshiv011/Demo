import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';


// import Hello from "./App";
// import Head from "./Header";
// import {Hello1,Hello2} from "./App";
// import * as ques from "./App";
// import MyFunction from './Function';
// import FatArrow from "./FatArrow";
// import Login from "./Form";
import Rout from './Router';
import {BrowserRouter} from "react-router-dom";
import Cards from "./Cards";
import Cardss from './Cardss';



ReactDOM.render(
 <>
<BrowserRouter>
        <Rout/>
</BrowserRouter>

 </> 
,document.getElementById('demo')
);



