import * as React from 'react';
import { Button } from 'react-native-paper';
import {render} from "redux-logger/src/diff";

const LogoutButton = (props) => {
    const handlePress = () => {
        props.logout()
    }
    return (
        <Button icon="logout" mode="contained" onPress={handlePress}>
            Logout
        </Button>
    )
};

export default LogoutButton;
