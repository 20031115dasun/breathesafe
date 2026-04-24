import { Stack } from "expo-router";

/**
 * AuthLayout defines the navigation structure for the authentication flow.
 * Using a Stack allows for transition animations between login, signup, and forgot password screens.
 */
const AuthLayout = () => {
  return (
    /* The <Stack /> component registers all files in this directory as screens.
      screenOptions={{ headerShown: false }} is used to hide the default 
      native header, allowing you to use your own custom UI design.
    */
    <Stack screenOptions={{ headerShown: false }} />
  );
};

export default AuthLayout;