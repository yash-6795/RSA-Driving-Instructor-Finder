import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import LogoutButton from "./components/logoutButton";
import * as loginActions from "../../actions/loginActions";
import * as navigationActions from "../../actions/navigationActions";
import {useDispatch} from "react-redux";

const UserSettings = () => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(loginActions.onUserLogout())
        navigationActions.resetToLogin()
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{uri: 'https://i.ya-webdesign.com/images/male-avatar-icon-png-7.png'}}/>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.userName}>John Doe</Text>
                    <Text style={styles.info}>Athlone, Westmeath</Text>
                    <Text style={styles.description}>
                        In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.
                    </Text>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <LogoutButton logout={logout}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#00BFFF",
        height:200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
    },
    name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
    },
    body:{
        marginTop:40,
    },
    bodyContent: {
        flexDirection: 'column',
        alignItems: 'center',
        padding:30

    },
    userName:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
    },
    info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
    },
    description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'justify'
    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
    },
});

export default UserSettings;
