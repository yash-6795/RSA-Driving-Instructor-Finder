import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DeviceInfo from 'react-native-device-info';
import {IconButton} from 'react-native-paper';
import {navigationRef} from './NavigationService';
import Login from 'app/screens/Login';
import AppointmentDetail from 'app/screens/AppointmentDetail';
import UserSettings from "../screens/UserSettings";
import Tabs from './Tabs';
import Register from "../screens/Register";
import Landing from "../screens/Landing";
import AccountVerification from "../screens/Verification";
import {useDispatch, useSelector} from "react-redux";
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';


const Stack = createStackNavigator();

function App() {
    const stackProps = DeviceInfo.isTablet() ? { headerMode: 'none' } : {};
    const user = useSelector(state => state.userReducer.user)
    const dispatch = useDispatch();
    const userSettings = () => {
        navigationActions.navigateToUserSettings()
    }
    let initialRouteName = 'Landing'
    if(user.isLoggedIn && user.isVerified){
        initialRouteName = 'Home'
    } else if(user.isLoggedIn){
        initialRouteName = 'AccountVerification'
    }
    return (
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName={initialRouteName}
            {...stackProps}
            screenOptions={{
              headerStyle: {
                backgroundColor: '##fff',
                borderBottomWidth: StyleSheet.hairlineWidth,
              },
              headerTintColor: '#2c3e50',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackTitleVisible: false,
            }}>
            <Stack.Screen name="Landing" component={Landing}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="AccountVerification" component={AccountVerification} />
            <Stack.Screen name="UserSettings" component={UserSettings}/>
            <Stack.Screen
              name="Home"
              component={Tabs}
              options={{
                headerLeft: null,
                headerRight: () => (
                  <View style={{ flexDirection: 'row' }}>
                    <IconButton
                      icon="settings"
                      color="#bdc3c7"
                      size={20}
                      onPress={userSettings}
                    />
                    <IconButton
                      icon="bell"
                      color="#bdc3c7"
                      size={20}
                      onPress={() => {}}
                    />
                  </View>
                ),
              }}
            />
            <Stack.Screen
              name="AppointmentDetail"
              component={AppointmentDetail}
              options={{ title: 'Appointment Information' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default App;
