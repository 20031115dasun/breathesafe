import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard, Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { icons } from "@/constants/icons";
import CustomAlert from "@/components/CustomAlert";

export default function Login() {
  const [password, setPassword] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  function handleSubmit(userName:string,password:string) {
    if (!userName || !password) {
      setAlertMessage("Please enter a username and password");
      setAlertType("error");
    }
    else if (password==="admin" && userName==="admin") {

      setTimeout(() => {
        router.replace("/(tabs)/dashboard")
      },1000)
    }
    else {
      setAlertMessage("Please enter a valid username and password");
      setAlertType("error");
    }

    setAlertVisible(true)
  }


  return (
      <SafeAreaView className="flex-1 bg-brand-soft">
        <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === "android" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
              <View className="flex-1 px-6 justify-center">
                <Image
                    source={icons.logo}
                    className="w-60 h-60 self-center mb-4"
                    resizeMode="contain"
                />
                <View className="items-center mb-10">
                  <Text className="text-3xl font-bold text-brand-dark mt-1">
                    Welcome Back
                  </Text>
                  <Text className="text-brand-muted text-base mt-2 text-center">
                    Login to continue to your account
                  </Text>
                </View>

                <View className="bg-brand-card rounded-3xl p-6 shadow-soft">
                  <View className="mb-4">
                    <Text className="text-brand-text mb-2 font-semibold">
                      Username
                    </Text>
                    <TextInput
                        placeholder="Enter your username"
                        placeholderTextColor="#64748B"
                        className="bg-brand-inputBg border border-brand-border rounded-2xl px-4 py-4 text-brand-dark"
                        value={username}
                        onChangeText={setUsername}
                    />
                  </View>

                  <View className="mb-4">
                    <Text className="text-brand-text mb-2 font-semibold">
                      Password
                    </Text>
                    <TextInput
                        placeholder="Enter your password"
                        placeholderTextColor="#64748B"
                        secureTextEntry
                        className="bg-brand-inputBg border border-brand-border rounded-2xl px-4 py-4 text-brand-dark"
                        id='inputPassword'
                        value={password}
                        onChangeText={setPassword}
                    />
                  </View>

                  <TouchableOpacity className="self-end mb-5">
                    <Text className="text-brand-primary font-semibold">
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                      className="bg-brand-primary rounded-2xl py-4 items-center"
                      onPress={() => {handleSubmit(username, password)}}
                  >
                    <Text className="text-brand-white text-base font-bold">
                      Login
                    </Text>
                  </TouchableOpacity>

                  <View className="flex-row justify-center mt-6">
                    <Text className="text-brand-muted">
                      Don’t have an account?{" "}
                    </Text>
                    <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
                      <Text className="text-brand-accent font-bold">Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        <CustomAlert
            visible={alertVisible}
            type={alertType}
            message={alertMessage}
            onClose={() => setAlertVisible(false)}
        />
      </SafeAreaView>
  );
}