import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import {
  InputField,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  CustomButton,
  StyleSheet,
} from "react-native";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}></View>

        <Text style={styles.text}>Login</Text>

        <InputField
          label={"Email ID"}
          icon={<MaterialIcons name="email" size={24} color="black" />}
          keyboardType="email-address"
        />

        <InputField
          label={"Password"}
          icon={
            <MaterialCommunityIcons
              name="form-textbox-password"
              size={24}
              color="black"
            />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />

        <CustomButton
          label={"Login"}
          onPress={() => {
            login();
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Roboto-Medium",
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
    marginBottom: 30,
  },
});
