import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeviceInfo from 'react-native-device-info';
import { IconButton } from 'react-native-paper';
import { navigationRef } from './NavigationService';
import Login from 'app/screens/Login';
import AppointmentDetail from 'app/screens/AppointmentDetail';
import Tabs from './Tabs';
import Register from "../screens/Register";
import Landing from "../screens/Landing";
import AccountVerification from "../screens/Verification";
import {useDispatch} from "react-redux";

const Stack = createStackNavigator();

function App() {
  const stackProps = DeviceInfo.isTablet() ? { headerMode: 'none' } : {};
  const dispatch = useDispatch();
  const logout = () => {dispatch()}
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName='Landing'
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
                  onPress={() =>  {
                      navigationRef.current?.reset({
                      index: 0,
                      routes: [{ name:'Landing' }],
                      });
                  }
                  }
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
