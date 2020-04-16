import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import App from "./SquareAPI/App";



const ThirdStep = props => {
    return (
        // <App></App>
        <App caleb={props}></App>
    );
};

export default ThirdStep;