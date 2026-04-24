import { Redirect } from "expo-router";

const Index = () => {
  // Mock authentication state to determine user flow
  const isLoggedIn = false;

  // Conditional redirect: sends users to the Dashboard if logged in, 
  // otherwise forces them to the Login screen.
  return isLoggedIn
    ? <Redirect href='/(tabs)' /> :
      <Redirect href="/(auth)/login" />
};

export default Index;