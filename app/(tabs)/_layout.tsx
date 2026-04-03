import {Tabs} from "expo-router";
import React from 'react';


const _Layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,

        }}>
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
            }}
        />
        <Tabs.Screen
            name="device"
            options={{
                title: 'Device',
                headerShown: false,
            }}
        />

        <Tabs.Screen
            name="dashboard"
            options={{
                title: 'Dashboard',
                headerShown: false,
            }}
        />

        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
            }}
        />

    </Tabs>

  );
};

export default _Layout;