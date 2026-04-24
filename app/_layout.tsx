import { Stack } from "expo-router";
import "../global.css"; // Import global Tailwind/CSS styles

export default function RootLayout() {
  return (
    /* Define the root navigation stack for the entire application */
    <Stack screenOptions={{headerShown: false}}>
      {/* Specifically define the initial 'index' screen route */}
      <Stack.Screen
        name="index"
        options={{headerShown: false}} // Ensure the header is hidden for the entry screen
      />
    </Stack>
  );
}