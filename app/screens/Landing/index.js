import React, { memo } from 'react';
import Background from "../Register/components/Background";
import Logo from "../Register/components/Logo";
import Header from "../Register/components/Header";
import Paragraph from "../Register/components/Paragraph";
import Button from "../Register/components/Button";


const LandingScreen = ({ navigation }) => (
    <Background>
        <Logo />
        <Header>Login or Register</Header>

        <Paragraph>
            The easiest way to start with your amazing application.
        </Paragraph>
        <Button mode="contained" onPress={() => navigation.navigate('Login')}>
            Login
        </Button>
        <Button
            mode="outlined"
            onPress={() => navigation.navigate('Register')}
        >
            Sign Up
        </Button>
    </Background>
);

export default memo(LandingScreen);
