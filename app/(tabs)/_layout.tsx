import {Tabs} from "expo-router";
import React from 'react';
import {ImageBackground , Image , Text , View} from "react-native";
import {images} from "@/constants/images";
import { BlurView } from 'expo-blur';


const TabIcon = ({focused,title,icon}:any) => {
    if(focused){
        return (
            <ImageBackground
                className="flex flex-row min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full bg-brand-soft">
                <Image
                    source={icon}
                    className="size-5"
                    tintColor='#31CDB6'/>
                <Text className="text-brand-primary text-sm font-semibold ml-2">
                    {title}
                </Text>
            </ImageBackground>
        )
    }

    else {
        return (
            <View className="size-full justify-center items-center mt-4 rounded-full" >
                <Image source={icon} className="size-5" tintColor='#64748B'/>
            </View>
        )
    }

}

const _Layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle:{
                width:'100%',
                height:'100%',
                justifyContent:'center',
                alignItems:'center'
            },
            tabBarStyle:{
                backgroundColor:'#FFFFFF',
                borderRadius:50,
                shadowColor: '#31CDB6',
                shadowOpacity: 0.15,
                shadowRadius: 10,
                elevation: 8,
                marginHorizontal:20,
                marginBottom:36,
                height:52,
                position:'absolute',
                overflow:'hidden',
                borderWidth:1,
                borderColor:'#DDE5EC',
            }

        }}>
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <TabIcon focused={focused} title="Home" icon={images.home}/>
                )
            }}
        />
        <Tabs.Screen
            name="device"
            options={{
                title: 'Device',
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <TabIcon focused={focused} title="Device" icon={images.device}/>
                )

            }}
        />

        <Tabs.Screen
            name="dashboard"
            options={{
                title: 'Dashboard',
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <TabIcon focused={focused} title="Dashboard" icon={images.dashboard}/>
                )
            }}
        />

        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <TabIcon focused={focused} title="Profile" icon={images.person}/>
                )
            }}
        />

    </Tabs>

  );
};

export default _Layout;