import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "material-ui/AppBar";
import TextField from 'material-ui/TextField';

const UserFormDetails = ({values: {firstName, lastName, email} , next , handleChange}) => {
    const Continue = () => {
        next();
    }
    return(
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter User Details" />
                <div className="form-container">
                    <TextField
                        hintText="Enter your first name"
                        floatingLabelText="First Name"
                        onChange={handleChange('First Name')}
                        defaultValue={firstName}
                    />
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    )

}
export default UserFormDetails;
