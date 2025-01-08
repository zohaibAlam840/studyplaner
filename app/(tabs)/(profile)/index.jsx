import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <Text style={styles.headerText}>Profile</Text>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImage} />
      </View>

      {/* Profile Options */}
      <View style={styles.optionsContainer}>
        {/* Edit Profile */}
        <Link href="/edit-profile" asChild>
          <Pressable style={styles.option}>
            <AntDesign name="edit" size={24} color="#FF5757" />
            <Text style={styles.optionText}>Edit Profile</Text>
          </Pressable>
        </Link>

        {/* App Settings */}
        <Link href="/account-settings" asChild>
          <Pressable style={styles.option}>
            <MaterialIcons name="settings" size={24} color="#FF5757" />
            <Text style={styles.optionText}>App Settings</Text>
          </Pressable>
        </Link>

        {/* Help */}
        <Link href="/help" asChild>
          <Pressable style={styles.option}>
            <Feather name="help-circle" size={24} color="#FF5757" />
            <Text style={styles.optionText}>Help</Text>
          </Pressable>
        </Link>

        {/* Logout */}
        <Link href="/logout" asChild>
          <Pressable style={styles.option}>
            <AntDesign name="logout" size={24} color="#FF5757" />
            <Text style={styles.optionText}>Logout</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Black background
    alignItems: "center",
    paddingTop: 20,
  },
  headerText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileImageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "white", // Placeholder for profile image
  },
  optionsContainer: {
    width: "90%",
    marginTop: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  optionText: {
    fontSize: 16,
    color: "white",
    marginLeft: 15,
    fontWeight: "500",
  },
});

export default ProfileScreen;
