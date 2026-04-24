import { icons } from "@/constants/icons";
import { router } from "expo-router";
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
  return (
    // SafeAreaView ensures content is not hidden by physical notches or status bars
    <SafeAreaView className="flex-1 bg-brand-soft">
      {/* KeyboardAvoidingView adjusts the view when the software keyboard pops up */}
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Allows dismissing the keyboard by tapping anywhere outside the input fields */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* ScrollView ensures the form is accessible on smaller screens or when the keyboard is open */}
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="flex-1 px-6 justify-center py-8">
              {/* Branding Logo */}
              <Image
                source={icons.logo}
                className="w-20 h-20 self-center mb-4"
                resizeMode="contain"
              />

              {/* Header section with Title and Subtitle */}
              <View className="items-center mb-8">
                <Text className="text-3xl font-bold text-brand-dark mt-2">
                  Create Account
                </Text>
                <Text className="text-brand-muted text-base mt-2 text-center">
                  Sign up to continue and start using your account
                </Text>
              </View>

              {/* Main Sign-Up Form Card */}
              <View className="bg-brand-card rounded-3xl p-6 shadow-soft">
                
                {/* Full Name Input Field */}
                <View className="mb-4">
                  <Text className="text-brand-text mb-2 font-semibold">
                    Full Name
                  </Text>
                  <TextInput
                    placeholder="Enter your full name"
                    placeholderTextColor="#64748B"
                    style={{ color: "#0F172A" }}
                    className="bg-brand-inputBg border border-brand-border rounded-2xl px-4 py-4"
                  />
                </View>

                {/* Email Input Field */}
                <View className="mb-4">
                  <Text className="text-brand-text mb-2 font-semibold">
                    Email
                  </Text>
                  <TextInput
                    placeholder="Enter your email"
                    placeholderTextColor="#64748B"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={{ color: "#0F172A" }}
                    className="bg-brand-inputBg border border-brand-border rounded-2xl px-4 py-4"
                  />
                </View>

                {/* Password Input Field */}
                <View className="mb-4">
                  <Text className="text-brand-text mb-2 font-semibold">
                    Password
                  </Text>
                  <TextInput
                    placeholder="Create a password"
                    placeholderTextColor="#64748B"
                    secureTextEntry // Hides characters for security
                    style={{ color: "#0F172A" }}
                    className="bg-brand-inputBg border border-brand-border rounded-2xl px-4 py-4"
                  />
                </View>

                {/* Confirm Password Input Field */}
                <View className="mb-5">
                  <Text className="text-brand-text mb-2 font-semibold">
                    Confirm Password
                  </Text>
                  <TextInput
                    placeholder="Confirm your password"
                    placeholderTextColor="#64748B"
                    secureTextEntry
                    style={{ color: "#0F172A" }}
                    className="bg-brand-inputBg border border-brand-border rounded-2xl px-4 py-4"
                  />
                </View>

                {/* Submit Action Button */}
                <TouchableOpacity className="bg-brand-accent rounded-2xl py-4 items-center">
                  <Text className="text-brand-white text-base font-bold">
                    Sign Up
                  </Text>
                </TouchableOpacity>

                {/* Navigation Link to Login Screen */}
                <View className="flex-row justify-center mt-6">
                  <Text className="text-brand-muted">
                    Already have an account?{" "}
                  </Text>
                  <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                    <Text className="text-brand-primary font-bold">Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}