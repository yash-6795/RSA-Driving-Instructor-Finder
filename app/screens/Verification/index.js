import React, {useState} from 'react';
import {Button,} from 'react-native-paper';
import Header from "../Register/components/Header";
import TextInput from "../Register/components/TextInput";
import Background from "../Register/components/Background";
import Logo from "../Register/components/Logo";
import * as accountVerificationActions from "../../actions/verificationActions";
import {useDispatch, useSelector} from "react-redux";


export default function AccountVerification({navigation}) {
    const user_id = useSelector(state => state.userReducer.user.id);
    const dispatch = useDispatch();
    const [verificationCode, setVerificationCode] = useState({ value: '', error: '' });

    const onVerify = () => {
        dispatch(accountVerificationActions.accountVerificationRequest(user_id,verificationCode.value));
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
