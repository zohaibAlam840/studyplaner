import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { resetPassword } from "../../firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    setLoading(true);
    try {
      await resetPassword(email);
      Alert.alert("Success", "Password reset email sent!");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email:</Text>
      <TextInput style={{ borderBottomWidth: 1, marginBottom: 20 }} value={email} onChangeText={setEmail} />
      <Button title={loading ? "Sending..." : "Reset Password"} onPress={handleResetPassword} />
    </View>
  );
};

export default ForgotPassword;
