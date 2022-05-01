import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calculator } from "./calculator.component";

export const Home = () =>
{
    return(
    <React.Fragment>
    <div className="row">
        <h1 className="text-center mb-5 mt-5">Calculator App</h1>
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