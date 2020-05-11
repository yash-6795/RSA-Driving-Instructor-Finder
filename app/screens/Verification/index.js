import React, {useState} from 'react';
import { View, TouchableOpacity } from 'react-native';
import {Button, Text,} from 'react-native-paper';
import styles from './styles';
import Header from "../Register/components/Header";
import TextInput from "../Register/components/TextInput";
import Background from "../Register/components/Background";
import Logo from "../Register/components/Logo";
import * as loginActions from "../../actions/loginActions";
import * as accountVerificationActions from "../../actions/verificationActions";
import {useDispatch} from "react-redux";


export default function AccountVerification({navigation}) {
    const dispatch = useDispatch();
    const [verificationCode, setVerificationCode] = useState({ value: '', error: '' });

    const onVerify = () => {
        dispatch(accountVerificationActions.accountVerificationRequest('1234'));
    }

    return (
        <Background>

            <Logo />

            <Header>Account Verification Pending</Header>

            <TextInput
                label="Code"
                returnKeyType="next"
                value={verificationCode.value}
                onChangeText={text => setVerificationCode({ value: text, error: '' })}
                error={!!verificationCode.error}
                errorText={verificationCode.error}
                autoCapitalize="none"
            />

            <Button mode="contained" onPress={onVerify}>
                Verify
            </Button>
        </Background>

    );
}
