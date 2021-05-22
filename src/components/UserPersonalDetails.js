import React from 'react';
import {AppBar, MuiThemeProvider, RaisedButton, TextField} from "material-ui";

const UserPersonalDetails = ({values: {occupation , city, bio} , next , prev , handleChange}) => {
    const Continue = () => {
        next();
    }
    const Back = () => {
        prev()
    }
    return(
            <MuiThemeProvider>
                <div className="form-container text-center">
                    <AppBar title="Enter your personal details" />
                    <TextField
                        hintText="Enter your occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={occupation}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your city"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={city}
                    /><br/>
                    <TextField
                        hintText="Enter your bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={bio}
                    />
                    <br/>
                    <RaisedButton
                        label="Back"
                        onClick={Back}
                        primary={true}
                        style={{ 'margin-right': '1.2rem' }}
                    />
                    <RaisedButton
                        label="Continue"
                        onClick={Continue}
                        primary={true}
                    />
                </div>
            </MuiThemeProvider>
    )
}
export default UserPersonalDetails;
