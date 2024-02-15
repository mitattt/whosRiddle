import React from 'react';
import { Provider } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { HomeIcon, LeaderboardIcon, SettingsIcon } from './src/components/svg';
import { HomeStack } from './src/routes/HomeStack';
import { LeaderboardScreen, SettingsScreen } from './src/screens';
import { store } from './src/store';
import { PALETTE } from './src/theme/PALETTE';
import { AppTabParamList } from './src/types/routeTypes';

const BottomTab = createBottomTabNavigator<AppTabParamList>();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={() => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: PALETTE.whitePinkish,
              position: 'absolute',
              height: 80,
              borderTopWidth: 0,
              elevation: 0,
            },
            tabBarItemStyle: {
              paddingBottom: 10,
            },
            tabBarActiveTintColor: PALETTE.greyRegular,
            tabBarHideOnKeyboard: true,
          })}>
          <BottomTab.Screen
            name="HOME"
            component={HomeStack}
            options={{
              headerShown: false,
              title: 'Home',
              tabBarIcon: HomeIcon,
            }}
          />
          <BottomTab.Screen
            name="LEADERBOARD"
            component={LeaderboardScreen}
            options={{
              headerShown: false,
              title: 'Leaderboard',
              tabBarIcon: LeaderboardIcon,
            }}
          />
          <BottomTab.Screen
            name="SETTINGS"
            component={SettingsScreen}
            options={{
              headerShown: false,
              title: 'Settings',
              tabBarIcon: SettingsIcon,
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
