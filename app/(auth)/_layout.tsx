import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{
          // Hide the header for this route
          headerShown: false,
        }}/>
        
    </Stack>
  );
}