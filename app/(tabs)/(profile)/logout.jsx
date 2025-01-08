import { logoutUser } from "../../../firebase/auth";
import { Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LogoutButton = () => {
  const navigation = useNavigation()
  const handleLogout = async () => {
    try {
      await logoutUser();
      navigation.replace("(auth)")
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return <Button title="Logout" onPress={handleLogout} />;
};

export default LogoutButton;
