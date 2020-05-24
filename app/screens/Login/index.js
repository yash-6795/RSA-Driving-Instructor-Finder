import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Text} from 'react-native-paper';

import {useDispatch} from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import styles from './styles';
import Header from "../Register/components/Header";
import TextInput from "../Register/components/TextInput";
import Background from "../Register/components/Background";
import Logo from "../Register/components/Logo";

export default function Login({navigation}) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const onLogin = () => {
        dispatch(loginActions.requestLogin(email.value, password.value));
    }

    return (
        <Background>

            <Logo />

            <Header>Login</Header>

            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />

            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPasswordScreen')}
                >
                    <Text style={styles.label}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            <Button mode="contained" onPress={onLogin}>
                Login
            </Button>

            <View style={styles.row}>
                <Text style={styles.label}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background>

    );
}
