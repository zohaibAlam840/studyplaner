
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons"; // Importing icons

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colorScheme === "dark" ? "#121212" : "#ffffff",
            height: 60,
          },
          tabBarActiveTintColor: "#FF5757",
          tabBarInactiveTintColor: colorScheme === "dark" ? "#888" : "#666",
          tabBarShowLabel: true,
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
          }}
        />

        {/* Tasks Tab */}
        <Tabs.Screen
          name="task"
          options={{
            title: "Tasks",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="task-alt" size={24} color={color} />
            ),
          }}
        />

        {/* Add Task Tab */}
        <Tabs.Screen
          name="add-task"
          options={{
            title: "Add Task",
            tabBarIcon: ({ color }) => (
              <AntDesign name="pluscircle" size={30} color={color} />
            ),
            tabBarLabelStyle: {
              display: "none", // Hides the label for this tab
            },
          }}
        />
        <Tabs.Screen
          name="starts" // Group route
          options={{
            title: "starts",
            tabBarIcon: ({ color }) => <Feather name="compass" size={24} color={color} />,
          }}
        />
        {/* Profile Tab */}
        <Tabs.Screen
          name="(profile)" // Group route
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
            headerShown: false,
          }}
        />


        {/* Not Found */}
        <Tabs.Screen
          name="+not-found"
          options={{
            href: null, // Prevents the not-found route from showing
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}

const style = StyleSheet.create({
  container: {},
});
