// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }


import { Tabs } from "expo-router";
import {StyleSheet, } from "react-native"
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';



export default function Layout() {
  const colorScheme = useColorScheme()
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme: DefaultTheme}>
    <Tabs >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // tabBarIcon: ({ color }) => (
          //   <Icon name="home" size={24} color={color} />
          // ),
        }}
      />

      {/* Explore Tab */}
      <Tabs.Screen
        name="task"
        options={{
          title: "task",
          // tabBarIcon: ({ color }) => (
          //   <Icon name="compass" size={24} color={color} />
          // ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
          name="(profile)" // Group route
          options={{ title: "Profile", headerShown: false }}
        />

    <Tabs.Screen
    name="+not-found"
    options={{
      href: null,
    }}
    />
    </Tabs>
    </ThemeProvider>
  );
}
 const style = StyleSheet.create({
  contaier:{
    
  }
 })