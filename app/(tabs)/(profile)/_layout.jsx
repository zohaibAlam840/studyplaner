import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Profile" }} // Profile Main Screen
      />
      <Stack.Screen
        name="account-settings"
        options={{ title: "Account Settings" }} // Account Settings Screen
      />
      <Stack.Screen
        name="privacy"
        options={{ title: "Privacy Settings" }} // Privacy Settings Screen
      />
      <Stack.Screen
        name="logout"
        options={{ title: "Privacy Settings" }} // Privacy Settings Screen
      />     
    </Stack>
  );
}
