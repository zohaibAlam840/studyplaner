import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { loginUser } from "../../firebase/auth";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useNavigation();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const user = await loginUser(email, password);
      router.replace("(tabs)");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>{loading ? "Logging in..." : "Login"}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link href="/ForgotPassword">
        <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
        </Link>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>

        <TouchableOpacity>
        <Link href="/Register">
          <Text style={styles.registerLink}> Register</Text>
          </Link>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Black background
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: "#fff", // White text
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#FF4D4D", // Red background
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff", // White text
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPasswordText: {
    color: "#FF4D4D", // Red text
    textAlign: "center",
    fontSize: 14,
    marginBottom: 30,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    color: "#fff", // White text
    fontSize: 14,
  },
  registerLink: {
    color: "#FF4D4D", // Red text
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Login;
