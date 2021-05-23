import React from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

const Success = () => {
    return(
        <MuiThemeProvider>
            <React.Fragment>
                <div className="form-container text-center">
                    <AppBar title="Success" />
                    <h3>Thank you for your submission</h3>
                    <h4>You will get an email.</h4>
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default Success;
