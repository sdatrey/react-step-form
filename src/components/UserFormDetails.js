import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "material-ui/AppBar";
import TextField from 'material-ui/TextField';
import {RaisedButton} from "material-ui";

const UserFormDetails = ({values: {firstName, lastName, email} , next , handleChange}) => {
    const Continue = () => {
        next();
    }
    return(
        <MuiThemeProvider>
            <React.Fragment>
                <div className="form-container text-center">
                    <AppBar title="Enter User Details" />
                    <TextField
                        hintText="Enter your first name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={firstName}
                    />
                    <br/>
                    <TextField
                        defaultValue={lastName}
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        hintText="Enter Your last name"
                        />
                        <br/>
                    <TextField
                        hintText="Enter your email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={email}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        onClick={Continue}
                        primary={true}
                    />
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    )

}
export default UserFormDetails;
