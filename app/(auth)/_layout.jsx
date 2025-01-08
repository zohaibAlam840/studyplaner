import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
        <Stack.Screen
        name="index"
        options={{ headerShown: false }} // Hides the header/title
        />
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="Register" options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" options={{ hearderShow: false }} />
    </Stack>
  );
};

export default AuthLayout;
