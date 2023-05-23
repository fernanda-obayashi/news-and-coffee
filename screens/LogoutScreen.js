import { View, Text, CustomButton } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LogoutScreen = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View>
      <Text>LogoutScreen</Text>
      <CustomButton
        label={"Logout"}
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};

export default LogoutScreen;
