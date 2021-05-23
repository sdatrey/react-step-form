import React from 'react';
import {AppBar, MuiThemeProvider, RaisedButton, List, ListItem} from "material-ui";

const Confirm = ({values : {firstName, lastName, email, occupation, bio, city} , next, prev}) => {
    const Continue = () => {
        next();
    }
    const Back = () => {
        prev()
    }
    return(
        <MuiThemeProvider>
            <div className="form-container text-center">
                <AppBar title="Confirm" />
                <List>
                    <ListItem
                        primaryText="First Name"
                        secondaryText={firstName}
                    />
                    <ListItem
                        primaryText="Last Name"
                        secondaryText={lastName}
                    />
                    <ListItem
                        primaryText="Email"
                        secondaryText={email}
                    />
                    <ListItem
                        primaryText="Occupation"
                        secondaryText={occupation}
                    />
                    <ListItem
                        primaryText="City"
                        secondaryText={city}
                    />
                    <ListItem
                        primaryText="Bio"
                        secondaryText={bio}
                    />
                </List>
                <br/>
                <RaisedButton
                    label="Back"
                    onClick={Back}
                    primary={true}
                    style={{ 'margin-right': '1.2rem' }}
                />
                <RaisedButton
                    label="Confirm & Continue"
                    onClick={Continue}
                    primary={true}
                />
            </div>
        </MuiThemeProvider>
    )
}
export default Confirm;
