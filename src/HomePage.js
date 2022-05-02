import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calculator } from "./calculator.component";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Home = () =>
{
    return(
    <React.Fragment>
    <ToastContainer position="top-center"/>
    <div className="row">
        <h1 className="text-center mt-5">Calculator App</h1>
        <div className="row">
            <div className="col-3"></div>
            <div className="mt-5 col-6 text-center">
                <Calculator/>
            </div>
            <div className="col-3"></div>
        </div>
    </div>
    </React.Fragment>
    );
}